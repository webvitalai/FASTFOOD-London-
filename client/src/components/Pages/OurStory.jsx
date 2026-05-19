import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OurStory = () => {
  const navigate = useNavigate();

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

        .hb-story {
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.2), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,191,0,.18), transparent 30%),
            linear-gradient(160deg, #fff7ed, #ffe3d3 48%, #fff7ed);
          color: var(--hb-black);
          overflow: hidden;
          position: relative;
          font-family: "Inter", sans-serif;
        }

        .hb-floating-fire {
          position: absolute;
          right: -70px;
          top: 120px;
          font-size: 240px;
          color: rgba(229,9,20,.12);
          animation: floatFire 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 3;
        }

        .hb-hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding-top: 90px;
        }

        .hb-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: zoomHero 12s ease-in-out infinite alternate;
          filter: brightness(1.08) contrast(1.08) saturate(1.12);
        }

        .hb-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, #fff7ed 0%, rgba(255,247,237,.58) 48%, rgba(143,0,8,.45) 100%),
            radial-gradient(circle at center, rgba(229,9,20,.24), transparent 48%);
          z-index: 1;
        }

        .hb-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }

        .hb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(229,9,20,.22);
          color: var(--hb-red);
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 950;
          margin-bottom: 26px;
          backdrop-filter: blur(14px);
        }

        .hb-title {
          font-size: clamp(58px,10vw,140px);
          line-height: .88;
          font-weight: 950;
          margin: 0;
          color: var(--hb-black);
          text-shadow: 0 20px 70px rgba(255,255,255,.65);
          letter-spacing: -4px;
        }

        .hb-title span {
          display: block;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-content {
          padding: 110px 0;
          position: relative;
        }

        .hb-quote {
          max-width: 980px;
          margin: auto auto 90px;
          text-align: center;
          padding: 60px 40px;
          border-radius: 38px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 35px 95px rgba(18,7,7,.12);
        }

        .hb-quote-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: auto auto 24px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          font-size: 32px;
          box-shadow: 0 18px 45px rgba(229,9,20,.28);
        }

        .hb-quote p {
          font-size: clamp(26px,4vw,44px);
          line-height: 1.4;
          font-weight: 950;
          margin: 0;
          font-style: italic;
        }

        .hb-intro {
          max-width: 920px;
          margin: 0 auto 90px;
          text-align: center;
          color: var(--hb-muted);
          font-size: 18px;
          line-height: 1.95;
          font-weight: 600;
        }

        .hb-block {
          margin-bottom: 95px;
          align-items: center;
        }

        .hb-text h3 {
          font-size: clamp(34px,5vw,54px);
          font-weight: 950;
          margin-bottom: 22px;
          color: var(--hb-red);
          text-transform: uppercase;
        }

        .hb-text p {
          color: var(--hb-muted);
          line-height: 2;
          font-size: 17px;
          font-weight: 600;
        }

        .hb-image {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(229,9,20,.2);
          box-shadow: 0 40px 110px rgba(18,7,7,.18);
          min-height: 460px;
        }

        .hb-image img {
          width: 100%;
          height: 100%;
          min-height: 460px;
          object-fit: cover;
          transition: 1s ease;
          filter: brightness(1.06) contrast(1.08) saturate(1.12);
        }

        .hb-image:hover img {
          transform: scale(1.12) rotate(1deg);
        }

        .hb-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,7,7,.78), rgba(229,9,20,.12), transparent 64%);
        }

        .hb-label {
          position: absolute;
          left: 24px;
          bottom: 24px;
          z-index: 2;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,248,241,.9);
          border: 1px solid rgba(229,9,20,.22);
          backdrop-filter: blur(14px);
          color: var(--hb-red);
          font-weight: 950;
          font-size: 13px;
          letter-spacing: .5px;
        }

        .hb-timeline {
          padding: 70px 0;
          background: rgba(255,255,255,.72);
          border-top: 1px solid rgba(229,9,20,.16);
          border-bottom: 1px solid rgba(229,9,20,.16);
        }

        .hb-time-card {
          text-align: center;
          padding: 28px;
          border-radius: 30px;
          background: white;
          border: 1px solid rgba(229,9,20,.14);
          transition: .35s ease;
          height: 100%;
          box-shadow: 0 20px 55px rgba(18,7,7,.08);
        }

        .hb-time-card:hover {
          transform: translateY(-10px);
          border-color: rgba(229,9,20,.32);
          box-shadow: 0 25px 60px rgba(229,9,20,.16);
        }

        .hb-time-icon {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          margin: auto auto 20px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          font-size: 30px;
          box-shadow: 0 18px 45px rgba(229,9,20,.28);
        }

        .hb-time-card h4 {
          font-size: 42px;
          font-weight: 950;
          color: var(--hb-red);
          margin-bottom: 8px;
        }

        .hb-time-card p {
          color: var(--hb-muted);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
          font-weight: 850;
        }

        .hb-cta {
          padding: 110px 0;
          text-align: center;
        }

        .hb-cta-box {
          padding: 80px 40px;
          border-radius: 42px;
          background:
            linear-gradient(rgba(143,0,8,.84), rgba(18,7,7,.86)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover;
          color: white;
          box-shadow: 0 40px 110px rgba(18,7,7,.24);
        }

        .hb-cta h2 {
          font-size: clamp(42px,6vw,84px);
          font-weight: 950;
          line-height: .95;
          margin-bottom: 22px;
        }

        .hb-cta h2 span {
          color: var(--hb-yellow);
        }

        .hb-cta p {
          max-width: 760px;
          margin: auto;
          color: rgba(255,255,255,.76);
          line-height: 1.9;
          font-size: 18px;
        }

        .hb-btn {
          margin-top: 34px;
          border: none !important;
          border-radius: 999px !important;
          padding: 16px 34px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          font-weight: 950 !important;
          font-size: 18px !important;
          box-shadow: 0 22px 55px rgba(229,9,20,.28);
          transition: .35s ease;
        }

        .hb-btn:hover {
          transform: translateY(-5px) scale(1.04);
        }

        @keyframes zoomHero {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes floatFire {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        @media(max-width:768px) {
          .hb-hero {
            min-height: 70vh;
          }

          .hb-title {
            letter-spacing: -2px;
          }

          .hb-content {
            padding: 75px 0;
          }

          .hb-quote {
            padding: 40px 24px;
            margin-bottom: 65px;
          }

          .hb-block {
            margin-bottom: 70px;
          }

          .hb-image,
          .hb-image img {
            min-height: 320px;
          }

          .hb-cta-box {
            padding: 60px 24px;
          }

          .hb-floating-fire {
            font-size: 150px;
            right: -55px;
          }
        }
      `}</style>

      <main className="hb-story">
        <i className="bi bi-fire hb-floating-fire"></i>

        <section className="hb-hero">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=95"
            alt="Restaurant"
          />

          <div className="hb-hero-content">
            <div className="hb-eyebrow">
              <i className="bi bi-stars"></i>
              EST. 2019
            </div>

            <h1 className="hb-title">
              Our
              <span>Legacy</span>
            </h1>
          </div>
        </section>

        <section className="hb-content">
          <Container>
            <div className="hb-quote">
              <div className="hb-quote-icon">
                <i className="bi bi-quote"></i>
              </div>

              <p>
                “A burger is not just food. It is an experience between the
                flame and the table.”
              </p>
            </div>

            <p className="hb-intro">
              Fast Food was created to deliver unforgettable food
              experiences. Every burger, every sauce and every crispy bite is
              crafted with premium ingredients, smoky flavours and bold energy.
            </p>

            <Row className="hb-block g-5">
              <Col lg={6}>
                <div className="hb-text">
                  <h3>The First Spark</h3>

                  <p>
                    What began as a simple burger idea quickly transformed into
                    a premium food experience. Our signature recipes, smoky
                    grilled flavours and loaded sides built a loyal customer
                    base from day one.
                  </p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="hb-image">
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=95"
                    alt="Restaurant kitchen"
                  />

                  <div className="hb-label">Fresh Kitchen Energy</div>
                </div>
              </Col>
            </Row>

            <Row className="hb-block g-5">
              <Col lg={6} className="order-lg-2">
                <div className="hb-text">
                  <h3>The New Frontier</h3>

                  <p>
                    Today Fast Food continues expanding with the same
                    mission: hot meals, bold flavour and unforgettable quality.
                    From smash burgers to loaded fries and wings, every product
                    is built for true food lovers.
                  </p>
                </div>
              </Col>

              <Col lg={6} className="order-lg-1">
                <div className="hb-image">
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=95"
                    alt="Modern restaurant"
                  />

                  <div className="hb-label">Built For Food Lovers</div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="hb-timeline">
          <Container>
            <Row className="g-4">
              <Col md={4}>
                <div className="hb-time-card">
                  <div className="hb-time-icon">
                    <i className="bi bi-fire"></i>
                  </div>

                  <h4>2019</h4>
                  <p>Brand Started</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="hb-time-card">
                  <div className="hb-time-icon">
                    <i className="bi bi-globe-europe-africa"></i>
                  </div>

                  <h4>UK</h4>
                  <p>International Expansion</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="hb-time-card">
                  <div className="hb-time-icon">
                    <i className="bi bi-award-fill"></i>
                  </div>

                  <h4>100%</h4>
                  <p>Fresh & Halal</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="hb-cta">
          <Container>
            <div className="hb-cta-box">
              <h2>
                Taste The
                <span> Legacy.</span>
              </h2>

              <p>
                Join thousands of customers enjoying premium burgers, crispy
                fries and unforgettable flavours every day.
              </p>

              <Button className="hb-btn" onClick={() => navigate("/menu")}>
                <i className="bi bi-bag-fill me-2"></i>
                Order Now
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default OurStory;