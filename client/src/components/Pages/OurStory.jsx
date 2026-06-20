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
          --hb-orange: #ff5a00;
          --hb-yellow: #ffbf00;
          --hb-cream: #fff8ed;
          --hb-soft: #ffe3c2;
          --hb-muted: #765040;
        }

        .hb-story {
          background:
            radial-gradient(circle at 10% 10%, rgba(255,191,0,.35), transparent 24%),
            radial-gradient(circle at 90% 8%, rgba(229,9,20,.22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(255,90,0,.22), transparent 34%),
            linear-gradient(145deg, #fff8ed 0%, #ffe3c2 48%, #fff1dc 100%);
          color: var(--hb-black);
          overflow: hidden;
          position: relative;
          font-family: "Inter", sans-serif;
        }

        .hb-story::before {
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

        .hb-floating-steam {
          position: absolute;
          left: -45px;
          bottom: 280px;
          font-size: 185px;
          color: rgba(255,90,0,.1);
          animation: floatFire 6s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .hb-hero {
          min-height: 92vh;
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
          filter: brightness(1.08) contrast(1.08) saturate(1.15);
        }

        .hb-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, #fff8ed 0%, rgba(255,248,237,.58) 46%, rgba(18,7,7,.42) 100%),
            radial-gradient(circle at center, rgba(229,9,20,.24), transparent 48%);
          z-index: 1;
        }

        .hb-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
          max-width: 980px;
        }

        .hb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(229,9,20,.18);
          color: var(--hb-red);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 950;
          margin-bottom: 24px;
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 40px rgba(18,7,7,.08);
        }

        .hb-title {
          font-size: clamp(52px,10vw,132px);
          line-height: .88;
          font-weight: 950;
          margin: 0;
          color: var(--hb-black);
          text-shadow: 0 20px 70px rgba(255,255,255,.65);
          letter-spacing: -4px;
        }

        .hb-title span {
          display: block;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-hero-text {
          max-width: 760px;
          margin: 24px auto 0;
          color: var(--hb-muted);
          font-size: 18px;
          line-height: 1.85;
          font-weight: 700;
        }

        .hb-hero-actions {
          margin-top: 34px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hb-btn {
          border: none !important;
          border-radius: 999px !important;
          padding: 15px 30px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-weight: 950 !important;
          box-shadow: 0 20px 50px rgba(229,9,20,.28);
          transition: .32s ease;
        }

        .hb-btn:hover {
          transform: translateY(-4px) scale(1.03);
        }

        .hb-btn-light {
          border-radius: 999px !important;
          padding: 15px 30px !important;
          background: rgba(255,255,255,.9) !important;
          color: var(--hb-black) !important;
          border: 1px solid rgba(229,9,20,.18) !important;
          font-weight: 950 !important;
          transition: .32s ease;
        }

        .hb-btn-light:hover {
          transform: translateY(-4px);
        }

        .hb-content {
          padding: 95px 0;
          position: relative;
          z-index: 2;
        }

        .hb-quote {
          max-width: 980px;
          margin: auto auto 80px;
          text-align: center;
          padding: 56px 38px;
          border-radius: 38px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(229,9,20,.16);
          box-shadow: 0 35px 95px rgba(18,7,7,.12);
          backdrop-filter: blur(14px);
        }

        .hb-quote-icon {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          margin: auto auto 22px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-size: 32px;
          box-shadow: 0 18px 45px rgba(229,9,20,.28);
        }

        .hb-quote p {
          font-size: clamp(25px,4vw,43px);
          line-height: 1.35;
          font-weight: 950;
          margin: 0;
          font-style: italic;
        }

        .hb-intro {
          max-width: 920px;
          margin: 0 auto 80px;
          text-align: center;
          color: var(--hb-muted);
          font-size: 18px;
          line-height: 1.95;
          font-weight: 650;
        }

        .hb-category-grid {
          margin-bottom: 90px;
        }

        .hb-food-card {
          height: 100%;
          padding: 34px 26px;
          border-radius: 32px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(229,9,20,.14);
          box-shadow: 0 24px 65px rgba(18,7,7,.08);
          transition: .35s ease;
          text-align: center;
        }

        .hb-food-card:hover {
          transform: translateY(-10px);
          border-color: rgba(229,9,20,.34);
          box-shadow: 0 30px 75px rgba(229,9,20,.16);
        }

        .hb-food-icon {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          margin: 0 auto 22px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-size: 32px;
          box-shadow: 0 18px 45px rgba(229,9,20,.26);
        }

        .hb-food-card h4 {
          font-size: 28px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .hb-food-card p {
          color: var(--hb-muted);
          line-height: 1.75;
          margin: 0;
          font-weight: 650;
        }

        .hb-block {
          margin-bottom: 90px;
          align-items: center;
        }

        .hb-text h3 {
          font-size: clamp(34px,5vw,54px);
          font-weight: 950;
          margin-bottom: 22px;
          color: var(--hb-red);
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .hb-text p {
          color: var(--hb-muted);
          line-height: 1.95;
          font-size: 17px;
          font-weight: 650;
        }

        .hb-points {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .hb-point {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 15px;
          border-radius: 18px;
          background: rgba(255,255,255,.7);
          border: 1px solid rgba(229,9,20,.1);
          color: var(--hb-black);
          font-weight: 850;
        }

        .hb-point i {
          color: var(--hb-red);
        }

        .hb-image {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 40px 110px rgba(18,7,7,.18);
          min-height: 450px;
          background: white;
        }

        .hb-image img {
          width: 100%;
          height: 100%;
          min-height: 450px;
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
          background: linear-gradient(to top, rgba(18,7,7,.76), rgba(229,9,20,.12), transparent 64%);
        }

        .hb-label {
          position: absolute;
          left: 24px;
          bottom: 24px;
          z-index: 2;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,248,241,.9);
          border: 1px solid rgba(229,9,20,.2);
          backdrop-filter: blur(14px);
          color: var(--hb-red);
          font-weight: 950;
          font-size: 13px;
          letter-spacing: .5px;
        }

        .hb-timeline {
          padding: 70px 0;
          background: rgba(255,255,255,.62);
          border-top: 1px solid rgba(229,9,20,.14);
          border-bottom: 1px solid rgba(229,9,20,.14);
          position: relative;
          z-index: 2;
          backdrop-filter: blur(12px);
        }

        .hb-time-card {
          text-align: center;
          padding: 28px;
          border-radius: 30px;
          background: white;
          border: 1px solid rgba(229,9,20,.13);
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
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-size: 30px;
          box-shadow: 0 18px 45px rgba(229,9,20,.26);
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
          padding: 95px 0;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hb-cta-box {
          padding: 75px 40px;
          border-radius: 42px;
          background:
            linear-gradient(rgba(143,0,8,.82), rgba(18,7,7,.88)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover;
          color: white;
          box-shadow: 0 40px 110px rgba(18,7,7,.24);
          position: relative;
          overflow: hidden;
        }

        .hb-cta-box::after {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,191,0,.2);
          top: -70px;
          right: -70px;
        }

        .hb-cta h2 {
          position: relative;
          z-index: 2;
          font-size: clamp(40px,6vw,78px);
          font-weight: 950;
          line-height: .96;
          margin-bottom: 20px;
        }

        .hb-cta h2 span {
          color: var(--hb-yellow);
        }

        .hb-cta p {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: auto;
          color: rgba(255,255,255,.78);
          line-height: 1.85;
          font-size: 18px;
          font-weight: 600;
        }

        @keyframes zoomHero {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes floatFire {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        @media(max-width: 991px) {
          .hb-content {
            padding: 80px 0;
          }

          .hb-block {
            margin-bottom: 75px;
          }
        }

        @media(max-width:768px) {
          .hb-hero {
            min-height: 76vh;
            padding-top: 80px;
          }

          .hb-title {
            letter-spacing: -2px;
          }

          .hb-hero-text {
            font-size: 15px;
            line-height: 1.7;
          }

          .hb-hero-actions {
            flex-direction: column;
          }

          .hb-btn,
          .hb-btn-light {
            width: 100%;
          }

          .hb-content {
            padding: 65px 0;
          }

          .hb-quote {
            padding: 38px 22px;
            margin-bottom: 55px;
            border-radius: 28px;
          }

          .hb-intro {
            font-size: 15px;
            line-height: 1.75;
            margin-bottom: 55px;
          }

          .hb-category-grid {
            margin-bottom: 65px;
          }

          .hb-food-card {
            border-radius: 26px;
            padding: 28px 22px;
          }

          .hb-block {
            margin-bottom: 65px;
          }

          .hb-text h3 {
            font-size: 32px;
          }

          .hb-text p {
            font-size: 15px;
            line-height: 1.8;
          }

          .hb-image,
          .hb-image img {
            min-height: 315px;
            border-radius: 28px;
          }

          .hb-timeline {
            padding: 58px 0;
          }

          .hb-cta {
            padding: 65px 0;
          }

          .hb-cta-box {
            padding: 52px 22px;
            border-radius: 28px;
          }

          .hb-floating-fire {
            font-size: 145px;
            right: -55px;
            top: 90px;
          }

          .hb-floating-steam {
            display: none;
          }
        }

        @media(max-width:420px) {
          .hb-eyebrow {
            font-size: 10px;
            letter-spacing: 1.3px;
            padding: 10px 14px;
          }

          .hb-title {
            font-size: 46px;
          }

          .hb-quote p {
            font-size: 24px;
          }
        }
      `}</style>

      <main className="hb-story">
        <i className="bi bi-fire hb-floating-fire"></i>
        <i className="bi bi-cloud-steam-fill hb-floating-steam"></i>

        <section className="hb-hero">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=95"
            alt="Restaurant food table"
          />

          <div className="hb-hero-content">
            <div className="hb-eyebrow">
              <i className="bi bi-stars"></i>
              Fast Food • Chinese • Desi
            </div>

            <h1 className="hb-title">
              Our
              <span>Food Story</span>
            </h1>

            <p className="hb-hero-text">
              A bold food brand built for real cravings — crispy fast food,
              saucy Chinese favourites and proper desi flavours served fresh,
              hot and full of energy.
            </p>

            <div className="hb-hero-actions">
              <Button className="hb-btn" onClick={() => navigate("/menu")}>
                <i className="bi bi-bag-fill me-2"></i>
                Explore Menu
              </Button>

              <Button className="hb-btn-light" onClick={() => navigate("/deals")}>
                <i className="bi bi-lightning-charge-fill me-2"></i>
                View Deals
              </Button>
            </div>
          </div>
        </section>

        <section className="hb-content">
          <Container>
            <div className="hb-quote">
              <div className="hb-quote-icon">
                <i className="bi bi-quote"></i>
              </div>

              <p>
                “Good food is not just served. It is built with heat, flavour
                and a little bit of madness.”
              </p>
            </div>

            <p className="hb-intro">
              We started with one simple idea: make food that looks exciting,
              tastes bold and feels fresh every time. From burgers and loaded
              fries to noodles, biryani and karahi, every item is designed for
              customers who love flavour without compromise.
            </p>

            <Row className="g-4 hb-category-grid">
              <Col lg={4} md={6}>
                <div className="hb-food-card">
                  <div className="hb-food-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <h4>Fast Food</h4>
                  <p>
                    Smash burgers, pizzas, crispy wraps, wings and loaded fries
                    made for quick cravings and bold taste.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="hb-food-card">
                  <div className="hb-food-icon">
                    <i className="bi bi-fire"></i>
                  </div>
                  <h4>Chinese</h4>
                  <p>
                    Chow mein, fried rice, Manchurian and saucy wok-style meals
                    with spicy, sweet and savoury flavours.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={12}>
                <div className="hb-food-card">
                  <div className="hb-food-icon">
                    <i className="bi bi-cloud-steam-fill"></i>
                  </div>
                  <h4>Desi Food</h4>
                  <p>
                    Biryani, karahi, kebab rolls and creamy curries with proper
                    traditional spices and fresh aroma.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="hb-block g-5">
              <Col lg={6}>
                <div className="hb-text">
                  <h3>The First Spark</h3>

                  <p>
                    What began as a small fast-food idea quickly grew into a
                    complete food experience. Customers wanted more than one
                    type of food, so we created a menu that brings fast food,
                    Chinese and desi favourites together in one place.
                  </p>

                  <div className="hb-points">
                    <div className="hb-point">
                      <i className="bi bi-check-circle-fill"></i>
                      Fresh ingredients and hot preparation
                    </div>

                    <div className="hb-point">
                      <i className="bi bi-check-circle-fill"></i>
                      Bold flavours for every craving
                    </div>

                    <div className="hb-point">
                      <i className="bi bi-check-circle-fill"></i>
                      Easy ordering for mobile customers
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="hb-image">
                  <img
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1200&q=95"
                    alt="Food table"
                  />

                  <div className="hb-label">Fresh Kitchen Energy</div>
                </div>
              </Col>
            </Row>

            <Row className="hb-block g-5">
              <Col lg={6} className="order-lg-2">
                <div className="hb-text">
                  <h3>The Crazy Flavour Era</h3>

                  <p>
                    Today our mission is simple: deliver meals that feel fun,
                    modern and satisfying. Whether someone wants a quick burger,
                    spicy noodles or proper biryani, the experience should feel
                    smooth, exciting and delicious from first tap to first bite.
                  </p>

                  <div className="hb-points">
                    <div className="hb-point">
                      <i className="bi bi-stars"></i>
                      Menu designed for fast food, Chinese and desi lovers
                    </div>

                    <div className="hb-point">
                      <i className="bi bi-phone-fill"></i>
                      Fully responsive ordering experience
                    </div>

                    <div className="hb-point">
                      <i className="bi bi-bag-check-fill"></i>
                      Deals, cart and checkout-ready flow
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} className="order-lg-1">
                <div className="hb-image">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=95"
                    alt="Restaurant interior"
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
                    <i className="bi bi-cup-hot-fill"></i>
                  </div>

                  <h4>3</h4>
                  <p>Food Categories</p>
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
                <span> Madness.</span>
              </h2>

              <p>
                Explore fast food, Chinese and desi meals in one smooth menu.
                Pick your favourites, add deals and place your order easily.
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