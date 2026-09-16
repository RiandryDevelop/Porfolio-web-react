/**
 * Contact form endpoint.
 *
 * Delivery is opt-in: set RESEND_API_KEY (and optionally CONTACT_TO_EMAIL) to
 * send real mail. Without it the route reports 501 so the form can tell people
 * to email directly instead of pretending the message went through.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = { name: 120, email: 160, company: 160, message: 5000 };

const clean = (value, limit) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : '';

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const name = clean(req.body?.name, MAX.name);
  const email = clean(req.body?.email, MAX.email);
  const company = clean(req.body?.company, MAX.company);
  const message = clean(req.body?.message, MAX.message);
  const honeypot = clean(req.body?.website, 100);

  // Bots fill the hidden field. Answer 200 so they do not learn they were caught.
  if (honeypot) return res.status(200).json({ ok: true });

  if (!name || !EMAIL_RE.test(email) || message.length < 20) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(501).json({ error: 'Mail delivery is not configured' });
  }

  const to = process.env.CONTACT_TO_EMAIL || 'riandrydevsoffers@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio — ${name}${company ? ` (${company})` : ''}`,
        html: [
          `<p><strong>De:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
          company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : '',
          '<hr />',
          `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
        ].join(''),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend rejected the message:', response.status, detail);

      // Surface the provider's reason while developing — misconfiguration here
      // (unverified sender domain, wrong recipient) is otherwise invisible in
      // the browser. Production keeps the response opaque.
      return res.status(502).json({
        error: 'Delivery failed',
        ...(process.env.NODE_ENV === 'development' && { detail }),
      });
    }

    // Keep the provider's id so a "they never replied" report can be traced
    // back to an actual delivery in the Resend dashboard.
    const { id } = await response.json().catch(() => ({}));
    console.log('Contact form delivered:', id || '(no id returned)');

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
