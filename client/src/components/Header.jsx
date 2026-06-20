import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const LOGO = "/Images/Logo.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Deals", path: "/deals" },
    { name: "Our Story", path: "/our-story" },
    { name: "Find Us", path: "/find-us" },
  ];

  const goToMenu = () => {
    navigate("/menu");
    setShow(false);
  };

  return (
    <>
      <style>{`
        :root {
          --rs-ink:#130606;
          --rs-coffee:#ef233c;
          --rs-caramel:#ff7a00;
          --rs-gold:#ffc300;
          --rs-cream:#fff6e8;
          --rs-milk:#fffdf8;
          --rs-mint:#19a974;
          --rs-border:rgba(239,35,60,.14);
        }

        .rs-navbar {
          position:fixed !important;
          top:0;
          left:0;
          width:100%;
          z-index:9999;
          padding:12px 0;
          background:
            radial-gradient(circle at 12% 20%, rgba(255,195,0,.22), transparent 30%),
            radial-gradient(circle at 86% 10%, rgba(239,35,60,.18), transparent 28%),
            rgba(255,246,232,.94);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border-bottom:1px solid var(--rs-border);
          transition:.32s ease;
        }

        .rs-navbar.scrolled {
          padding:7px 0;
          background:rgba(255,246,232,.98);
          box-shadow:0 16px 45px rgba(239,35,60,.14);
        }

        .rs-wrap {
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
        }

        .rs-brand {
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          color:var(--rs-ink) !important;
          min-width:0;
        }

        .rs-logo {
          width:64px;
          height:64px;
          min-width:64px;
          object-fit:contain;
          display:block;
          filter:drop-shadow(0 14px 24px rgba(239,35,60,.30));
          transition:.3s ease;
        }

        .rs-navbar.scrolled .rs-logo {
          width:54px;
          height:54px;
          min-width:54px;
        }

        .rs-brand-name {
          display:flex;
          flex-direction:column;
          line-height:.95;
          min-width:0;
        }

        .rs-title {
          font-size:clamp(21px,2vw,30px);
          font-weight:1000;
          letter-spacing:-.9px;
          text-transform:uppercase;
          white-space:nowrap;
        }

        .rs-title span {
          background:linear-gradient(135deg,var(--rs-coffee),var(--rs-caramel),var(--rs-gold));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .rs-subtitle {
          margin-top:5px;
          color:rgba(19,6,6,.62);
          font-size:10px;
          font-weight:900;
          letter-spacing:1.1px;
          text-transform:uppercase;
          white-space:nowrap;
        }

        .rs-desktop {
          display:flex;
          align-items:center;
          justify-content:flex-end;
          gap:10px;
          min-width:0;
        }

        .rs-nav {
          display:flex;
          align-items:center;
          gap:4px;
          padding:7px;
          border-radius:999px;
          background:rgba(255,255,255,.76);
          border:1px solid rgba(239,35,60,.13);
          box-shadow:0 12px 32px rgba(239,35,60,.07);
        }

        .rs-link {
          text-decoration:none;
          color:var(--rs-ink) !important;
          padding:10px 12px !important;
          border-radius:999px;
          font-size:11px;
          font-weight:1000;
          letter-spacing:.5px;
          text-transform:uppercase;
          transition:.25s ease;
          white-space:nowrap;
        }

        .rs-link:hover,
        .rs-link.active {
          color:#fff !important;
          background:linear-gradient(135deg,var(--rs-coffee),var(--rs-caramel),var(--rs-gold));
          box-shadow:0 10px 24px rgba(239,35,60,.24);
        }

        .rs-badge {
          border:0 !important;
          border-radius:999px !important;
          padding:8px 12px !important;
          color:#fff !important;
          background:linear-gradient(135deg,var(--rs-coffee),var(--rs-caramel)) !important;
          font-size:10px;
          font-weight:1000 !important;
          letter-spacing:.6px;
          text-transform:uppercase;
          white-space:nowrap;
          box-shadow:0 12px 28px rgba(239,35,60,.22);
        }

        .rs-order {
          border:0 !important;
          border-radius:999px !important;
          padding:12px 21px !important;
          background:linear-gradient(135deg,var(--rs-coffee),#a80015,var(--rs-caramel),var(--rs-gold)) !important;
          color:#fff !important;
          font-weight:1000 !important;
          display:inline-flex !important;
          align-items:center;
          justify-content:center;
          gap:9px;
          box-shadow:0 16px 38px rgba(239,35,60,.30);
          transition:.28s ease;
          white-space:nowrap;
        }

        .rs-order:hover {
          transform:translateY(-3px) scale(1.03);
        }

        .rs-toggle {
          width:46px;
          height:46px;
          min-width:46px;
          border-radius:16px !important;
          border:1px solid rgba(239,35,60,.16) !important;
          background:#fff !important;
          color:var(--rs-coffee) !important;
          display:grid;
          place-items:center;
          font-size:27px;
          box-shadow:0 12px 32px rgba(239,35,60,.10);
          padding:0 !important;
        }

        .rs-toggle:focus {
          outline:none !important;
          box-shadow:0 12px 32px rgba(239,35,60,.10) !important;
        }

        .rs-offcanvas {
          width:min(410px,90vw) !important;
          background:
            radial-gradient(circle at top left, rgba(255,195,0,.30), transparent 32%),
            radial-gradient(circle at top right, rgba(239,35,60,.22), transparent 34%),
            radial-gradient(circle at bottom right, rgba(255,122,0,.18), transparent 32%),
            linear-gradient(160deg,#fff6e8,#ffe1c4);
          border-left:1px solid rgba(239,35,60,.14);
        }

        .rs-offcanvas .offcanvas-header {
          padding:18px;
          border-bottom:1px solid rgba(239,35,60,.13);
        }

        .rs-offcanvas .btn-close {
          opacity:1;
          box-shadow:none !important;
        }

        .rs-mobile-card {
          margin:16px 0 18px;
          padding:20px;
          border-radius:26px;
          color:#fff;
          background:
            linear-gradient(135deg,rgba(239,35,60,.92),rgba(255,122,0,.86),rgba(255,195,0,.68)),
            url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=90");
          background-size:cover;
          background-position:center;
          box-shadow:0 20px 45px rgba(239,35,60,.24);
        }

        .rs-mobile-card h3 {
          font-size:24px;
          font-weight:1000;
          margin:0 0 6px;
          line-height:1.1;
        }

        .rs-mobile-card p {
          margin:0;
          font-size:13px;
          font-weight:700;
          opacity:.94;
          line-height:1.5;
        }

        .rs-pills {
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:18px;
        }

        .rs-pills span {
          padding:8px 12px;
          border-radius:999px;
          background:#fff;
          color:var(--rs-ink);
          font-size:12px;
          font-weight:1000;
          box-shadow:0 8px 20px rgba(239,35,60,.08);
        }

        .rs-mobile-nav {
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .rs-mobile-nav .rs-link {
          width:100%;
          font-size:17px;
          padding:15px 17px !important;
          border-radius:20px;
          background:rgba(255,255,255,.76);
          border:1px solid rgba(239,35,60,.11);
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .rs-mobile-nav .rs-link::after {
          content:"›";
          font-size:24px;
          line-height:1;
          color:var(--rs-coffee);
        }

        .rs-mobile-order {
          width:100%;
          min-height:58px;
          margin-top:22px;
          font-size:16px !important;
        }

        @media(max-width:1199px) {
          .rs-badge {
            display:none !important;
          }

          .rs-link {
            padding:9px 9px !important;
            font-size:10px;
          }

          .rs-order {
            padding:11px 16px !important;
          }
        }

        @media(max-width:991px) {
          .rs-desktop {
            display:none;
          }

          .rs-navbar {
            padding:8px 0;
          }

          .rs-logo {
            width:58px;
            height:58px;
            min-width:58px;
          }
        }

        @media(max-width:575px) {
          .rs-wrap {
            gap:10px;
          }

          .rs-brand {
            gap:8px;
            max-width:calc(100vw - 88px);
          }

          .rs-logo {
            width:50px;
            height:50px;
            min-width:50px;
          }

          .rs-title {
            font-size:19px;
            letter-spacing:-.5px;
          }

          .rs-subtitle {
            font-size:8px;
            letter-spacing:.7px;
            max-width:180px;
            overflow:hidden;
            text-overflow:ellipsis;
          }

          .rs-toggle {
            width:43px;
            height:43px;
            min-width:43px;
            border-radius:14px !important;
            font-size:24px;
          }
        }

        @media(max-width:360px) {
          .rs-title {
            font-size:17px;
          }

          .rs-subtitle {
            display:none;
          }

          .rs-logo {
            width:46px;
            height:46px;
            min-width:46px;
          }
        }
      `}</style>

      <Navbar fixed="top" expand="lg" className={`rs-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="rs-wrap">
            <Navbar.Brand as={NavLink} to="/" className="rs-brand" onClick={() => setShow(false)}>
              <img src={LOGO} alt="Fast Food Logo" className="rs-logo" />

              <div className="rs-brand-name">
                <div className="rs-title">
                  FAST <span>FOOD</span>
                </div>
                <div className="rs-subtitle">Chinese • Desi • Burgers</div>
              </div>
            </Navbar.Brand>

            <div className="rs-desktop">
              <Nav className="rs-nav">
                {links.map((link) => (
                  <NavLink key={link.path} to={link.path} className="rs-link">
                    {link.name}
                  </NavLink>
                ))}
              </Nav>

              <Badge className="rs-badge">Chef’s Pick</Badge>

              <Button className="rs-order" onClick={goToMenu}>
                <i className="bi bi-bag-heart-fill"></i>
                Order Now
              </Button>
            </div>

            <button
              className="rs-toggle d-lg-none"
              type="button"
              onClick={() => setShow(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="rs-offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="rs-brand">
                <img src={LOGO} alt="Fast Food Logo" className="rs-logo" />

                <div className="rs-brand-name">
                  <div className="rs-title">
                    FAST <span>FOOD</span>
                  </div>
                  <div className="rs-subtitle">Fresh • Premium • Hot</div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="rs-mobile-card">
                <h3>Premium Food Vibes 🍜🍛</h3>
                <p>Chinese, Desi, Momos, Burgers & hot fresh meals.</p>

                <div className="rs-pills">
                  <span>🍜 Chinese</span>
                  <span>🥟 Momos</span>
                  <span>🍛 Desi</span>
                  <span>🍔 Burgers</span>
                </div>
              </div>

              <Nav className="rs-mobile-nav">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="rs-link"
                    onClick={() => setShow(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Nav>

              <Button className="rs-order rs-mobile-order" onClick={goToMenu}>
                <i className="bi bi-bag-heart-fill"></i>
                Order Fresh Food
              </Button>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;