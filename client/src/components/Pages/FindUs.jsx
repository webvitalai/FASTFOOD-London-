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

  const phoneNumber = "+442076800696";
  const whatsappNumber = "442076800696";
  const mapQuery = "51.51167430677527,-0.08720812507322412";

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
          --hb-orange: #ff5a00;
          --hb-yellow: #ffbf00;
          --hb-cream: #fff8ed;
          --hb-soft: #ffe3c2;
          --hb-muted: #765040;
        }

        .hb-contact-page {
          min-height: 100vh;
          padding: 120px 0 80px;
          color: var(--hb-black);
          background:
            radial-gradient(circle at 10% 10%, rgba(255,191,0,.35), transparent 24%),
            radial-gradient(circle at 90% 8%, rgba(229,9,20,.22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(255,90,0,.22), transparent 34%),
            linear-gradient(145deg, #fff8ed 0%, #ffe3c2 48%, #fff1dc 100%);
          overflow: hidden;
          position: relative;
          font-family: "Inter", sans-serif;
        }

        .hb-contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.34) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.34) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 82%);
          pointer-events: none;
        }

        .hb-contact-glow {
          position: absolute;
          right: -70px;
          top: 120px;
          font-size: 230px;
          color: rgba(229,9,20,.11);
          animation: floatIcon 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-steam-glow {
          position: absolute;
          left: -40px;
          bottom: 210px;
          font-size: 180px;
          color: rgba(255,90,0,.1);
          animation: floatIcon 6s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .hb-contact-heading {
          text-align: center;
          margin-bottom: 42px;
          position: relative;
          z-index: 2;
        }

        .hb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--hb-red);
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(229,9,20,.16);
          box-shadow: 0 16px 40px rgba(18,7,7,.08);
          border-radius: 999px;
          padding: 11px 18px;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
          backdrop-filter: blur(14px);
        }

        .hb-contact-heading h2 {
          font-size: clamp(44px, 7vw, 88px);
          font-weight: 950;
          line-height: .9;
          margin-bottom: 18px;
          letter-spacing: -3px;
        }

        .hb-contact-heading h2 span {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-contact-heading p {
          color: var(--hb-muted);
          font-size: 18px;
          font-weight: 650;
          max-width: 720px;
          margin: auto;
          line-height: 1.75;
        }

        .hb-quick-strip {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 0 0 42px;
        }

        .hb-quick-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(255,255,255,.84);
          color: var(--hb-black);
          border: 1px solid rgba(229,9,20,.14);
          box-shadow: 0 12px 30px rgba(18,7,7,.06);
          font-weight: 900;
          font-size: 13px;
        }

        .hb-quick-pill i {
          color: var(--hb-red);
        }

        .hb-contact-card,
        .hb-form-card {
          height: 100%;
          padding: 32px;
          border-radius: 34px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(229,9,20,.16);
          box-shadow: 0 28px 75px rgba(18,7,7,.12);
          backdrop-filter: blur(16px);
          position: relative;
          z-index: 2;
        }

        .hb-contact-card {
          background:
            radial-gradient(circle at top right, rgba(255,191,0,.22), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.94), rgba(255,235,210,.92));
        }

        .hb-contact-card h3,
        .hb-form-card h3 {
          font-size: 32px;
          font-weight: 950;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .hb-info-box {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 18px;
          padding: 16px;
          border-radius: 22px;
          background: #fff8f1;
          border: 1px solid rgba(229,9,20,.12);
          transition: .3s ease;
        }

        .hb-info-box:hover {
          transform: translateY(-5px);
          border-color: rgba(229,9,20,.3);
          box-shadow: 0 18px 40px rgba(229,9,20,.12);
        }

        .hb-info-icon {
          min-width: 50px;
          height: 50px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-size: 19px;
          box-shadow: 0 12px 28px rgba(229,9,20,.22);
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
          font-weight: 650;
        }

        .hb-info-box a:hover {
          color: var(--hb-red);
        }

        .hb-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        .hb-action-btn {
          border: none !important;
          border-radius: 999px !important;
          padding: 14px 18px !important;
          font-weight: 950 !important;
          color: white !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          transition: .3s ease;
          box-shadow: 0 14px 34px rgba(229,9,20,.2);
        }

        .hb-action-btn.secondary {
          background: white !important;
          color: var(--hb-black) !important;
          border: 1px solid rgba(229,9,20,.2) !important;
          box-shadow: none;
        }

        .hb-action-btn.whatsapp {
          background: linear-gradient(135deg, #16a34a, #22c55e) !important;
        }

        .hb-action-btn:hover {
          transform: translateY(-4px);
        }

        .hb-food-note {
          margin-top: 24px;
          padding: 18px;
          border-radius: 24px;
          background: rgba(18,7,7,.88);
          color: white;
          overflow: hidden;
          position: relative;
        }

        .hb-food-note::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -45px;
          top: -45px;
          border-radius: 50%;
          background: rgba(255,191,0,.22);
        }

        .hb-food-note strong {
          display: block;
          margin-bottom: 8px;
          font-size: 18px;
          font-weight: 950;
          position: relative;
          z-index: 2;
        }

        .hb-food-note p {
          margin: 0;
          color: rgba(255,255,255,.76);
          font-size: 14px;
          line-height: 1.7;
          font-weight: 600;
          position: relative;
          z-index: 2;
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
          letter-spacing: .11em;
          color: var(--hb-black);
          margin-bottom: 9px;
        }

        .hb-form-group input,
        .hb-form-group textarea {
          width: 100%;
          border: 1px solid rgba(229,9,20,.16);
          background: #fff8f1;
          border-radius: 18px;
          padding: 16px 18px;
          outline: none;
          transition: .3s ease;
          font-size: 15px;
          color: var(--hb-black);
          font-weight: 600;
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
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-weight: 950 !important;
          transition: .32s ease;
          box-shadow: 0 18px 45px rgba(229,9,20,.24);
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
          margin-top: 72px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid rgba(229,9,20,.16);
          box-shadow: 0 40px 110px rgba(18,7,7,.2);
          position: relative;
          background: white;
          z-index: 2;
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
          width: min(380px, calc(100% - 48px));
          padding: 22px;
          border-radius: 26px;
          background: rgba(255,248,241,.93);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 22px 60px rgba(18,7,7,.18);
        }

        .hb-map-card h4 {
          color: var(--hb-red);
          font-weight: 950;
          margin-bottom: 8px;
          font-size: 25px;
        }

        .hb-map-card p {
          color: var(--hb-muted);
          margin-bottom: 16px;
          line-height: 1.7;
          font-size: 14px;
          font-weight: 650;
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

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        @media (max-width: 991px) {
          .hb-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .hb-actions {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hb-contact-page {
            padding: 92px 0 58px;
          }

          .hb-contact-heading {
            margin-bottom: 32px;
          }

          .hb-contact-heading h2 {
            line-height: 1;
            letter-spacing: -2px;
          }

          .hb-contact-heading p {
            font-size: 15px;
            line-height: 1.7;
            padding: 0 6px;
          }

          .hb-quick-strip {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 8px;
            margin-bottom: 28px;
          }

          .hb-quick-pill {
            flex: 0 0 auto;
          }

          .hb-contact-card,
          .hb-form-card {
            padding: 22px;
            border-radius: 28px;
          }

          .hb-contact-card h3,
          .hb-form-card h3 {
            font-size: 26px;
          }

          .hb-info-box {
            border-radius: 20px;
            padding: 14px;
          }

          .hb-map-section {
            margin-top: 48px;
            border-radius: 28px;
          }

          .hb-map-section iframe {
            height: 390px;
          }

          .hb-map-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            border-radius: 0;
          }

          .hb-contact-glow {
            font-size: 135px;
            right: -42px;
            top: 70px;
          }

          .hb-steam-glow {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .hb-eyebrow {
            font-size: 10px;
            letter-spacing: 1.3px;
            padding: 10px 14px;
          }

          .hb-contact-heading h2 {
            font-size: 42px;
          }

          .hb-info-box {
            gap: 12px;
          }

          .hb-info-icon {
            min-width: 44px;
            height: 44px;
            border-radius: 14px;
          }
        }
      `}</style>

      <main className="hb-contact-page">
        <i className="bi bi-chat-dots-fill hb-contact-glow"></i>
        <i className="bi bi-cloud-steam-fill hb-steam-glow"></i>

        <Container>
          <div className="hb-contact-heading">
            <div className="hb-eyebrow">
              <i className="bi bi-stars"></i>
              Contact • Order • Visit
            </div>

            <h2>
              Find <span>Our Kitchen</span>
            </h2>

            <p>
              Questions, table booking, catering enquiry or order support —
              contact us and enjoy fast food, Chinese and desi favourites.
            </p>
          </div>

          <div className="hb-quick-strip">
            <span className="hb-quick-pill">
              <i className="bi bi-lightning-charge-fill"></i> Fast Food
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-fire"></i> Chinese
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-cloud-steam-fill"></i> Desi Food
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-truck"></i> Delivery Ready
            </span>
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
                      129 Lemon St, London E1 8EY
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
                    <a href={`tel:${phoneNumber}`}>+44 20 7680 0696</a>
                  </div>
                </div>

                <div className="hb-info-box">
                  <div className="hb-info-icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>

                  <div>
                    <h6>WhatsApp Order</h6>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Message us on WhatsApp
                    </a>
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
                    onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call Now
                  </Button>

                  <Button
                    className="hb-action-btn whatsapp"
                    onClick={() =>
                      window.open(`https://wa.me/${whatsappNumber}`, "_blank")
                    }
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    WhatsApp
                  </Button>

                  <Button
                    className="hb-action-btn secondary"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
                        "_blank"
                      )
                    }
                  >
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Directions
                  </Button>
                </div>

                <div className="hb-food-note">
                  <strong>Fresh, Hot & Full of Flavour</strong>
                  <p>
                    Visit us for burgers, wraps, Chinese noodles, fried rice,
                    biryani, karahi and fresh combo deals.
                  </p>
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
              <h4>Fast Food Kitchen</h4>

              <p>
                Visit us for fast food, Chinese meals, desi favourites, loaded
                fries, milkshakes and fresh daily deals.
              </p>

              <div className="hb-map-meta">
                <i className="bi bi-geo-alt-fill"></i>
                129 Lemon St, London E1 8EY
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
              title="Fast Food Location Map"
            ></iframe>
          </div>
        </Container>
      </main>
    </>
  );
};

export default FindUs;