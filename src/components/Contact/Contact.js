import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import {
  LuCheck,
  LuCopy,
  LuGithub,
  LuLinkedin,
  LuLoader,
  LuMail,
  LuSend,
  LuX,
} from 'react-icons/lu';

import { site, socials } from '../../constants/site';
import { fadeUp, inView, stagger } from '../../styles/animations/variants';
import Button from '../../styles/GlobalComponents/Button';
import {
  Container,
  Eyebrow,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Actions,
  Aside,
  Consent,
  DirectLink,
  DirectLinks,
  Field,
  FieldError,
  Form,
  Honeypot,
  Input,
  Label,
  Layout,
  Spinner,
  StatusMessage,
  Textarea,
} from './ContactStyles';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = { name: '', email: '', company: '', message: '', website: '' };

const Contact = () => {
  const { t } = useTranslation('common');

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: null } : prev));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = t('contact.errors.name');
    if (!EMAIL_RE.test(values.email.trim())) next.email = t('contact.errors.email');
    if (values.message.trim().length < 20) next.message = t('contact.errors.message');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (state === 'sending') return;
    if (!validate()) return;

    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setState('sent');
      setValues(EMPTY);
    } catch (err) {
      setState('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link above still works.
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <Eyebrow>{t('contact.eyebrow')}</Eyebrow>
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <SectionLead>{t('contact.lead')}</SectionLead>
        </SectionHeader>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <Layout>
            <Aside as={motion.div} variants={fadeUp}>
              <DirectLinks>
                <DirectLink>
                  <a href={`mailto:${site.email}`}>
                    <LuMail size={18} aria-hidden="true" />
                    <span>
                      <small>{t('contact.direct.email')}</small>
                      {site.email}
                    </span>
                  </a>
                </DirectLink>

                <DirectLink>
                  <button type="button" onClick={copyEmail}>
                    {copied ? (
                      <LuCheck size={18} aria-hidden="true" />
                    ) : (
                      <LuCopy size={18} aria-hidden="true" />
                    )}
                    <span>
                      <small>{t('contact.direct.copy')}</small>
                      {copied ? t('contact.direct.copied') : site.email}
                    </span>
                  </button>
                </DirectLink>

                <DirectLink>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <LuLinkedin size={18} aria-hidden="true" />
                    <span>
                      <small>LinkedIn</small>
                      {t('contact.direct.linkedin')}
                    </span>
                  </a>
                </DirectLink>

                <DirectLink>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer">
                    <LuGithub size={18} aria-hidden="true" />
                    <span>
                      <small>GitHub</small>
                      {t('contact.direct.github')}
                    </span>
                  </a>
                </DirectLink>
              </DirectLinks>
            </Aside>

            <Form as={motion.form} variants={fadeUp} onSubmit={onSubmit} noValidate>
              <Field>
                <Label htmlFor="contact-name">
                  {t('contact.fields.name')} <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  value={values.name}
                  onChange={update('name')}
                  autoComplete="name"
                  $invalid={!!errors.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <FieldError id="contact-name-error">{errors.name}</FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="contact-email">
                  {t('contact.fields.email')} <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={update('email')}
                  autoComplete="email"
                  $invalid={!!errors.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <FieldError id="contact-email-error">{errors.email}</FieldError>
                )}
              </Field>

              <Field $full>
                <Label htmlFor="contact-company">{t('contact.fields.company')}</Label>
                <Input
                  id="contact-company"
                  name="company"
                  value={values.company}
                  onChange={update('company')}
                  autoComplete="organization"
                />
              </Field>

              <Field $full>
                <Label htmlFor="contact-message">
                  {t('contact.fields.message')} <span aria-hidden="true">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={values.message}
                  onChange={update('message')}
                  placeholder={t('contact.fields.messagePlaceholder')}
                  $invalid={!!errors.message}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                />
                {errors.message && (
                  <FieldError id="contact-message-error">{errors.message}</FieldError>
                )}
              </Field>

              <Honeypot aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={update('website')}
                />
              </Honeypot>

              <Actions>
                <Consent>{t('contact.consent')}</Consent>
                <Button type="submit" $variant="primary" disabled={state === 'sending'}>
                  {state === 'sending' ? (
                    <>
                      <Spinner>
                        <LuLoader size={16} aria-hidden="true" />
                      </Spinner>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <LuSend size={16} aria-hidden="true" />
                      {t('contact.submit')}
                    </>
                  )}
                </Button>
              </Actions>

              {state === 'sent' && (
                <StatusMessage role="status" $tone="success">
                  <LuCheck size={18} aria-hidden="true" />
                  {t('contact.success')}
                </StatusMessage>
              )}

              {state === 'error' && (
                <StatusMessage role="alert" $tone="error">
                  <LuX size={18} aria-hidden="true" />
                  <span>
                    {t('contact.error')}{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </StatusMessage>
              )}
            </Form>
          </Layout>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
