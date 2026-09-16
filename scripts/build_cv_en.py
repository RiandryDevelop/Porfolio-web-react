"""
Builds the English CV as a two-column PDF matching the Spanish original:
a dark navy sidebar on the left, white main column on the right.
"""
import sys

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

W, H = letter

NAVY = HexColor("#1E3A52")
NAVY_TEXT = HexColor("#1E3A52")
NAME_ACCENT = HexColor("#8A9AA8")
BODY = HexColor("#1A1A1A")
MUTED = HexColor("#5A5A5A")

SIDEBAR_W = 178.0
SIDE_PAD = 16.0
SIDE_X = SIDE_PAD
SIDE_W = SIDEBAR_W - SIDE_PAD * 2

MAIN_X = SIDEBAR_W + 26.0
MAIN_W = W - MAIN_X - 30.0

TOP = H - 34.0


def style(name, size, leading, color, font="Helvetica", space_after=0, bullet=None):
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        spaceAfter=space_after,
        bulletFontName="Helvetica",
        bulletFontSize=size,
        bulletIndent=0,
        leftIndent=10 if bullet else 0,
    )


S_SIDE_BODY = style("sb", 7.6, 11.0, white)
S_SIDE_BOLD = style("sbb", 7.6, 11.0, white, font="Helvetica-Bold")
S_SIDE_MUTED = style("sbm", 7.6, 11.0, HexColor("#C9D3DB"))
S_PROFILE = style("prof", 8.0, 11.6, BODY)
S_BULLET = style("bul", 8.0, 11.4, BODY, bullet=True)
S_ROLE = style("role", 8.6, 12.0, BODY)


def draw_para(c, text, st, x, y, width):
    """Draws a paragraph with its top edge at `y`; returns the new y."""
    p = Paragraph(text, st)
    _, h = p.wrap(width, 2000)
    p.drawOn(c, x, y - h)
    return y - h


def draw_bullets(c, items, x, y, width, gap=3.5):
    for item in items:
        p = Paragraph(item, S_BULLET, bulletText="•")
        _, h = p.wrap(width, 2000)
        p.drawOn(c, x, y - h)
        y -= h + gap
    return y


def sidebar_heading(c, text, y):
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 8.4)
    c.drawString(SIDE_X, y, text.upper())
    c.setStrokeColor(HexColor("#5C6B80"))
    c.setLineWidth(0.7)
    c.line(SIDE_X, y - 5.0, SIDE_X + SIDE_W, y - 5.0)
    return y - 16.0


def main_heading(c, text, y):
    c.setFillColor(NAVY_TEXT)
    c.setFont("Helvetica-Bold", 9.4)
    c.drawString(MAIN_X, y, text.upper())
    c.setStrokeColor(HexColor("#C2CCD6"))
    c.setLineWidth(0.8)
    c.line(MAIN_X, y - 5.5, MAIN_X + MAIN_W, y - 5.5)
    return y - 17.0


def job(c, company, role, dates, bullets, y, first=False):
    if not first:
        y -= 5.0
    c.setFillColor(NAVY_TEXT)
    c.setFont("Helvetica-Bold", 8.8)
    c.drawString(MAIN_X, y, company)
    company_w = c.stringWidth(company, "Helvetica-Bold", 8.8)

    c.setFillColor(BODY)
    c.setFont("Helvetica-Oblique", 8.6)
    c.drawString(MAIN_X + company_w + 5, y, role)

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.0)
    c.drawRightString(MAIN_X + MAIN_W, y, dates)

    y -= 12.0
    y = draw_bullets(c, bullets, MAIN_X + 4, y, MAIN_W - 8)
    return y - 7.0


def build(path):
    c = canvas.Canvas(path, pagesize=letter)
    c.setTitle("Riandry Connor - Mid Fullstack Developer - CV")
    c.setAuthor("Riandry Connor")
    c.setSubject("Curriculum Vitae")

    # Sidebar panel
    c.setFillColor(NAVY)
    c.rect(0, 0, SIDEBAR_W, H, stroke=0, fill=1)

    # ---------------------------------------------------------------- sidebar
    y = TOP
    y = sidebar_heading(c, "Contact", y)
    for line in [
        "+809-377-0051",
        "riandrydevsoffers@gmail.com",
        "Santo Domingo, Dominican Republic",
        "github.com/RiandryDevelop",
    ]:
        y = draw_para(c, line, S_SIDE_BODY, SIDE_X, y, SIDE_W) - 2.5

    y -= 16
    y = sidebar_heading(c, "Education", y)
    for period, school, degree in [
        ("2022 - present", "UASD", "BSc in Computer Science"),
        ("2023 - 2023", "Alterna Academy", "Fullstack Developer."),
    ]:
        y = draw_para(c, period, S_SIDE_BOLD, SIDE_X, y, SIDE_W) - 1
        y = draw_para(c, school, S_SIDE_MUTED, SIDE_X, y, SIDE_W) - 1
        y = draw_para(c, degree, S_SIDE_MUTED, SIDE_X, y, SIDE_W) - 9

    y -= 8
    y = sidebar_heading(c, "Projects (RCDL APPS)", y)
    y = draw_para(c, "Founder of RCDL APPS", S_SIDE_BOLD, SIDE_X, y, SIDE_W) - 5
    for item in ["Screen Notify", "Modest Pos"]:
        p = Paragraph(item, style("s", 7.6, 11.0, white, bullet=True), bulletText="•")
        _, h = p.wrap(SIDE_W - 4, 200)
        p.drawOn(c, SIDE_X, y - h)
        y -= h + 2

    y -= 17
    y = sidebar_heading(c, "Skills", y)
    for item in [
        "Front-end development.",
        "Back-end development.",
        "DevOps and deployment.",
        "Version control systems.",
        "Leadership.",
        "Effective communication.",
        "Critical thinking.",
    ]:
        p = Paragraph(item, style("s", 7.6, 11.0, white, bullet=True), bulletText="•")
        _, h = p.wrap(SIDE_W - 4, 200)
        p.drawOn(c, SIDE_X, y - h)
        y -= h + 2.5

    y -= 17
    y = sidebar_heading(c, "Languages", y)
    for item in ["English (advanced)", "Spanish (native)"]:
        p = Paragraph(item, style("s", 7.6, 11.0, white, bullet=True), bulletText="•")
        _, h = p.wrap(SIDE_W - 4, 200)
        p.drawOn(c, SIDE_X, y - h)
        y -= h + 2.5

    # ------------------------------------------------------------------ main
    y = TOP + 4
    c.setFillColor(NAVY_TEXT)
    c.setFont("Helvetica-Bold", 21)
    c.drawString(MAIN_X, y - 14, "RIANDRY ")
    first_w = c.stringWidth("RIANDRY ", "Helvetica-Bold", 21)
    c.setFillColor(NAME_ACCENT)
    c.drawString(MAIN_X + first_w, y - 14, "CONNOR")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 9.0)
    c.drawString(MAIN_X, y - 27, "MID FULLSTACK DEVELOPER")

    y = y - 44
    y = main_heading(c, "Profile", y)
    y = draw_para(
        c,
        "Versatile and detail-oriented software engineer with fullstack experience, specialising in "
        "the design and implementation of scalable web applications. Proficient with front-end "
        "frameworks and back-end technologies, with hands-on experience in RESTful APIs, cloud "
        "services and DevOps. Known for solving problems collaboratively, improving code quality and "
        "delivering user-centred solutions that improve application performance and user experience. "
        "As founder of RCDL APPS, has also led the development of his own products, Screen Notify "
        "and Modest Pos.",
        S_PROFILE, MAIN_X, y, MAIN_W,
    )

    y -= 14
    y = main_heading(c, "Work Experience", y)

    y = job(
        c, "Kleio Inc.", "Semi-senior Fullstack Developer", "January 2026 - May 2026",
        [
            "Built and optimised frontend web applications (internal and customer-facing portals) "
            "using Angular 19 with SSR and NgRx, implementing complex shopping cart flows, payment "
            "gateways (Stripe) and performance tuning.",
            "Built and maintained modern backend microservices with ASP.NET Core 8 (minimal APIs) "
            "and Clean Architecture, handling message queues and asynchronous events with Azure "
            "Service Bus and Azure Functions.",
            "Refactored and optimised the performance of critical legacy transactional APIs on .NET "
            "Framework (4.6/4.7) for catalogue management (PIM), ordering and distributed database "
            "synchronisation systems.",
        ],
        y, first=True,
    )

    y = job(
        c, "Insoltech", "Frontend Developer", "2025",
        [
            "Designed and implemented efficient, responsive user interfaces for a financial-sector "
            "platform, improving user experience and accessibility.",
            "Optimised front-end performance against strict industry standards, contributing to "
            "improved system speed and stability.",
            "Worked with cross-functional teams in a confidential environment, ensuring consistent "
            "integration with critical systems and preserving data integrity.",
        ],
        y,
    )

    y = job(
        c, "Meditod", ".NET Back-end Developer", "2023 - 2024",
        [
            "Developed and optimised secure, high-performance API endpoints for an ERP project, "
            "improving system efficiency and reliability.",
            "Led the implementation of several backend modules, prioritising security best practices "
            "and solid performance.",
            "Collaborated with multidisciplinary teams to ensure seamless integration and "
            "functionality across the ERP system.",
        ],
        y,
    )

    y = job(
        c, "Softver", "Fullstack Web Developer", "2020 - 2022",
        [
            "Designed and implemented a clean, user-friendly interface for an e-commerce store as "
            "front-end developer, prioritising intuitive navigation and visual appeal, and managed "
            "the backend Stripe integration for secure, efficient payment processing.",
            "Used a headless CMS for streamlined content management, ensuring smooth updates and "
            "content scalability.",
        ],
        y,
    )

    y -= 6
    y = main_heading(c, "Personal Projects", y)
    c.setFillColor(NAVY_TEXT)
    c.setFont("Helvetica-Bold", 8.8)
    c.drawString(MAIN_X, y, "RCDL APPS — Founder")
    y -= 12
    y = draw_bullets(
        c,
        [
            "Screen Notify: an in-house Android app focused on on-screen notification alerting and "
            "monitoring, designed and built independently as part of RCDL APPS.",
            "Modest Pos: a point of sale (POS) system built independently, aimed at sales and "
            "inventory management for small and medium businesses.",
        ],
        MAIN_X + 4, y, MAIN_W - 8,
    )

    c.showPage()
    c.save()
    print("wrote", path)


if __name__ == "__main__":
    build(sys.argv[1])
