import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Badge, Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Deals = () => {
  const [cart, setCart] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const cartRef = useRef(null);

  const deals = [
    {
      id: 1,
      title: "Fast Food Fire Box",
      category: "Fast Food",
      tag: "Best Value",
      price: 14.99,
      old: 22.5,
      img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=1200&q=90",
      items: ["2x Smash Burgers", "Loaded Fries", "6pc Wings", "2x Drinks"],
    },
    {
      id: 2,
      title: "Chinese Wok Combo",
      category: "Chinese",
      tag: "Hot Pick",
      price: 17.99,
      old: 26.0,
      img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1200&q=90",
      items: ["Chicken Chow Mein", "Egg Fried Rice", "Manchurian", "2x Drinks"],
    },
    {
      id: 3,
      title: "Desi Feast Deal",
      category: "Desi",
      tag: "Mega Deal",
      price: 21.99,
      old: 32.0,
      img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1200&q=90",
      items: ["Chicken Biryani", "Seekh Kebab", "Butter Chicken", "2x Naans"],
    },
    {
      id: 4,
      title: "Family Crazy Box",
      category: "Mixed",
      tag: "Family Deal",
      price: 34.99,
      old: 49.99,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1200&q=90",
      items: ["2x Burgers", "Chow Mein", "Biryani", "Large Fries", "4x Drinks"],
    },
  ];

  const scrollToCart = () => {
    if (window.innerWidth <= 991) {
      setTimeout(() => {
        cartRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    }
  };

  const addToCart = (deal) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === deal.id);

      if (exists) {
        return prev.map((item) =>
          item.id === deal.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...deal, quantity: 1 }];
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

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      scrollToCart();
      return;
    }

    setConfirmedTotal(total);
    setShowSuccessPopup(true);
    setCart([]);
  };

  const getCategoryIcon = (category) => {
    if (category === "Chinese") return "bi bi-fire";
    if (category === "Desi") return "bi bi-cloud-steam-fill";
    if (category === "Mixed") return "bi bi-stars";
    return "bi bi-lightning-charge-fill";
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

        .hb-deals {
          min-height: 100vh;
          padding: 120px 0 80px;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 10% 10%, rgba(255,191,0,.35), transparent 24%),
            radial-gradient(circle at 90% 8%, rgba(229,9,20,.22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(255,90,0,.22), transparent 34%),
            linear-gradient(145deg, #fff8ed 0%, #ffe3c2 48%, #fff1dc 100%);
          color: var(--hb-black);
          font-family: "Inter", sans-serif;
        }

        .hb-deals::before {
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
          top: 80px;
          right: -58px;
          font-size: 245px;
          color: rgba(229,9,20,.11);
          animation: floatFire 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-floating-steam {
          position: absolute;
          left: -35px;
          bottom: 170px;
          font-size: 180px;
          color: rgba(255,90,0,.1);
          animation: floatFire 6s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .hb-heading {
          text-align: center;
          margin-bottom: 52px;
          position: relative;
          z-index: 2;
        }

        .hb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--hb-red);
          background: rgba(255,255,255,.72);
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

        .hb-heading h2 {
          font-size: clamp(44px, 7.2vw, 92px);
          line-height: .9;
          font-weight: 950;
          margin-bottom: 18px;
          letter-spacing: -3px;
        }

        .hb-heading h2 span {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-heading p {
          color: var(--hb-muted);
          max-width: 760px;
          margin: auto;
          line-height: 1.85;
          font-size: 18px;
          font-weight: 650;
        }

        .hb-quick-strip {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: -20px 0 42px;
        }

        .hb-quick-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(255,255,255,.82);
          color: var(--hb-black);
          border: 1px solid rgba(229,9,20,.14);
          box-shadow: 0 12px 30px rgba(18,7,7,.06);
          font-weight: 900;
          font-size: 13px;
        }

        .hb-quick-pill i {
          color: var(--hb-red);
        }

        .hb-deal-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(229,9,20,.15);
          height: 100%;
          transition: .38s ease;
          box-shadow: 0 24px 65px rgba(18,7,7,.1);
        }

        .hb-deal-card:hover {
          transform: translateY(-10px);
          border-color: rgba(229,9,20,.38);
          box-shadow: 0 30px 76px rgba(229,9,20,.18);
        }

        .hb-img-wrap {
          height: 255px;
          position: relative;
          overflow: hidden;
        }

        .hb-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 1s ease;
          filter: brightness(1.05) contrast(1.08) saturate(1.16);
        }

        .hb-deal-card:hover img {
          transform: scale(1.12) rotate(1deg);
        }

        .hb-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,7,7,.76), rgba(229,9,20,.14), transparent 72%);
        }

        .hb-badge {
          position: absolute !important;
          top: 18px;
          left: 18px;
          z-index: 2;
          border-radius: 999px !important;
          padding: 10px 14px !important;
          background: linear-gradient(135deg, var(--hb-yellow), var(--hb-orange), var(--hb-red)) !important;
          color: white !important;
          font-weight: 950 !important;
          box-shadow: 0 12px 30px rgba(18,7,7,.2);
        }

        .hb-category-tag {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(18,7,7,.72);
          color: white;
          font-size: 12px;
          font-weight: 950;
          backdrop-filter: blur(10px);
        }

        .hb-content {
          padding: 26px;
        }

        .hb-content h3 {
          font-size: 30px;
          font-weight: 950;
          margin-bottom: 18px;
          letter-spacing: -1px;
        }

        .hb-list {
          list-style: none;
          padding: 0;
          margin: 0 0 26px;
        }

        .hb-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--hb-muted);
          margin-bottom: 13px;
          font-size: 15px;
          font-weight: 700;
        }

        .hb-list li::before {
          content: "◆";
          color: var(--hb-red);
          font-size: 10px;
        }

        .hb-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 12px;
          margin-bottom: 24px;
        }

        .hb-price {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hb-new {
          color: var(--hb-red);
          font-size: 40px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .hb-old {
          color: #9b8b80;
          text-decoration: line-through;
          margin-bottom: 7px;
          font-size: 16px;
          font-weight: 800;
        }

        .hb-save {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(229,9,20,.1);
          border: 1px solid rgba(229,9,20,.2);
          color: var(--hb-red);
          font-size: 12px;
          font-weight: 950;
          white-space: nowrap;
        }

        .hb-claim {
          width: 100%;
          border: none !important;
          border-radius: 999px !important;
          padding: 15px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-weight: 950 !important;
          font-size: 16px !important;
          box-shadow: 0 16px 34px rgba(229,9,20,.24);
          transition: .32s ease;
        }

        .hb-claim:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .hb-cart-panel {
          margin-top: 70px;
          border-radius: 36px;
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(255,191,0,.24), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.97), rgba(255,235,210,.94));
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 35px 95px rgba(18,7,7,.13);
          scroll-margin-top: 110px;
          position: relative;
          z-index: 2;
        }

        .hb-cart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .hb-cart-head h3 {
          margin: 0;
          font-size: 32px;
          font-weight: 950;
        }

        .hb-cart-count {
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(229,9,20,.26);
        }

        .hb-empty-cart {
          padding: 36px 20px;
          text-align: center;
          border-radius: 26px;
          border: 1px dashed rgba(229,9,20,.3);
          color: var(--hb-muted);
          background: rgba(255,255,255,.55);
        }

        .hb-empty-cart i {
          display: block;
          color: var(--hb-red);
          font-size: 44px;
          margin-bottom: 12px;
        }

        .hb-cart-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .hb-cart-item {
          display: grid;
          grid-template-columns: 68px 1fr auto;
          gap: 14px;
          align-items: center;
          padding: 14px;
          border-radius: 24px;
          background: #fff8f1;
          border: 1px solid rgba(229,9,20,.12);
        }

        .hb-cart-img {
          width: 68px;
          height: 68px;
          border-radius: 18px;
          object-fit: cover;
        }

        .hb-cart-name {
          font-weight: 950;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .hb-cart-small {
          color: var(--hb-muted);
          font-size: 13px;
          font-weight: 700;
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
          border: 1px solid rgba(229,9,20,.25) !important;
          background: white !important;
          color: var(--hb-red) !important;
          display: grid !important;
          place-items: center;
          padding: 0 !important;
        }

        .hb-qty {
          min-width: 24px;
          text-align: center;
          font-weight: 950;
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
          font-weight: 750;
        }

        .hb-bill-row.total {
          color: var(--hb-black);
          font-size: 24px;
          font-weight: 950;
          margin-top: 14px;
        }

        .hb-checkout {
          width: 100%;
          margin-top: 18px;
          border: none !important;
          border-radius: 999px !important;
          padding: 15px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-weight: 950 !important;
          box-shadow: 0 16px 34px rgba(229,9,20,.24);
        }

        .hb-clear {
          width: 100%;
          margin-top: 12px;
          border-radius: 999px !important;
          padding: 12px !important;
          border: 1px solid rgba(229,9,20,.2) !important;
          background: white !important;
          color: var(--hb-black) !important;
          font-weight: 900 !important;
        }

        .hb-app {
          margin-top: 85px;
          padding: 70px 45px;
          border-radius: 40px;
          text-align: center;
          background:
            linear-gradient(rgba(143,0,8,.82), rgba(18,7,7,.88)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover;
          color: white;
          box-shadow: 0 35px 100px rgba(18,7,7,.24);
          position: relative;
          overflow: hidden;
        }

        .hb-app::after {
          content: "";
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: rgba(255,191,0,.22);
          right: -60px;
          top: -60px;
        }

        .hb-app h2 {
          position: relative;
          z-index: 2;
          font-size: clamp(36px, 6vw, 72px);
          line-height: .96;
          font-weight: 950;
          margin-bottom: 18px;
        }

        .hb-app h2 span {
          color: var(--hb-yellow);
        }

        .hb-app p {
          position: relative;
          z-index: 2;
          color: rgba(255,255,255,.78);
          max-width: 760px;
          margin: auto;
          line-height: 1.85;
          font-size: 18px;
          font-weight: 600;
        }

        .hb-discount {
          position: relative;
          z-index: 2;
          display: inline-flex;
          margin-top: 28px;
          padding: 14px 24px;
          border-radius: 999px;
          background: rgba(255,191,0,.13);
          border: 1px solid rgba(255,191,0,.28);
          color: var(--hb-yellow);
          font-weight: 950;
        }

        .hb-store-buttons {
          position: relative;
          z-index: 2;
          margin-top: 36px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        .hb-store {
          min-width: 230px;
          height: 66px;
          border-radius: 22px !important;
          border: 1px solid rgba(255,191,0,.28) !important;
          background: rgba(255,255,255,.1) !important;
          color: white !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-weight: 950 !important;
          transition: .32s ease;
        }

        .hb-store:hover {
          transform: translateY(-5px);
        }

        .hb-store i {
          color: var(--hb-yellow);
          font-size: 24px;
        }

        .hb-success-modal .modal-content {
          border: none;
          border-radius: 34px;
          overflow: hidden;
          background: transparent;
          box-shadow: 0 34px 90px rgba(18,7,7,.28);
        }

        .hb-success-box {
          padding: 42px 32px;
          text-align: center;
          background:
            radial-gradient(circle at top right, rgba(255,191,0,.24), transparent 34%),
            linear-gradient(135deg, #fff8f1, #ffe3d3);
          border: 1px solid rgba(229,9,20,.18);
          color: var(--hb-black);
        }

        .hb-success-icon {
          width: 92px;
          height: 92px;
          margin: 0 auto 22px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-size: 44px;
          box-shadow: 0 20px 52px rgba(229,9,20,.34);
          animation: successPop .45s ease;
        }

        .hb-success-box h3 {
          font-size: 34px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .hb-success-box p {
          color: var(--hb-muted);
          font-weight: 650;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .hb-success-total {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 20px;
          border-radius: 999px;
          background: white;
          border: 1px solid rgba(229,9,20,.16);
          color: var(--hb-red);
          font-size: 20px;
          font-weight: 950;
          margin-bottom: 24px;
          box-shadow: 0 12px 32px rgba(18,7,7,.08);
        }

        .hb-success-close {
          width: 100%;
          border: none !important;
          border-radius: 999px !important;
          padding: 14px 24px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-weight: 950 !important;
        }

        @keyframes floatFire {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        @keyframes successPop {
          0% { transform: scale(.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media(max-width: 991px) {
          .hb-deals {
            padding: 105px 0 70px;
          }

          .hb-cart-list {
            grid-template-columns: 1fr;
          }

          .hb-bill {
            max-width: 100%;
          }
        }

        @media(max-width: 768px) {
          .hb-deals {
            padding: 92px 0 58px;
          }

          .hb-heading {
            margin-bottom: 34px;
          }

          .hb-heading h2 {
            line-height: 1;
            letter-spacing: -2px;
          }

          .hb-heading p {
            font-size: 15px;
            line-height: 1.7;
            padding: 0 6px;
          }

          .hb-quick-strip {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 8px;
            margin: -12px 0 28px;
          }

          .hb-quick-pill {
            flex: 0 0 auto;
          }

          .hb-img-wrap {
            height: 215px;
          }

          .hb-content {
            padding: 22px;
          }

          .hb-content h3 {
            font-size: 25px;
          }

          .hb-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .hb-new {
            font-size: 34px;
          }

          .hb-cart-panel {
            margin-top: 48px;
            border-radius: 28px;
            padding: 20px;
          }

          .hb-cart-head h3 {
            font-size: 25px;
          }

          .hb-cart-item {
            grid-template-columns: 56px 1fr;
          }

          .hb-cart-img {
            width: 56px;
            height: 56px;
            border-radius: 16px;
          }

          .hb-cart-item > div:last-child {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .hb-cart-price {
            text-align: left;
            margin-top: 0;
          }

          .hb-app {
            margin-top: 55px;
            padding: 46px 22px;
            border-radius: 28px;
          }

          .hb-store-buttons {
            flex-direction: column;
          }

          .hb-store {
            width: 100%;
            min-width: auto;
          }

          .hb-floating-fire {
            font-size: 130px;
            right: -42px;
            top: 70px;
          }

          .hb-floating-steam {
            display: none;
          }
        }

        @media(max-width: 420px) {
          .hb-eyebrow {
            font-size: 10px;
            letter-spacing: 1.4px;
            padding: 10px 14px;
          }

          .hb-heading h2 {
            font-size: 42px;
          }

          .hb-img-wrap {
            height: 200px;
          }

          .hb-category-tag {
            top: 62px;
            right: 18px;
          }
        }
      `}</style>

      <main className="hb-deals">
        <i className="bi bi-fire hb-floating-fire"></i>
        <i className="bi bi-cloud-steam-fill hb-floating-steam"></i>

        <Container>
          <div className="hb-heading">
            <div className="hb-eyebrow">
              <i className="bi bi-stars"></i>
              Fast Food • Chinese • Desi Deals
            </div>

            <h2>
              Today’s <span>Crazy Deals</span>
            </h2>

            <p>
              Combo boxes made for every craving — crispy fast food, saucy
              Chinese favourites and proper desi feast deals at bold prices.
            </p>
          </div>

          <div className="hb-quick-strip">
            <span className="hb-quick-pill">
              <i className="bi bi-lightning-charge-fill"></i> Hot Combos
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-fire"></i> Spicy Flavours
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-cloud-steam-fill"></i> Fresh Meals
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-bag-check-fill"></i> Easy Booking
            </span>
          </div>

          <Row className="g-4">
            {deals.map((deal) => (
              <Col lg={3} md={6} key={deal.id}>
                <div className="hb-deal-card">
                  <div className="hb-img-wrap">
                    <img src={deal.img} alt={deal.title} />
                    <Badge className="hb-badge">{deal.tag}</Badge>

                    <div className="hb-category-tag">
                      <i className={getCategoryIcon(deal.category)}></i>
                      {deal.category}
                    </div>
                  </div>

                  <div className="hb-content">
                    <h3>{deal.title}</h3>

                    <ul className="hb-list">
                      {deal.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="hb-bottom">
                      <div className="hb-price">
                        <div className="hb-new">£{deal.price.toFixed(2)}</div>
                        <div className="hb-old">£{deal.old.toFixed(2)}</div>
                      </div>

                      <div className="hb-save">🔥 Save Big</div>
                    </div>

                    <Button
                      className="hb-claim"
                      onClick={() => addToCart(deal)}
                    >
                      <i className="bi bi-bag-fill me-2"></i>
                      Claim This Deal
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="hb-cart-panel" ref={cartRef}>
            <div className="hb-cart-head">
              <h3>Your Deals Cart</h3>
              <div className="hb-cart-count">{totalItems}</div>
            </div>

            {cart.length === 0 ? (
              <div className="hb-empty-cart">
                <i className="bi bi-bag-heart-fill"></i>
                <strong>No deals selected yet</strong>
                <p className="mb-0 mt-2">
                  Tap “Claim This Deal” and build your combo order.
                </p>
              </div>
            ) : (
              <>
                <div className="hb-cart-list">
                  {cart.map((item) => (
                    <div className="hb-cart-item" key={item.id}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="hb-cart-img"
                      />

                      <div>
                        <div className="hb-cart-name">{item.title}</div>
                        <div className="hb-cart-small">
                          £{item.price.toFixed(2)} each
                        </div>

                        <div className="hb-cart-controls">
                          <Button
                            className="hb-qty-btn"
                            onClick={() => decreaseQty(item.id)}
                          >
                            <i className="bi bi-dash"></i>
                          </Button>

                          <span className="hb-qty">{item.quantity}</span>

                          <Button
                            className="hb-qty-btn"
                            onClick={() => increaseQty(item.id)}
                          >
                            <i className="bi bi-plus"></i>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Button
                          className="hb-remove"
                          onClick={() => removeItem(item.id)}
                        >
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
                    Checkout / Book Deal
                  </Button>

                  <Button className="hb-clear" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="hb-app">
            <div className="hb-eyebrow">
              <i className="bi bi-phone-fill"></i>
              Mobile Ordering
            </div>

            <h2>
              Order Faster <span>From Your Phone</span>
            </h2>

            <p>
              Save your favourite fast food, Chinese and desi deals. Reorder
              quickly and unlock exclusive combo offers.
            </p>

            <div className="hb-discount">
              🔥 Get 50% OFF Your First Combo
            </div>

            <div className="hb-store-buttons">
              <Button
                className="hb-store"
                onClick={() => setShowSuccessPopup(true)}
              >
                <i className="bi bi-apple"></i>
                App Store
              </Button>

              <Button
                className="hb-store"
                onClick={() => setShowSuccessPopup(true)}
              >
                <i className="bi bi-google-play"></i>
                Google Play
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Modal
        show={showSuccessPopup}
        onHide={() => setShowSuccessPopup(false)}
        centered
        className="hb-success-modal"
      >
        <div className="hb-success-box">
          <div className="hb-success-icon">
            <i className="bi bi-check2-circle"></i>
          </div>

          <h3>Deal Booked Successfully!</h3>

          <p>
            Thank you for your order. Your deal booking has been received and
            our team will prepare it fresh for you.
          </p>

          <div className="hb-success-total">
            <i className="bi bi-receipt"></i>
            Total: £{confirmedTotal.toFixed(2)}
          </div>

          <Button
            className="hb-success-close"
            onClick={() => setShowSuccessPopup(false)}
          >
            Continue Shopping
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Deals;