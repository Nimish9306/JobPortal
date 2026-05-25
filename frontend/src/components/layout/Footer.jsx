import { useState } from "react";

const TwitterX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Telegram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Discord = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const YouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const GooglePlay = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L13.2 8.1 3.18 23.76zm17.34-10.38L17.4 11.7l-3.6 3.6 3.6 3.6 3.12-1.68c.9-.48.9-1.56 0-2.04zM3.06.24C2.7.6 2.52 1.14 2.52 1.8v20.4c0 .66.18 1.2.54 1.56L3.18.24h-.12zm9.54 9.54L3.18.24 16.5 11.7l-3.9-1.92z"/>
  </svg>
);

const AppStore = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const footerData = {
  products: {
    title: "Products",
    links: ["Brand & Engage", "Source", "Screen", "Assess", "Interview", "Hiring Automation"],
  },
  mentorship: {
    title: "Mentorship",
    links: ["Be a Mentor", "Explore Mentors", "Mentorship FAQs", "Mentorship Blogs"],
  },
  ourProperties: {
    title: "Our Properties",
    links: [
      "JobPortal Talent Awards 2026",
      "JobPortal Talent Meet 2026",
      "JobPortal Talent Report 2026",
      "Education Loan EMI Calculator",
      "JobPortal Igniters Club",
      "Online Quizzing Festival",
    ],
  },
  legal: {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "Sitemap"],
  },
  participate: {
    title: "Participate",
    links: ["Competitions & Challenges", "Assessments", "Hackathons", "Workshops & Webinars", "Conferences", "Cultural Events", "College Festivals"],
  },
  apply: {
    title: "Apply",
    links: ["Internships", "Jobs", "Scholarships", "Summer Internships", "Government Jobs", "Government Internship"],
  },
  forBusiness: {
    title: "For Business",
    links: ["Clientele", "Partner With Us", "Partners", "Testimonials", "Case Studies", "Post now"],
  },
  learn: {
    title: "Learn",
    links: ["Courses", "Articles", "Blog Series", "Workshops"],
  },
  practice: {
    title: "Practice",
    links: ["5 Days Interview Prep", "Code & Ace Hiring Assessments", "100-Day of Coding Sprint"],
  },
  others: {
    title: "Others",
    links: [
      "About Us", "Careers", "Life at JobPortal", "FAQs", "Branding Guidelines",
      "JobPortal Rewards Program", "JobPortal on Shark Tank", "Refer & Earn",
      "JobPortal Campus Ambassador Program", "Request a Feature",
    ],
  },
};

const socialLinks = [
  { icon: <TwitterX />, label: "X (Twitter)" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <LinkedIn />, label: "LinkedIn" },
  { icon: <Facebook />, label: "Facebook" },
  { icon: <Telegram />, label: "Telegram" },
  { icon: <Discord />, label: "Discord" },
  { icon: <YouTube />, label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{
      background: "linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #eef2ff 100%)",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#1a2340",
      paddingTop: "32px",
    }}>
      {/* Top bar */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 32px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        {/* Logo & tagline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0px", marginBottom: "6px" }}>
            <div style={{
              background: "#2563eb",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "4px",
            }}>
              <span style={{ color: "white", fontWeight: "800", fontSize: "14px" }}>Job</span>
            </div>
            <span style={{ fontWeight: "800", fontSize: "26px", color: "#000000", letterSpacing: "-0.5px" }}>portal</span>
          </div>
          <p style={{ margin: 0, fontSize: "20px", color: "#555", display: "flex", alignItems: "center", gap: "4px" }}>
            Built with <span style={{ color: "#e53e3e", fontSize: "20px" }}>♥</span> in <strong>India</strong> for the world
          </p>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {socialLinks.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              style={{
                color: "#3d5a99",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#1a2340"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#3d5a99"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Dashed divider */}
      <div style={{ borderTop: "2px dashed #c5d3f0", margin: "0 32px" }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px 32px",
        display: "grid",
        gridTemplateColumns: "1.1fr 1.1fr 1fr 1.6fr",
        gap: "32px",
      }}>
        {/* Column 1: Products + Mentorship + Properties + Legal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {[footerData.products, footerData.mentorship, footerData.ourProperties, footerData.legal].map(section => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Column 2: Participate + Apply + For Business */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {[footerData.participate, footerData.apply, footerData.forBusiness].map(section => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Column 3: Learn + Practice + Others */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {[footerData.learn, footerData.practice, footerData.others].map(section => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Column 4: CTA / Newsletter / Apps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Hiring badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            padding: "12px 18px",
            width: "fit-content",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <span style={{ fontWeight: "800", fontSize: "30px", color: "#1a3a6e" }}>We're</span>
            <span style={{
              background: "#f5c400",
              color: "#1a2340",
              fontWeight: "700",
              fontSize: "17px",
              padding: "3px 10px",
              borderRadius: "20px",
              transform: "rotate(-2deg)",
              display: "inline-block",
            }}>Hiring!</span>
          </div>

          {/* Dashed divider */}
          <div style={{ borderTop: "1.5px dashed #c5d3f0" }} />

          {/* Links */}
          <a href="#" style={ctaLinkStyle}>
            Contact Us <span style={{ fontSize: "16px" }}>↗</span>
          </a>
          <a href="#" style={ctaLinkStyle}>
            Share Your Story Now <span style={{ fontSize: "16px" }}>↗</span>
          </a>

          {/* Stay Updated */}
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: "700", fontSize: "14px", color: "#1a2340" }}>Stay Updated</p>
            <p style={{ margin: "0 0 16px", fontSize: "16px", color: "#666", lineHeight: "1.5" }}>
              Get regular updates on opportunities/jobs to showcase your talent and get hired.
            </p>
            <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", border: "1.5px solid #d0d9f0", background: "white" }}>
              <input
                type="email"
                placeholder="Subscribe to our newsletter!"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#333",
                  background: "transparent",
                }}
              />
              <button style={{
                background: "#1a3a6e",
                border: "none",
                padding: "10px 14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "white",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#2a4f99"}
                onMouseLeave={e => e.currentTarget.style.background = "#1a3a6e"}
              >
                ▶
              </button>
            </div>
          </div>

          {/* App store badges */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <AppBadge icon={<GooglePlay />} label="Get it on" store="Google Play" bg="#fff" />
            <AppBadge icon={<AppStore />} label="Available on the" store="App Store" bg="#1a2340" color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h4 style={{
        margin: "0 0 10px",
        fontSize: "16px",
        fontWeight: "700",
        color: "#1a2340",
        textTransform: "none",
        letterSpacing: "0",
      }}>{title}</h4>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
        {links.map(link => (
          <li key={link}>
            <a
              href="#"
              style={{
                fontSize: "16px",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.15s",
                lineHeight: "1.4",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#1a3a6e"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppBadge({ icon, label, store, bg = "#fff", color = "#1a2340" }) {
  return (
    <a href="#" style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: bg,
      color,
      padding: "8px 16px",
      borderRadius: "8px",
      border: bg === "#fff" ? "1.5px solid #d0d9f0" : "none",
      textDecoration: "none",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      transition: "transform 0.15s, box-shadow 0.15s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)"; }}
    >
      {icon}
      <div>
        <div style={{ fontSize: "9px", opacity: 0.75, lineHeight: 1 }}>{label}</div>
        <div style={{ fontSize: "16px", fontWeight: "700", lineHeight: 1.3 }}>{store}</div>
      </div>
    </a>
  );
}

const ctaLinkStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1a3a6e",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  transition: "gap 0.2s",
};
