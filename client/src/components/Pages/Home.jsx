import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const [cart, setCart] = useState([]);

  const categories = [
    {
      title: "Smash Burgers",
      icon: "bi bi-fire",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90",
    },
    {
      title: "Loaded Fries",
      icon: "bi bi-stars",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=90",
    },
    {
      title: "Hot Wings",
      icon: "bi bi-lightning-charge-fill",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1200&q=90",
    },
  ];

  const featured = [
    {
      id: 1,
      name: "Inferno Burger",
      price: 8.99,
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=90",
    },
    {
      id: 2,
      name: "Crispy Chicken",
      price: 7.49,
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=1200&q=90",
    },
    {
      id: 3,
      name: "Mega Stack",
      price: 11.99,
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=90",
    },
  ];

  const scrollToCart = () => {
    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((cartItem) => cartItem.id === item.id);

      if (exists) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    scrollToCart();
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Please add at least one item before checkout.");
      return;
    }

    alert(`Order booked successfully! Total: £${total.toFixed(2)}`);
  };

  const handleBookOrder = () => {
    if (cart.length === 0) {
      scrollToCart();
      alert("Please add your favourite meal first.");
      return;
    }

    handleCheckout();
  };

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

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
          --hb-text: #241313;
          --hb-muted: #6f4e45;
          --hb-border: rgba(229, 9, 20, 0.22);
        }

        .hb-home {
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.14), transparent 35%),
            var(--hb-cream);
          color: var(--hb-black);
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        .hb-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 125px 0 85px;
          background:
            linear-gradient(90deg, rgba(255,247,237,.93), rgba(255,227,211,.74), rgba(143,0,8,.34)),
            url("https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1800&q=95") center/cover no-repeat;
        }

        .hb-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transform: scale(1.02);
          filter: contrast(1.08) saturate(1.18) brightness(1.04);
        }

        .hb-video-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(255,247,237,0.93) 0%,
              rgba(255,235,218,0.78) 42%,
              rgba(229,9,20,0.42) 100%
            ),
            radial-gradient(circle at 78% 36%, rgba(229,9,20,.55), transparent 34%),
            radial-gradient(circle at 70% 75%, rgba(255,191,0,.34), transparent 32%);
        }

        .hb-hero::after {
          content: "";
          position: absolute;
          inset: auto -10% -18% -10%;
          height: 260px;
          background: linear-gradient(to top, var(--hb-cream), transparent);
          z-index: 2;
        }

        .hb-floating-burger {
          position: absolute;
          right: 5%;
          bottom: 8%;
          font-size: 260px;
          opacity: 0.14;
          animation: floatBurger 7s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }

        .hb-hero-content {
          position: relative;
          z-index: 3;
          max-width: 780px;
        }

        .hb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(229,9,20,.24);
          color: var(--hb-red);
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 950;
          margin-bottom: 26px;
          box-shadow: 0 15px 35px rgba(229,9,20,.12);
        }

        .hb-title {
          font-size: clamp(52px, 8vw, 108px);
          line-height: .9;
          font-weight: 950;
          margin-bottom: 24px;
          letter-spacing: -4px;
        }

        .hb-title span {
          display: block;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-text {
          color: var(--hb-muted);
          font-size: 18px;
          line-height: 1.9;
          max-width: 640px;
          font-weight: 600;
        }

        .hb-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 34px;
        }

        .hb-btn {
          border: none !important;
          border-radius: 999px !important;
          font-weight: 950 !important;
          padding: 16px 30px !important;
          transition: .35s ease;
        }

        .hb-btn-primary {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          box-shadow: 0 20px 50px rgba(229,9,20,.34);
        }

        .hb-btn-primary:hover {
          transform: translateY(-5px) scale(1.04);
          background: linear-gradient(135deg, var(--hb-red-dark), var(--hb-red)) !important;
        }

        .hb-btn-outline {
          border: 1px solid rgba(229,9,20,.28) !important;
          background: rgba(255,255,255,.88) !important;
          color: var(--hb-black) !important;
        }

        .hb-btn-outline:hover {
          background: #ffe3d3 !important;
          transform: translateY(-4px);
        }

        .hb-stats {
          margin-top: 45px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hb-stat {
          padding: 18px 22px;
          border-radius: 24px;
          border: 1px solid rgba(229,9,20,.18);
          background: rgba(255,255,255,.82);
          box-shadow: 0 18px 40px rgba(229,9,20,.11);
        }

        .hb-stat h3 {
          color: var(--hb-red);
          font-size: 34px;
          font-weight: 950;
          margin: 0;
        }

        .hb-stat p {
          color: var(--hb-muted);
          margin: 0;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 850;
        }

        .hb-section {
          padding: 100px 0;
          position: relative;
        }

        .hb-section.menu-bg {
          background:
            linear-gradient(rgba(255,247,237,.76), rgba(255,247,237,.84)),
            radial-gradient(circle at top right, rgba(229,9,20,.24), transparent 30%),
            url("https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1700&q=95") center/cover fixed;
        }

        .hb-section.special-bg {
          background:
            linear-gradient(rgba(18,7,7,.82), rgba(143,0,8,.78)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover fixed;
          color: white;
        }

        .hb-section-title {
          text-align: center;
          margin-bottom: 65px;
        }

        .hb-section-title h2 {
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 950;
          margin-bottom: 18px;
          line-height: .95;
          letter-spacing: -2px;
        }

        .hb-section-title p {
          color: var(--hb-muted);
          max-width: 700px;
          margin: auto;
          line-height: 1.8;
          font-weight: 600;
        }

        .special-bg .hb-section-title p {
          color: rgba(255,255,255,.76);
        }

        .hb-line {
          width: 100px;
          height: 5px;
          border-radius: 999px;
          margin: 18px auto 0;
          background: linear-gradient(90deg, var(--hb-red), var(--hb-yellow));
        }

        .hb-category-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          height: 430px;
          cursor: pointer;
          transition: .45s ease;
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 28px 70px rgba(18,7,7,.16);
        }

        .hb-category-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 1s ease;
          filter: brightness(1.08) contrast(1.08) saturate(1.12);
        }

        .hb-category-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,7,7,.88), rgba(229,9,20,.12), transparent 65%);
        }

        .hb-category-card:hover img {
          transform: scale(1.12);
        }

        .hb-category-card:hover {
          transform: translateY(-12px);
        }

        .hb-category-content {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 28px;
          z-index: 2;
          color: white;
        }

        .hb-category-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          margin-bottom: 18px;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-yellow));
          color: white;
          font-size: 26px;
          box-shadow: 0 16px 40px rgba(229,9,20,.35);
        }

        .hb-category-content h3 {
          font-size: 34px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .hb-category-content p {
          color: rgba(255,255,255,.78);
          margin: 0;
        }

        .hb-food-card {
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,191,0,.22);
          border-radius: 30px;
          overflow: hidden;
          height: 100%;
          transition: .4s ease;
          backdrop-filter: blur(14px);
          box-shadow: 0 24px 65px rgba(0,0,0,.3);
          color: white;
        }

        .hb-food-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255,191,0,.48);
        }

        .hb-food-img {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .hb-food-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 1s ease;
        }

        .hb-food-card:hover img {
          transform: scale(1.1);
        }

        .hb-badge {
          position: absolute !important;
          top: 18px;
          left: 18px;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-yellow)) !important;
          color: white !important;
          font-weight: 950 !important;
          padding: 10px 14px !important;
          border-radius: 999px !important;
        }

        .hb-food-content {
          padding: 28px;
        }

        .hb-food-content h3 {
          font-size: 30px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .hb-food-content p {
          color: rgba(255,255,255,.76);
          line-height: 1.8;
        }

        .hb-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
        }

        .hb-price {
          color: var(--hb-yellow);
          font-size: 36px;
          font-weight: 950;
        }

        .hb-add {
          width: 54px;
          height: 54px;
          border-radius: 50% !important;
          border: none !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          font-size: 20px !important;
          transition: .35s ease;
        }

        .hb-add:hover {
          transform: rotate(90deg) scale(1.08);
        }

        .hb-cart-panel {
          margin-top: 20px;
          border-radius: 36px;
          padding: 30px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,227,211,.88));
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 35px 95px rgba(18,7,7,.14);
          scroll-margin-top: 100px;
          color: var(--hb-black);
        }

        .hb-cart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .hb-cart-head h3 {
          margin: 0;
          font-size: 34px;
          font-weight: 950;
        }

        .hb-cart-count {
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          font-weight: 950;
        }

        .hb-empty-cart {
          padding: 38px 20px;
          text-align: center;
          border-radius: 26px;
          border: 1px dashed rgba(229,9,20,.28);
          color: var(--hb-muted);
        }

        .hb-empty-cart i {
          display: block;
          color: var(--hb-red);
          font-size: 44px;
          margin-bottom: 12px;
        }

        .hb-cart-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .hb-cart-item {
          display: grid;
          grid-template-columns: 70px 1fr auto;
          gap: 14px;
          align-items: center;
          padding: 14px;
          border-radius: 24px;
          background: #fff8f1;
          border: 1px solid rgba(229,9,20,.14);
        }

        .hb-cart-img {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          object-fit: cover;
        }

        .hb-cart-name {
          font-weight: 950;
          margin-bottom: 4px;
        }

        .hb-cart-small {
          color: var(--hb-muted);
          font-size: 13px;
        }

        .hb-cart-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .hb-qty-btn {
          width: 28px;
          height: 28px;
          border-radius: 50% !important;
          border: 1px solid rgba(229,9,20,.28) !important;
          background: white !important;
          color: var(--hb-red) !important;
          display: grid !important;
          place-items: center;
          padding: 0 !important;
        }

        .hb-qty {
          min-width: 24px;
          text-align: center;
          font-weight: 900;
        }

        .hb-remove {
          border: none !important;
          background: transparent !important;
          color: var(--hb-red) !important;
          padding: 0 !important;
          font-size: 18px !important;
        }

        .hb-cart-price {
          color: var(--hb-red);
          font-weight: 950;
          text-align: right;
          white-space: nowrap;
          margin-top: 8px;
        }

        .hb-bill {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid rgba(229,9,20,.16);
          max-width: 520px;
          margin-left: auto;
        }

        .hb-bill-row {
          display: flex;
          justify-content: space-between;
          color: var(--hb-muted);
          margin-bottom: 12px;
        }

        .hb-bill-row.total {
          color: var(--hb-black);
          font-size: 24px;
          font-weight: 950;
          margin-top: 14px;
        }

        .hb-checkout,
        .hb-clear {
          width: 100%;
          border-radius: 999px !important;
          font-weight: 950 !important;
        }

        .hb-checkout {
          margin-top: 18px;
          border: none !important;
          padding: 15px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
        }

        .hb-clear {
          margin-top: 12px;
          padding: 12px !important;
          border: 1px solid rgba(229,9,20,.2) !important;
          background: white !important;
          color: var(--hb-black) !important;
        }

        .hb-delivery {
          border-radius: 38px;
          overflow: hidden;
          position: relative;
          padding: 90px 60px;
          text-align: center;
          background:
            linear-gradient(rgba(143,0,8,.84), rgba(18,7,7,.86)),
            url("https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1700&q=95") center/cover;
          box-shadow: 0 35px 100px rgba(18,7,7,.24);
          color: white;
        }

        .hb-delivery h2 {
          font-size: clamp(40px,6vw,74px);
          font-weight: 950;
          line-height: .95;
          margin-bottom: 20px;
        }

        .hb-delivery h2 span {
          color: var(--hb-yellow);
        }

        .hb-delivery p {
          color: rgba(255,255,255,.78);
          max-width: 760px;
          margin: auto;
          line-height: 1.9;
          font-size: 18px;
        }

        .hb-apps {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 36px;
        }

        .hb-app-btn {
          min-width: 220px;
          height: 64px;
          border-radius: 22px !important;
          border: 1px solid rgba(255,191,0,.28) !important;
          background: rgba(255,255,255,.1) !important;
          color: white !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-weight: 900 !important;
          backdrop-filter: blur(12px);
          transition: .35s ease;
        }

        .hb-app-btn i {
          font-size: 24px;
          color: var(--hb-yellow);
        }

        .hb-app-btn:hover {
          transform: translateY(-5px);
        }

        @keyframes floatBurger {
          0%,100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }

        @media(max-width: 991px) {
          .hb-hero {
            text-align: center;
          }

          .hb-hero-content {
            margin: auto;
          }

          .hb-stats,
          .hb-hero-buttons {
            justify-content: center;
          }

          .hb-category-card {
            height: 360px;
          }

          .hb-cart-list {
            grid-template-columns: 1fr;
          }

          .hb-bill {
            max-width: 100%;
          }
        }

        @media(max-width: 768px) {
          .hb-hero {
            min-height: auto;
            padding: 115px 0 70px;
          }

          .hb-section {
            padding: 75px 0;
          }

          .hb-delivery,
          .hb-cart-panel {
            padding: 28px 20px;
          }

          .hb-food-img {
            height: 220px;
          }

          .hb-category-card {
            height: 320px;
          }

          .hb-title {
            letter-spacing: -2px;
          }

          .hb-floating-burger {
            font-size: 165px;
            right: -55px;
            bottom: 20px;
          }

          .hb-cart-item {
            grid-template-columns: 62px 1fr;
          }

          .hb-cart-price {
            text-align: left;
          }

          .hb-btn {
            width: 100%;
          }
        }
      `}</style>

      <main className="hb-home">
        <section className="hb-hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hb-video-bg"
            poster="https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1800&q=95"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="hb-video-overlay"></div>
          <div className="hb-floating-burger">🍔</div>

          <Container>
            <div className="hb-hero-content">
              <div className="hb-eyebrow">
                <i className="bi bi-fire"></i>
                Fresh • Hot • 100% Halal
              </div>

              <h1 className="hb-title">
                Taste That
                <span>Hits Different.</span>
              </h1>

              <p className="hb-text">
                Flame-grilled burgers, crispy chicken, loaded fries and bold
                street flavours crafted fresh for real food lovers.
              </p>

              <div className="hb-hero-buttons">
                <Button className="hb-btn hb-btn-primary" onClick={handleBookOrder}>
                  <i className="bi bi-bag-fill me-2"></i>
                  Book Order
                </Button>

                <Button
                  className="hb-btn hb-btn-outline"
                  onClick={() => navigate("/menu")}
                >
                  View Full Menu
                </Button>
              </div>

              <div className="hb-stats">
                <div className="hb-stat">
                  <h3>4.8★</h3>
                  <p>Customer Rating</p>
                </div>

                <div className="hb-stat">
                  <h3>11+</h3>
                  <p>Branches</p>
                </div>

                <div className="hb-stat">
                  <h3>20K+</h3>
                  <p>Orders Served</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="hb-section menu-bg">
          <Container>
            <div className="hb-section-title">
              <h2>Explore Our Menu</h2>
              <p>
                Crafted with premium ingredients, bold spices and unforgettable
                flavour.
              </p>
              <div className="hb-line"></div>
            </div>

            <Row className="g-4">
              {categories.map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="hb-category-card" onClick={() => navigate("/menu")}>
                    <img src={item.img} alt={item.title} />

                    <div className="hb-category-content">
                      <div className="hb-category-icon">
                        <i className={item.icon}></i>
                      </div>

                      <h3>{item.title}</h3>
                      <p>Freshly made daily with signature sauces and premium ingredients.</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="hb-section special-bg">
          <Container>
            <div className="hb-section-title">
              <h2>Featured Specials</h2>
              <p>Most loved meals selected by our customers.</p>
              <div className="hb-line"></div>
            </div>

            <Row className="g-4">
              {featured.map((item) => (
                <Col lg={4} md={6} key={item.id}>
                  <Card className="hb-food-card">
                    <div className="hb-food-img">
                      <img src={item.img} alt={item.name} />
                      <Badge className="hb-badge">{item.tag}</Badge>
                    </div>

                    <div className="hb-food-content">
                      <h3>{item.name}</h3>
                      <p>Loaded with premium ingredients, melted cheese and signature flavours.</p>

                      <div className="hb-price-row">
                        <div className="hb-price">£{item.price.toFixed(2)}</div>

                        <Button className="hb-add" onClick={() => addToCart(item)}>
                          <i className="bi bi-plus-lg"></i>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="hb-section">
          <Container>
            <div className="hb-cart-panel" ref={cartRef}>
              <div className="hb-cart-head">
                <h3>Your Cart</h3>
                <div className="hb-cart-count">{totalItems}</div>
              </div>

              {cart.length === 0 ? (
                <div className="hb-empty-cart">
                  <i className="bi bi-bag"></i>
                  <strong>No items added yet</strong>
                  <p className="mb-0 mt-2">Click plus button to add featured meals.</p>
                </div>
              ) : (
                <>
                  <div className="hb-cart-list">
                    {cart.map((item) => (
                      <div className="hb-cart-item" key={item.id}>
                        <img src={item.img} alt={item.name} className="hb-cart-img" />

                        <div>
                          <div className="hb-cart-name">{item.name}</div>
                          <div className="hb-cart-small">£{item.price.toFixed(2)} each</div>

                          <div className="hb-cart-controls">
                            <Button className="hb-qty-btn" onClick={() => decreaseQty(item.id)}>
                              <i className="bi bi-dash"></i>
                            </Button>

                            <span className="hb-qty">{item.quantity}</span>

                            <Button className="hb-qty-btn" onClick={() => increaseQty(item.id)}>
                              <i className="bi bi-plus"></i>
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Button className="hb-remove" onClick={() => removeItem(item.id)}>
                            <i className="bi bi-x-circle"></i>
                          </Button>

                          <div className="hb-cart-price">
                            £{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hb-bill">
                    <div className="hb-bill-row">
                      <span>Subtotal</span>
                      <strong>£{subtotal.toFixed(2)}</strong>
                    </div>

                    <div className="hb-bill-row">
                      <span>Delivery Fee</span>
                      <strong>£{deliveryFee.toFixed(2)}</strong>
                    </div>

                    <div className="hb-bill-row total">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>

                    <Button className="hb-checkout" onClick={handleCheckout}>
                      <i className="bi bi-credit-card-fill me-2"></i>
                      Checkout / Book Order
                    </Button>

                    <Button className="hb-clear" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Container>
        </section>

        <section className="hb-section">
          <Container>
            <div className="hb-delivery">
              <h2>
                Fast Delivery.
                <span> Hot & Fresh.</span>
              </h2>

              <p>
                Download our app and enjoy exclusive discounts, loyalty rewards
                and lightning-fast food delivery.
              </p>

              <div className="hb-apps">
                <Button className="hb-app-btn" onClick={() => alert("App Store link coming soon.")}>
                  <i className="bi bi-apple"></i>
                  App Store
                </Button>

                <Button className="hb-app-btn" onClick={() => alert("Google Play link coming soon.")}>
                  <i className="bi bi-google-play"></i>
                  Google Play
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;