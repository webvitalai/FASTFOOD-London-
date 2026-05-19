import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FindUs = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <>
      <style>{`
        :root {
          --hb-black: #120707;
          --hb-red: #e50914;
          --hb-red-dark: #8f0008;
          --hb-yellow: #ffbf00;
          --hb-cream: #fff7ed;
          --hb-soft: #ffe3d3;
          --hb-muted: #6f4e45;
        }

        .hb-contact-page {
          min-height: 100vh;
          padding: 130px 0 90px;
          color: var(--hb-black);
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.2), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,191,0,.18), transparent 30%),
            linear-gradient(160deg, #fff7ed, #ffe3d3 48%, #fff7ed);
          overflow: hidden;
          position: relative;
          font-family: "Inter", sans-serif;
        }

        .hb-contact-glow {
          position: absolute;
          right: -70px;
          top: 130px;
          font-size: 230px;
          color: rgba(229,9,20,.11);
          animation: floatIcon 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-contact-heading {
          text-align: center;
          margin-bottom: 65px;
        }

        .hb-eyebrow {
          color: var(--hb-red);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hb-contact-heading h2 {
          font-size: clamp(46px, 7vw, 88px);
          font-weight: 950;
          line-height: .9;
          margin-bottom: 18px;
          letter-spacing: -2px;
        }

        .hb-contact-heading h2 span {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-contact-heading p {
          color: var(--hb-muted);
          font-size: 18px;
          font-weight: 600;
        }

        .hb-line {
          width: 100px;
          height: 5px;
          border-radius: 999px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, var(--hb-red), var(--hb-yellow));
        }

        .hb-contact-card,
        .hb-form-card {
          height: 100%;
          padding: 34px;
          border-radius: 32px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 28px 75px rgba(18,7,7,.12);
          backdrop-filter: blur(16px);
        }

        .hb-contact-card {
          background:
            linear-gradient(135deg, rgba(229,9,20,.1), rgba(255,191,0,.12)),
            rgba(255,255,255,.86);
        }

        .hb-contact-card h3,
        .hb-form-card h3 {
          font-size: 34px;
          font-weight: 950;
          margin-bottom: 24px;
        }

        .hb-info-box {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
          padding: 16px;
          border-radius: 20px;
          background: #fff8f1;
          border: 1px solid rgba(229,9,20,.14);
          transition: .3s ease;
        }

        .hb-info-box:hover {
          transform: translateY(-5px);
          border-color: rgba(229,9,20,.3);
          box-shadow: 0 18px 40px rgba(229,9,20,.12);
        }

        .hb-info-icon {
          min-width: 48px;
          height: 48px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          font-size: 19px;
        }

        .hb-info-box h6 {
          margin: 0 0 5px;
          font-weight: 950;
        }

        .hb-info-box p,
        .hb-info-box a {
          margin: 0;
          color: var(--hb-muted);
          text-decoration: none;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 600;
        }

        .hb-info-box a:hover {
          color: var(--hb-red);
        }

        .hb-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .hb-form-group {
          margin-bottom: 18px;
        }

        .hb-form-group label {
          display: block;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--hb-black);
          margin-bottom: 9px;
        }

        .hb-form-group input,
        .hb-form-group textarea {
          width: 100%;
          border: 1px solid rgba(229,9,20,.18);
          background: #fff8f1;
          border-radius: 18px;
          padding: 16px 18px;
          outline: none;
          transition: .3s ease;
          font-size: 15px;
          color: var(--hb-black);
        }

        .hb-form-group textarea {
          min-height: 150px;
          resize: none;
        }

        .hb-form-group input:focus,
        .hb-form-group textarea:focus {
          background: white;
          border-color: var(--hb-red);
          box-shadow: 0 0 0 5px rgba(229,9,20,.1);
        }

        .hb-send-btn {
          width: 100%;
          border: none !important;
          border-radius: 999px !important;
          padding: 16px 24px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          font-weight: 950 !important;
          transition: .35s ease;
          box-shadow: 0 18px 45px rgba(229,9,20,.25);
        }

        .hb-send-btn:hover {
          transform: translateY(-4px);
        }

        .hb-success {
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(34,197,94,.12);
          color: #15803d;
          font-weight: 850;
          border: 1px solid rgba(34,197,94,.25);
          margin-bottom: 16px;
        }

        .hb-map-section {
          margin-top: 75px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 40px 110px rgba(18,7,7,.2);
          position: relative;
          background: white;
        }

        .hb-map-section iframe {
          width: 100%;
          height: 520px;
          border: 0;
          display: block;
        }

        .hb-map-card {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          width: min(360px, calc(100% - 48px));
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,248,241,.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(229,9,20,.2);
          box-shadow: 0 22px 60px rgba(18,7,7,.18);
        }

        .hb-map-card h4 {
          color: var(--hb-red);
          font-weight: 950;
          margin-bottom: 8px;
        }

        .hb-map-card p {
          color: var(--hb-muted);
          margin-bottom: 16px;
          line-height: 1.7;
          font-size: 14px;
          font-weight: 600;
        }

        .hb-map-meta {
          display: flex;
          gap: 10px;
          align-items: center;
          color: var(--hb-black);
          font-size: 14px;
          font-weight: 900;
        }

        .hb-map-meta i {
          color: var(--hb-red);
        }

        .hb-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .hb-action-btn {
          flex: 1;
          min-width: 160px;
          border: none !important;
          border-radius: 999px !important;
          padding: 14px 18px !important;
          font-weight: 950 !important;
          color: white !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          transition: .35s ease;
        }

        .hb-action-btn.secondary {
          background: white !important;
          color: var(--hb-black) !important;
          border: 1px solid rgba(229,9,20,.22) !important;
        }

        .hb-action-btn:hover {
          transform: translateY(-4px);
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        @media (max-width: 991px) {
          .hb-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        @media (max-width: 768px) {
          .hb-contact-page {
            padding: 110px 0 70px;
          }

          .hb-contact-card,
          .hb-form-card {
            padding: 26px;
          }

          .hb-map-section iframe {
            height: 420px;
          }

          .hb-map-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            border-radius: 0;
          }

          .hb-contact-heading h2 {
            line-height: 1;
          }
        }
      `}</style>

      <main className="hb-contact-page">
        <i className="bi bi-chat-dots-fill hb-contact-glow"></i>

        <Container>
          <div className="hb-contact-heading">
            <div className="hb-eyebrow">Contact Us · We Are Here</div>

            <h2>
              Talk To <span>FAST FOOD</span>
            </h2>

            <p>Have a question, booking request, complaint or catering enquiry?</p>

            <div className="hb-line"></div>
          </div>

          <Row className="g-4">
            <Col lg={5}>
              <div className="hb-contact-card">
                <h3>Get In Touch</h3>

                <div className="hb-info-box">
                  <div className="hb-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <h6>Location</h6>
                    <p>
                      129 Lemon st, London E1 8EY
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="hb-info-box">
                  <div className="hb-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>

                  <div>
                    <h6>Phone</h6>
                    <a href="tel:+442076800696">+44 20 7680 0696</a>
                  </div>
                </div>

                <div className="hb-info-box">
                  <div className="hb-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>
                    <h6>Email</h6>
                    <a href="mailto:info@fastfood.co.uk">
                      info@fastfood.co.uk
                    </a>
                  </div>
                </div>

                <div className="hb-info-box">
                  <div className="hb-info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>

                  <div>
                    <h6>Opening Hours</h6>
                    <p>Mon - Sun · 11:00 AM - 11:00 PM</p>
                  </div>
                </div>

                <div className="hb-actions">
                  <Button
                    className="hb-action-btn"
                    onClick={() => (window.location.href = "tel:+442076800696")}
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call Now
                  </Button>
                  <Button
                    className="hb-action-btn secondary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/?api=1&query=51.51167430677527,-0.08720812507322412",
                        "_blank"
                      )
                    }
                  >
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Get Directions
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="hb-form-card">
                <h3>Send Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="hb-form-row">
                    <div className="hb-form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="hb-form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="hb-form-row">
                    <div className="hb-form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000"
                      />
                    </div>

                    <div className="hb-form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Order / Catering / Query"
                      />
                    </div>
                  </div>

                  <div className="hb-form-group">
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  {sent && (
                    <div className="hb-success">
                      Message submitted successfully. Connect EmailJS/Formspree
                      for live email delivery.
                    </div>
                  )}

                  <Button type="submit" className="hb-send-btn">
                    <i className="bi bi-send-fill me-2"></i>
                    Send Message
                  </Button>
                </form>
              </div>
            </Col>
          </Row>

          <div className="hb-map-section">
            <div className="hb-map-card">
              <h4>Fast Food & Milkshakes</h4>

              <p>
                Visit us for fresh burgers, loaded fries, milkshakes and hot
                meals served daily.
              </p>

              <div className="hb-map-meta">
                <i className="bi bi-geo-alt-fill"></i>
                Interactive Google Map
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.336129500565!2d-0.08720812507322412!3d51.51167430677527!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760335bd264a8f%3A0xa559a8576016b1a9!2sFAST%20FOOD!5e0!3m2!1sen!2suk!4v1779177341503!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </main>
    </>
  );
};

export default FindUs;