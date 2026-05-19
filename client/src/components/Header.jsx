import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);
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
        :root{
          --hb-black:#120707;
          --hb-red:#e50914;
          --hb-red-dark:#8f0008;
          --hb-yellow:#ffbf00;
          --hb-cream:#fff7ed;
          --hb-soft:#ffe3d3;
        }

        .hb-navbar{
          width:100%;
          position:fixed !important;
          top:0;
          left:0;
          z-index:9999;
          padding:14px 0;
          transition:.35s ease;
          background:rgba(255,247,237,.78);
          backdrop-filter:blur(16px);
          border-bottom:1px solid rgba(229,9,20,.08);
        }

        .hb-navbar.scrolled{
          padding:9px 0;
          background:rgba(255,247,237,.96);
          border-bottom:1px solid rgba(229,9,20,.16);
          box-shadow:0 18px 45px rgba(18,7,7,.12);
        }

        .hb-nav-wrap{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
        }

        .hb-brand{
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          color:var(--hb-black) !important;
          font-size:clamp(20px,2.1vw,30px);
          font-weight:950;
          letter-spacing:-1px;
          white-space:nowrap;
        }

        .hb-brand span{
          background:linear-gradient(135deg,var(--hb-red),var(--hb-red-dark),var(--hb-yellow));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hb-logo{
          width:54px;
          height:54px;
          min-width:54px;
          border-radius:18px;
          display:grid;
          place-items:center;
          position:relative;
          overflow:hidden;
          color:white;
          font-size:25px;
          background:linear-gradient(135deg,var(--hb-red),var(--hb-red-dark),var(--hb-yellow));
          box-shadow:0 18px 45px rgba(229,9,20,.32);
          animation:hbPulse 3s infinite ease-in-out;
        }

        .hb-logo::before{
          content:"";
          position:absolute;
          inset:-45%;
          background:linear-gradient(120deg,transparent,rgba(255,255,255,.58),transparent);
          transform:translateX(-120%) rotate(20deg);
          animation:hbShine 4s infinite linear;
        }

        .hb-logo i{
          position:relative;
          z-index:2;
        }

        .hb-desktop-area{
          display:flex;
          align-items:center;
          justify-content:flex-end;
          gap:12px;
          min-width:0;
        }

        .hb-nav{
          display:flex;
          align-items:center;
          gap:4px;
          padding:8px;
          border-radius:999px;
          background:rgba(255,255,255,.74);
          border:1px solid rgba(229,9,20,.14);
          backdrop-filter:blur(18px);
          box-shadow:0 14px 38px rgba(18,7,7,.06);
        }

        .hb-nav-link{
          position:relative;
          text-decoration:none;
          color:var(--hb-black) !important;
          padding:10px 12px !important;
          border-radius:999px;
          font-size:12px;
          font-weight:950;
          letter-spacing:.6px;
          text-transform:uppercase;
          transition:.3s ease;
          white-space:nowrap;
        }

        .hb-nav-link:hover,
        .hb-nav-link.active{
          color:var(--hb-red) !important;
          background:linear-gradient(135deg,rgba(229,9,20,.12),rgba(255,191,0,.18));
        }

        .hb-hot-badge{
          border:none !important;
          background:linear-gradient(135deg,var(--hb-red),var(--hb-red-dark)) !important;
          color:white !important;
          font-size:10px;
          letter-spacing:.7px;
          padding:8px 12px !important;
          border-radius:999px !important;
          font-weight:950 !important;
          box-shadow:0 12px 30px rgba(229,9,20,.24);
          white-space:nowrap;
        }

        .hb-order-btn{
          border:none !important;
          border-radius:999px !important;
          padding:12px 22px !important;
          background:linear-gradient(135deg,var(--hb-red),var(--hb-red-dark)) !important;
          color:white !important;
          font-weight:950 !important;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          transition:.3s ease;
          box-shadow:0 18px 42px rgba(229,9,20,.25);
          white-space:nowrap;
        }

        .hb-order-btn:hover{
          transform:translateY(-3px) scale(1.03);
        }

        .hb-toggle{
          width:48px;
          height:48px;
          min-width:48px;
          border-radius:16px !important;
          border:1px solid rgba(229,9,20,.18) !important;
          background:white !important;
          display:grid;
          place-items:center;
          color:var(--hb-red) !important;
          font-size:27px;
          box-shadow:0 14px 35px rgba(18,7,7,.08) !important;
          padding:0 !important;
        }

        .hb-toggle:focus{
          box-shadow:0 14px 35px rgba(18,7,7,.08) !important;
        }

        .hb-offcanvas{
          width:min(390px,88vw) !important;
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.18), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,191,0,.18), transparent 30%),
            linear-gradient(160deg,#fff7ed,#ffe3d3);
          border-left:1px solid rgba(229,9,20,.16);
        }

        .hb-offcanvas .offcanvas-header{
          border-bottom:1px solid rgba(229,9,20,.14);
          padding:20px;
        }

        .hb-offcanvas .btn-close{
          opacity:1;
          box-shadow:none !important;
        }

        .hb-mobile-nav{
          margin-top:18px;
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .hb-mobile-nav .hb-nav-link{
          font-size:20px;
          border-radius:20px;
          padding:16px 18px !important;
          border:1px solid rgba(229,9,20,.1);
          background:rgba(255,255,255,.6);
          width:100%;
        }

        .hb-mobile-order{
          width:100%;
          min-height:58px;
          margin-top:24px;
        }

        @keyframes hbPulse{
          0%,100%{transform:scale(1) rotate(0deg);}
          50%{transform:scale(1.05) rotate(-4deg);}
        }

        @keyframes hbShine{
          0%{transform:translateX(-120%) rotate(20deg);}
          55%{transform:translateX(120%) rotate(20deg);}
          100%{transform:translateX(120%) rotate(20deg);}
        }

        @media(max-width:1199px){
          .hb-brand{
            font-size:24px;
          }

          .hb-logo{
            width:48px;
            height:48px;
            min-width:48px;
            font-size:22px;
            border-radius:16px;
          }

          .hb-nav-link{
            padding:9px 9px !important;
            font-size:11px;
          }

          .hb-order-btn{
            padding:11px 17px !important;
          }

          .hb-hot-badge{
            display:none !important;
          }
        }

        @media(max-width:991px){
          .hb-navbar{
            padding:10px 0;
            background:rgba(255,247,237,.96);
            box-shadow:0 16px 40px rgba(18,7,7,.08);
          }

          .hb-desktop-area{
            display:none;
          }
        }

        @media(max-width:575px){
          .hb-navbar{
            padding:8px 0;
          }

          .hb-brand{
            font-size:20px;
            gap:9px;
            max-width:calc(100vw - 95px);
            overflow:hidden;
          }

          .hb-logo{
            width:42px;
            height:42px;
            min-width:42px;
            font-size:20px;
            border-radius:14px;
          }

          .hb-toggle{
            width:43px;
            height:43px;
            min-width:43px;
            border-radius:14px !important;
            font-size:24px;
          }

          .hb-mobile-nav .hb-nav-link{
            font-size:18px;
          }
        }

        @media(max-width:360px){
          .hb-brand{
            font-size:18px;
          }

          .hb-logo{
            width:39px;
            height:39px;
            min-width:39px;
          }
        }
      `}</style>

      <Navbar fixed="top" expand="lg" className={`hb-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="hb-nav-wrap">
            <Navbar.Brand as={NavLink} to="/" className="hb-brand" onClick={() => setShow(false)}>
              <div className="hb-logo">
                <i className="bi bi-fire"></i>
              </div>
                FAST<span>FOOD</span>
            </Navbar.Brand>

            <div className="hb-desktop-area">
              <Nav className="hb-nav">
                {links.map((link) => (
                  <NavLink key={link.path} to={link.path} className="hb-nav-link">
                    {link.name}
                  </NavLink>
                ))}
              </Nav>

              <Badge className="hb-hot-badge">🔥 Fresh & Hot</Badge>

              <Button className="hb-order-btn" onClick={goToMenu}>
                <i className="bi bi-bag-fill"></i>
                Order Now
              </Button>
            </div>

            <button className="hb-toggle d-lg-none" type="button" onClick={() => setShow(true)}>
              <i className="bi bi-list"></i>
            </button>
          </div>

          <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="hb-offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="hb-brand">
                <div className="hb-logo">
                  <i className="bi bi-fire"></i>
                </div>
                FAST<span>FOOD</span>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="hb-mobile-nav">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="hb-nav-link"
                    onClick={() => setShow(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Nav>

              <Button className="hb-order-btn hb-mobile-order" onClick={goToMenu}>
                <i className="bi bi-bag-fill"></i>
                Order Now
              </Button>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;