import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const LOGO = "/Images/Logo.png";

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you! You have subscribed for weekly food deals.");
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Full Menu", path: "/menu" },
    { name: "Latest Deals", path: "/deals" },
    { name: "Our Story", path: "/our-story" },
    { name: "Find Us", path: "/find-us" },
  ];

  return (
    <>
      <style>{`
        :root {
          --ff-black:#130606;
          --ff-red:#ef233c;
          --ff-dark-red:#a80015;
          --ff-yellow:#ffc300;
          --ff-orange:#ff7a00;
          --ff-green:#19a974;
          --ff-cream:#fff6e8;
          --ff-soft:#ffe1c4;
          --ff-muted:#6f4e45;
        }

        .ff-footer {
          position:relative;
          overflow:hidden;
          background:
            radial-gradient(circle at 8% 10%, rgba(255,195,0,.28), transparent 26%),
            radial-gradient(circle at 90% 12%, rgba(239,35,60,.22), transparent 28%),
            radial-gradient(circle at 85% 90%, rgba(25,169,116,.16), transparent 30%),
            linear-gradient(160deg,#fff6e8,#ffe1c4);
          color:var(--ff-black);
          border-top:1px solid rgba(239,35,60,.16);
          font-family:"Inter",sans-serif;
        }

        .ff-footer::before,
        .ff-footer::after {
          content:"";
          position:absolute;
          width:260px;
          height:260px;
          border-radius:50%;
          filter:blur(8px);
          opacity:.26;
          pointer-events:none;
        }

        .ff-footer::before {
          left:-95px;
          top:80px;
          background:var(--ff-red);
        }

        .ff-footer::after {
          right:-95px;
          bottom:80px;
          background:var(--ff-yellow);
        }

        .ff-footer-wrapper {
          max-width:1320px;
          margin:auto;
          padding:95px 24px 55px;
          position:relative;
          z-index:2;
        }

        .ff-top {
          display:grid;
          grid-template-columns:1.25fr .9fr .9fr 1.15fr;
          gap:46px;
        }

        .ff-brand {
          display:flex;
          align-items:center;
          gap:14px;
          margin-bottom:22px;
        }

        .ff-brand-logo {
          width:82px;
          height:82px;
          object-fit:contain;
          filter:drop-shadow(0 18px 35px rgba(239,35,60,.28));
        }

        .ff-brand-text {
          display:flex;
          flex-direction:column;
          line-height:.95;
        }

        .ff-brand-name {
          font-size:38px;
          font-weight:1000;
          letter-spacing:-1px;
          color:var(--ff-black);
        }

        .ff-brand-name span {
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange),var(--ff-yellow));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .ff-brand-small {
          margin-top:6px;
          font-size:11px;
          font-weight:1000;
          letter-spacing:1.2px;
          text-transform:uppercase;
          color:rgba(19,6,6,.58);
        }

        .ff-tagline {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 14px;
          border-radius:999px;
          background:rgba(255,255,255,.75);
          border:1px solid rgba(239,35,60,.14);
          color:var(--ff-red);
          font-size:14px;
          font-weight:1000;
          margin-bottom:18px;
          box-shadow:0 12px 28px rgba(19,6,6,.06);
        }

        .ff-description {
          color:var(--ff-muted);
          line-height:1.85;
          font-size:15px;
          margin-bottom:25px;
          font-weight:650;
        }

        .ff-food-pills {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-bottom:28px;
        }

        .ff-food-pills span {
          padding:9px 13px;
          border-radius:999px;
          background:#fff;
          color:var(--ff-black);
          border:1px solid rgba(239,35,60,.10);
          font-size:12px;
          font-weight:1000;
          box-shadow:0 10px 24px rgba(19,6,6,.06);
        }

        .ff-socials {
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }

        .ff-socials a {
          width:50px;
          height:50px;
          border-radius:17px;
          display:grid;
          place-items:center;
          text-decoration:none;
          color:var(--ff-red);
          font-size:19px;
          background:rgba(255,255,255,.78);
          border:1px solid rgba(239,35,60,.14);
          transition:.32s ease;
        }

        .ff-socials a:hover {
          color:#fff;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange));
          transform:translateY(-7px) scale(1.06);
          box-shadow:0 20px 46px rgba(239,35,60,.24);
        }

        .ff-heading {
          font-size:21px;
          font-weight:1000;
          margin-bottom:27px;
          position:relative;
        }

        .ff-heading::after {
          content:"";
          position:absolute;
          left:0;
          bottom:-12px;
          width:58px;
          height:4px;
          border-radius:999px;
          background:linear-gradient(90deg,var(--ff-red),var(--ff-orange),var(--ff-yellow));
        }

        .ff-links {
          list-style:none;
          padding:0;
          margin:0;
        }

        .ff-links li {
          margin-bottom:15px;
        }

        .ff-links a,
        .ff-links button {
          color:var(--ff-muted);
          text-decoration:none;
          transition:.28s ease;
          font-size:15px;
          display:inline-flex;
          align-items:center;
          gap:10px;
          background:transparent;
          border:0;
          padding:0;
          font-weight:800;
          cursor:pointer;
        }

        .ff-links a::before,
        .ff-links button::before {
          content:"🔥";
          font-size:13px;
        }

        .ff-links a:hover,
        .ff-links button:hover {
          color:var(--ff-red);
          transform:translateX(7px);
        }

        .ff-contact-box {
          display:flex;
          align-items:flex-start;
          gap:14px;
          margin-bottom:14px;
          padding:14px;
          border-radius:20px;
          background:rgba(255,255,255,.78);
          border:1px solid rgba(239,35,60,.13);
          box-shadow:0 10px 26px rgba(19,6,6,.045);
          transition:.28s ease;
        }

        .ff-contact-box:hover {
          transform:translateY(-3px);
          box-shadow:0 18px 38px rgba(19,6,6,.08);
        }

        .ff-contact-icon {
          min-width:46px;
          height:46px;
          border-radius:15px;
          display:grid;
          place-items:center;
          color:#fff;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange));
          font-size:18px;
        }

        .ff-contact-box h6 {
          margin:0 0 4px;
          font-weight:1000;
          font-size:15px;
        }

        .ff-contact-box p,
        .ff-contact-box a {
          margin:0;
          color:var(--ff-muted);
          font-size:14px;
          line-height:1.65;
          text-decoration:none;
          font-weight:650;
        }

        .ff-newsletter {
          margin-top:18px;
          padding:22px;
          border-radius:24px;
          background:
            linear-gradient(135deg,rgba(239,35,60,.12),rgba(255,195,0,.17)),
            rgba(255,255,255,.78);
          border:1px solid rgba(239,35,60,.14);
          box-shadow:0 15px 36px rgba(19,6,6,.06);
        }

        .ff-newsletter h5 {
          font-weight:1000;
          margin-bottom:8px;
        }

        .ff-newsletter p {
          color:var(--ff-muted);
          font-size:14px;
          line-height:1.65;
          margin-bottom:16px;
          font-weight:650;
        }

        .ff-newsletter-input {
          width:100%;
          height:52px;
          border-radius:16px;
          border:1px solid rgba(239,35,60,.18);
          background:#fffaf4;
          color:var(--ff-black);
          padding:0 17px;
          outline:none;
          margin-bottom:12px;
          font-weight:700;
        }

        .ff-newsletter-input:focus {
          border-color:var(--ff-red);
          box-shadow:0 0 0 4px rgba(239,35,60,.10);
        }

        .ff-newsletter-btn {
          width:100%;
          height:52px;
          border:0;
          border-radius:16px;
          font-weight:1000;
          color:#fff;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-dark-red),var(--ff-orange));
          box-shadow:0 15px 32px rgba(239,35,60,.24);
          transition:.28s ease;
        }

        .ff-newsletter-btn:hover {
          transform:translateY(-3px);
        }

        .ff-bottom {
          margin-top:64px;
          padding:24px 0 0;
          border-top:1px solid rgba(239,35,60,.14);
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:18px;
          flex-wrap:wrap;
        }

        .ff-bottom p {
          margin:0;
          color:var(--ff-muted);
          font-size:14px;
          font-weight:700;
        }

        .ff-bottom strong {
          color:var(--ff-red);
        }

        .ff-payments {
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .ff-payments span {
          width:47px;
          height:47px;
          border-radius:15px;
          display:grid;
          place-items:center;
          background:rgba(255,255,255,.8);
          border:1px solid rgba(239,35,60,.13);
          color:var(--ff-red);
          font-size:18px;
        }

        @media(max-width:1100px) {
          .ff-top {
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:700px) {
          .ff-footer-wrapper {
            padding:68px 18px 42px;
          }

          .ff-top {
            grid-template-columns:1fr;
            gap:42px;
          }

          .ff-brand-logo {
            width:70px;
            height:70px;
          }

          .ff-brand-name {
            font-size:31px;
          }

          .ff-brand-small {
            font-size:9px;
          }

          .ff-tagline {
            font-size:13px;
          }

          .ff-heading {
            font-size:20px;
          }

          .ff-contact-box {
            border-radius:18px;
          }

          .ff-bottom {
            flex-direction:column;
            text-align:center;
          }

          .ff-payments {
            justify-content:center;
          }
        }

        @media(max-width:380px) {
          .ff-brand-name {
            font-size:27px;
          }

          .ff-brand-logo {
            width:62px;
            height:62px;
          }

          .ff-food-pills span {
            font-size:11px;
            padding:8px 10px;
          }
        }
      `}</style>

      <footer className="ff-footer">
        <div className="ff-footer-wrapper">
          <div className="ff-top">
            <div>
              <div className="ff-brand">
                <img src={LOGO} alt="Fast Food Logo" className="ff-brand-logo" />

                <div className="ff-brand-text">
                  <div className="ff-brand-name">
                    FAST<span>FOOD</span>
                  </div>
                  <div className="ff-brand-small">Chinese • Desi • Burgers</div>
                </div>
              </div>

              <div className="ff-tagline">🔥 Fresh. Spicy. Made To Crave.</div>

              <p className="ff-description">
                Enjoy a bold mix of crispy burgers, Chinese noodles, spicy desi
                food, loaded fries, wings and family deals — freshly prepared,
                packed with flavour and made for serious cravings.
              </p>

              <div className="ff-food-pills">
                <span>🍔 Burgers</span>
                <span>🍜 Chinese</span>
                <span>🍛 Desi Food</span>
                <span>🍟 Loaded Fries</span>
                <span>🔥 Hot Wings</span>
              </div>

              <div className="ff-socials">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="ff-heading">Quick Links</h4>
              <ul className="ff-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))}
                <li>
                  <button onClick={() => navigate("/menu")}>Order Online</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="ff-heading">Food Categories</h4>
              <ul className="ff-links">
                <li><button onClick={() => navigate("/menu")}>Chinese Food</button></li>
                <li><button onClick={() => navigate("/menu")}>Desi Specials</button></li>
                <li><button onClick={() => navigate("/menu")}>Signature Burgers</button></li>
                <li><button onClick={() => navigate("/menu")}>Loaded Fries</button></li>
                <li><button onClick={() => navigate("/menu")}>Hot Wings</button></li>
                <li><button onClick={() => navigate("/deals")}>Family Deals</button></li>
              </ul>
            </div>

            <div>
              <h4 className="ff-heading">Contact Us</h4>

              <div className="ff-contact-box">
                <div className="ff-contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6>Location</h6>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=London%20United%20Kingdom"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FAST FOOD<br />
                    London, United Kingdom
                  </a>
                </div>
              </div>

              <div className="ff-contact-box">
                <div className="ff-contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6>Phone</h6>
                  <a href="tel:+442076800696">+44 20 7680 0696</a>
                </div>
              </div>

              <div className="ff-contact-box">
                <div className="ff-contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6>Email</h6>
                  <a href="mailto:info@fastfood.co.uk">info@fastfood.co.uk</a>
                </div>
              </div>

              <div className="ff-contact-box">
                <div className="ff-contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <h6>Opening Hours</h6>
                  <p>Mon - Sun · 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <form className="ff-newsletter" onSubmit={handleSubscribe}>
                <h5>Get Hot Deals</h5>
                <p>Subscribe for weekly offers, combo meals and exclusive discounts.</p>

                <input
                  type="email"
                  className="ff-newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" className="ff-newsletter-btn">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          <div className="ff-bottom">
            <p>© 2026 <strong>FAST FOOD</strong>. All Rights Reserved.</p>

            <div className="ff-payments">
              <span><i className="bi bi-credit-card-fill"></i></span>
              <span><i className="bi bi-paypal"></i></span>
              <span><i className="bi bi-wallet2"></i></span>
              <span><i className="bi bi-apple"></i></span>
            </div>

            <p>Designed with fire. Built for flavour.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;