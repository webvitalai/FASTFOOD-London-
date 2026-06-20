import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Card, Badge, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const categories = [
    {
      title: "Chinese Noodles",
      icon: "bi bi-cup-hot-fill",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1400&q=95",
      desc: "Saucy, spicy and wok-tossed fresh.",
    },
    {
      title: "Steamy Momos",
icon: "bi bi-basket-fill",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=100",
      desc: "Soft dumplings with fiery dips.",
    },
    {
      title: "Desi Karahi",
      icon: "bi bi-fire",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1400&q=95",
      desc: "Chicken karahi, masala and tandoori heat.",
    },
  ];

  const featured = [
    {
      id: 1,
      name: "Dragon Fire Noodles",
      price: 8.99,
      tag: "Chinese",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=95",
    },
    {
      id: 2,
      name: "Chicken Karahi Bowl",
      price: 10.99,
      tag: "Desi Special",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200&q=95",
    },
    {
      id: 3,
      name: "Spicy Momos Platter",
      price: 7.49,
      tag: "Hot Pick",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=100",
    },
    {
      id: 4,
      name: "Loaded Smash Burger",
      price: 9.49,
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=95",
    },
    {
      id: 5,
      name: "Masala Loaded Fries",
      price: 6.99,
      tag: "Street Style",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=95",
    },
    {
      id: 6,
      name: "Crispy Hot Wings",
      price: 7.99,
      tag: "Fiery",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1200&q=95",
    },
  ];

  const scrollToCart = () => {
    setTimeout(() => {
      if (!cartRef.current) return;

      const cartTop =
        cartRef.current.getBoundingClientRect().top + window.pageYOffset;

      const offset = window.innerWidth <= 768 ? 150 : 220;

      window.scrollTo({
        top: Math.max(cartTop - offset, 0),
        behavior: "smooth",
      });
    }, 160);
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
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCart([]);
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

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

        .ff-home {
          background:
            radial-gradient(circle at top left, rgba(239,35,60,.15), transparent 34%),
            radial-gradient(circle at 90% 12%, rgba(255,195,0,.18), transparent 30%),
            var(--ff-cream);
          color:var(--ff-black);
          overflow:hidden;
          font-family:"Inter",sans-serif;
        }

        .ff-hero {
          min-height:100vh;
          position:relative;
          display:flex;
          align-items:center;
          overflow:hidden;
          padding:132px 0 90px;
          background:
            linear-gradient(90deg, rgba(19,6,6,.86) 0%, rgba(168,0,21,.63) 46%, rgba(255,122,0,.28) 100%),
            url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1900&q=95") center/cover no-repeat;
          color:white;
        }

        .ff-hero::before {
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(circle at 75% 28%, rgba(255,195,0,.42), transparent 28%),
            radial-gradient(circle at 82% 72%, rgba(239,35,60,.45), transparent 30%),
            linear-gradient(180deg, rgba(19,6,6,.12), rgba(19,6,6,.55));
          z-index:1;
        }

        .ff-hero::after {
          content:"";
          position:absolute;
          left:-10%;
          right:-10%;
          bottom:-2px;
          height:210px;
          background:linear-gradient(to top, var(--ff-cream), transparent);
          z-index:2;
        }

        .ff-hero-content {
          position:relative;
          z-index:3;
          max-width:820px;
        }

        .ff-eyebrow {
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 18px;
          border-radius:999px;
          background:rgba(255,255,255,.14);
          border:1px solid rgba(255,255,255,.22);
          color:#fff;
          font-size:12px;
          letter-spacing:2.5px;
          text-transform:uppercase;
          font-weight:1000;
          margin-bottom:25px;
          backdrop-filter:blur(14px);
        }

        .ff-title {
          font-size:clamp(48px,8vw,106px);
          line-height:.9;
          font-weight:1000;
          margin-bottom:24px;
          letter-spacing:-4px;
        }

        .ff-title span {
          display:block;
          background:linear-gradient(135deg,var(--ff-yellow),#fff,var(--ff-orange));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .ff-text {
          color:rgba(255,255,255,.84);
          font-size:18px;
          line-height:1.85;
          max-width:680px;
          font-weight:650;
        }

        .ff-hero-buttons {
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          margin-top:34px;
        }

        .ff-btn {
          border:none !important;
          border-radius:999px !important;
          font-weight:1000 !important;
          padding:16px 30px !important;
          transition:.32s ease;
        }

        .ff-btn-primary {
          background:linear-gradient(135deg,var(--ff-red),var(--ff-dark-red),var(--ff-orange)) !important;
          color:white !important;
          box-shadow:0 20px 50px rgba(239,35,60,.38);
        }

        .ff-btn-primary:hover {
          transform:translateY(-5px) scale(1.04);
        }

        .ff-btn-outline {
          background:rgba(255,255,255,.14) !important;
          color:white !important;
          border:1px solid rgba(255,255,255,.25) !important;
          backdrop-filter:blur(12px);
        }

        .ff-btn-outline:hover {
          background:rgba(255,255,255,.24) !important;
          transform:translateY(-4px);
        }

        .ff-floating-food {
          position:absolute;
          right:5%;
          bottom:12%;
          z-index:2;
          display:grid;
          gap:14px;
          pointer-events:none;
        }

        .ff-floating-food span {
          width:92px;
          height:92px;
          border-radius:28px;
          display:grid;
          place-items:center;
          font-size:42px;
          background:rgba(255,255,255,.14);
          border:1px solid rgba(255,255,255,.20);
          backdrop-filter:blur(12px);
          box-shadow:0 24px 55px rgba(0,0,0,.22);
          animation:floatFood 6s ease-in-out infinite;
        }

        .ff-floating-food span:nth-child(2) {
          transform:translateX(-45px);
          animation-delay:.8s;
        }

        .ff-floating-food span:nth-child(3) {
          animation-delay:1.4s;
        }

        .ff-stats {
          margin-top:42px;
          display:flex;
          gap:16px;
          flex-wrap:wrap;
        }

        .ff-stat {
          padding:17px 21px;
          border-radius:24px;
          background:rgba(255,255,255,.14);
          border:1px solid rgba(255,255,255,.20);
          backdrop-filter:blur(14px);
        }

        .ff-stat h3 {
          color:var(--ff-yellow);
          font-size:32px;
          font-weight:1000;
          margin:0;
        }

        .ff-stat p {
          color:rgba(255,255,255,.78);
          margin:0;
          font-size:12px;
          text-transform:uppercase;
          letter-spacing:1px;
          font-weight:900;
        }

        .ff-section {
          padding:96px 0;
          position:relative;
        }

        .ff-menu-bg {
          background:
            linear-gradient(rgba(255,246,232,.82), rgba(255,246,232,.9)),
            url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=95") center/cover fixed;
        }

        .ff-special-bg {
          background:
            linear-gradient(rgba(19,6,6,.84), rgba(168,0,21,.82)),
            url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=95") center/cover fixed;
          color:white;
        }

        .ff-section-title {
          text-align:center;
          margin-bottom:60px;
        }

        .ff-section-title h2 {
          font-size:clamp(38px,5vw,68px);
          font-weight:1000;
          line-height:.95;
          letter-spacing:-2px;
          margin-bottom:16px;
        }

        .ff-section-title p {
          color:var(--ff-muted);
          max-width:720px;
          margin:auto;
          line-height:1.8;
          font-weight:650;
        }

        .ff-special-bg .ff-section-title p {
          color:rgba(255,255,255,.75);
        }

        .ff-line {
          width:105px;
          height:5px;
          border-radius:999px;
          margin:18px auto 0;
          background:linear-gradient(90deg,var(--ff-red),var(--ff-orange),var(--ff-yellow));
        }

        .ff-category-card {
          position:relative;
          overflow:hidden;
          border-radius:34px;
          height:430px;
          cursor:pointer;
          transition:.42s ease;
          border:1px solid rgba(239,35,60,.18);
          box-shadow:0 28px 70px rgba(19,6,6,.16);
        }

        .ff-category-card img {
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
          filter:brightness(1.08) contrast(1.08) saturate(1.14);
        }

        .ff-category-card::after {
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(19,6,6,.9), rgba(239,35,60,.18), transparent 62%);
        }

        .ff-category-card:hover {
          transform:translateY(-12px);
        }

        .ff-category-card:hover img {
          transform:scale(1.12);
        }

        .ff-category-content {
          position:absolute;
          left:28px;
          right:28px;
          bottom:26px;
          z-index:2;
          color:white;
        }

        .ff-category-icon {
          width:60px;
          height:60px;
          border-radius:18px;
          display:grid;
          place-items:center;
          margin-bottom:18px;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange),var(--ff-yellow));
          color:white;
          font-size:26px;
          box-shadow:0 16px 40px rgba(239,35,60,.35);
        }

        .ff-category-content h3 {
          font-size:32px;
          font-weight:1000;
          margin-bottom:8px;
        }

        .ff-category-content p {
          color:rgba(255,255,255,.78);
          margin:0;
          line-height:1.6;
          font-weight:650;
        }

        .ff-food-card {
          background:rgba(255,255,255,.1);
          border:1px solid rgba(255,195,0,.22);
          border-radius:30px;
          overflow:hidden;
          height:100%;
          transition:.38s ease;
          backdrop-filter:blur(14px);
          box-shadow:0 24px 65px rgba(0,0,0,.28);
          color:white;
        }

        .ff-food-card:hover {
          transform:translateY(-12px);
          border-color:rgba(255,195,0,.48);
        }

        .ff-food-img {
          height:245px;
          overflow:hidden;
          position:relative;
        }

        .ff-food-img img {
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .ff-food-card:hover img {
          transform:scale(1.1);
        }

        .ff-badge {
          position:absolute !important;
          top:17px;
          left:17px;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange),var(--ff-yellow)) !important;
          color:white !important;
          font-weight:1000 !important;
          padding:10px 14px !important;
          border-radius:999px !important;
        }

        .ff-food-content {
          padding:26px;
        }

        .ff-food-content h3 {
          font-size:27px;
          font-weight:1000;
          margin-bottom:10px;
        }

        .ff-food-content p {
          color:rgba(255,255,255,.74);
          line-height:1.75;
          margin:0;
        }

        .ff-price-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:22px;
        }

        .ff-price {
          color:var(--ff-yellow);
          font-size:33px;
          font-weight:1000;
        }

        .ff-add {
          width:54px;
          height:54px;
          border-radius:50% !important;
          border:none !important;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-dark-red)) !important;
          color:white !important;
          font-size:20px !important;
          transition:.32s ease;
        }

        .ff-add:hover {
          transform:rotate(90deg) scale(1.08);
        }

        .ff-cart-panel {
          margin-top:20px;
          border-radius:36px;
          padding:30px;
          min-height:510px;
          background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(255,225,196,.9));
          border:1px solid rgba(239,35,60,.16);
          box-shadow:0 35px 95px rgba(19,6,6,.14);
          color:var(--ff-black);
          scroll-margin-top:220px;
        }

        .ff-cart-head {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:24px;
        }

        .ff-cart-head h3 {
          margin:0;
          font-size:33px;
          font-weight:1000;
        }

        .ff-cart-count {
          min-width:43px;
          height:43px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange));
          color:white;
          font-weight:1000;
        }

        .ff-empty-cart {
          padding:38px 20px;
          text-align:center;
          border-radius:26px;
          border:1px dashed rgba(239,35,60,.28);
          color:var(--ff-muted);
          background:rgba(255,255,255,.5);
        }

        .ff-empty-cart i {
          display:block;
          color:var(--ff-red);
          font-size:44px;
          margin-bottom:12px;
        }

        .ff-cart-list {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
        }

        .ff-cart-item {
          display:grid;
          grid-template-columns:70px 1fr auto;
          gap:13px;
          align-items:center;
          padding:14px;
          border-radius:24px;
          background:#fff8f1;
          border:1px solid rgba(239,35,60,.13);
        }

        .ff-cart-img {
          width:70px;
          height:70px;
          border-radius:18px;
          object-fit:cover;
        }

        .ff-cart-name {
          font-weight:1000;
          margin-bottom:4px;
        }

        .ff-cart-small {
          color:var(--ff-muted);
          font-size:13px;
        }

        .ff-cart-controls {
          display:flex;
          align-items:center;
          gap:8px;
          margin-top:8px;
        }

        .ff-qty-btn {
          width:28px;
          height:28px;
          border-radius:50% !important;
          border:1px solid rgba(239,35,60,.24) !important;
          background:white !important;
          color:var(--ff-red) !important;
          display:grid !important;
          place-items:center;
          padding:0 !important;
        }

        .ff-qty {
          min-width:24px;
          text-align:center;
          font-weight:1000;
        }

        .ff-remove {
          border:none !important;
          background:transparent !important;
          color:var(--ff-red) !important;
          padding:0 !important;
          font-size:18px !important;
        }

        .ff-cart-price {
          color:var(--ff-red);
          font-weight:1000;
          text-align:right;
          white-space:nowrap;
          margin-top:8px;
        }

        .ff-bill {
          margin-top:26px;
          padding-top:22px;
          border-top:1px solid rgba(239,35,60,.15);
          max-width:520px;
          margin-left:auto;
        }

        .ff-bill-row {
          display:flex;
          justify-content:space-between;
          color:var(--ff-muted);
          margin-bottom:12px;
        }

        .ff-bill-row.total {
          color:var(--ff-black);
          font-size:24px;
          font-weight:1000;
          margin-top:14px;
        }

        .ff-checkout,
        .ff-clear {
          width:100%;
          border-radius:999px !important;
          font-weight:1000 !important;
        }

        .ff-checkout {
          margin-top:18px;
          border:none !important;
          padding:15px !important;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-dark-red),var(--ff-orange)) !important;
          color:white !important;
        }

        .ff-clear {
          margin-top:12px;
          padding:12px !important;
          border:1px solid rgba(239,35,60,.2) !important;
          background:white !important;
          color:var(--ff-black) !important;
        }

        .ff-delivery {
          border-radius:38px;
          overflow:hidden;
          position:relative;
          padding:86px 58px;
          text-align:center;
          background:
            linear-gradient(rgba(168,0,21,.84), rgba(19,6,6,.87)),
            url("https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1700&q=95") center/cover;
          box-shadow:0 35px 100px rgba(19,6,6,.24);
          color:white;
        }

        .ff-delivery h2 {
          font-size:clamp(39px,6vw,74px);
          font-weight:1000;
          line-height:.95;
          margin-bottom:20px;
        }

        .ff-delivery h2 span {
          color:var(--ff-yellow);
        }

        .ff-delivery p {
          color:rgba(255,255,255,.78);
          max-width:760px;
          margin:auto;
          line-height:1.85;
          font-size:18px;
          font-weight:650;
        }

        .ff-apps {
          display:flex;
          justify-content:center;
          gap:16px;
          flex-wrap:wrap;
          margin-top:34px;
        }

        .ff-app-btn {
          min-width:215px;
          height:64px;
          border-radius:22px !important;
          border:1px solid rgba(255,195,0,.28) !important;
          background:rgba(255,255,255,.1) !important;
          color:white !important;
          display:flex !important;
          align-items:center;
          justify-content:center;
          gap:12px;
          font-weight:950 !important;
          backdrop-filter:blur(12px);
          transition:.32s ease;
        }

        .ff-app-btn i {
          font-size:24px;
          color:var(--ff-yellow);
        }

        .ff-app-btn:hover {
          transform:translateY(-5px);
        }

        .ff-success-modal .modal-content {
          border:0;
          border-radius:34px;
          overflow:hidden;
          background:transparent;
          box-shadow:0 34px 90px rgba(19,6,6,.28);
        }

        .ff-success-box {
          position:relative;
          padding:42px 32px;
          text-align:center;
          background:
            radial-gradient(circle at top right, rgba(255,195,0,.24), transparent 34%),
            linear-gradient(135deg,#fff8f1,#ffe1c4);
          border:1px solid rgba(239,35,60,.16);
          color:var(--ff-black);
        }

        .ff-success-icon {
          width:92px;
          height:92px;
          margin:0 auto 22px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-orange));
          color:white;
          font-size:44px;
          box-shadow:0 20px 52px rgba(239,35,60,.34);
          animation:successPop .45s ease;
        }

        .ff-success-box h3 {
          font-size:33px;
          font-weight:1000;
          margin-bottom:12px;
        }

        .ff-success-box p {
          color:var(--ff-muted);
          font-weight:650;
          line-height:1.75;
          margin-bottom:20px;
        }

        .ff-success-total {
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:13px 20px;
          border-radius:999px;
          background:white;
          border:1px solid rgba(239,35,60,.14);
          color:var(--ff-red);
          font-size:20px;
          font-weight:1000;
          margin-bottom:24px;
          box-shadow:0 12px 32px rgba(19,6,6,.08);
        }

        .ff-success-close {
          width:100%;
          border:none !important;
          border-radius:999px !important;
          padding:14px 24px !important;
          background:linear-gradient(135deg,var(--ff-red),var(--ff-dark-red),var(--ff-orange)) !important;
          color:white !important;
          font-weight:1000 !important;
        }

        @keyframes floatFood {
          0%,100% { transform:translateY(0) rotate(-5deg); }
          50% { transform:translateY(-18px) rotate(5deg); }
        }

        @keyframes successPop {
          0% { transform:scale(.7); opacity:0; }
          100% { transform:scale(1); opacity:1; }
        }

        @media(max-width:991px) {
          .ff-hero {
            text-align:center;
          }

          .ff-hero-content {
            margin:auto;
          }

          .ff-hero-buttons,
          .ff-stats {
            justify-content:center;
          }

          .ff-floating-food {
            display:none;
          }

          .ff-category-card {
            height:360px;
          }

          .ff-cart-list {
            grid-template-columns:1fr;
          }

          .ff-bill {
            max-width:100%;
          }
        }

        @media(max-width:768px) {
          .ff-hero {
            min-height:auto;
            padding:118px 0 74px;
            background-position:center;
          }

          .ff-title {
            letter-spacing:-2px;
          }

          .ff-text {
            font-size:16px;
          }

          .ff-section {
            padding:74px 0;
          }

          .ff-category-card {
            height:315px;
            border-radius:28px;
          }

          .ff-food-img {
            height:220px;
          }

          .ff-cart-panel,
          .ff-delivery {
            padding:28px 20px;
            border-radius:28px;
          }

          .ff-cart-panel {
            scroll-margin-top:160px;
          }

          .ff-cart-item {
            grid-template-columns:62px 1fr;
          }

          .ff-cart-price {
            text-align:left;
          }

          .ff-btn {
            width:100%;
          }

          .ff-app-btn {
            width:100%;
          }
        }
      `}</style>

      <main className="ff-home">
        <section className="ff-hero">
          <div className="ff-floating-food">
            <span>🍜</span>
            <span>🍛</span>
            <span>🥟</span>
          </div>

          <Container>
            <div className="ff-hero-content">
              <div className="ff-eyebrow">
                <i className="bi bi-fire"></i>
                Chinese • Desi • Burgers • 100% Halal
              </div>

              <h1 className="ff-title">
                Crazy Flavours
                <span>One Place.</span>
              </h1>

              <p className="ff-text">
                From spicy Chinese noodles and steamy momos to chicken karahi,
                loaded fries, hot wings and juicy burgers — every bite is made
                fresh, bold and full of restaurant-style energy.
              </p>

              <div className="ff-hero-buttons">
                <Button className="ff-btn ff-btn-primary" onClick={handleCheckout}>
                  <i className="bi bi-bag-heart-fill me-2"></i>
                  Book Order
                </Button>

                <Button className="ff-btn ff-btn-outline" onClick={() => navigate("/menu")}>
                  View Full Menu
                </Button>
              </div>

              <div className="ff-stats">
                <div className="ff-stat">
                  <h3>4.8★</h3>
                  <p>Customer Rating</p>
                </div>

                <div className="ff-stat">
                  <h3>25+</h3>
                  <p>Food Items</p>
                </div>

                <div className="ff-stat">
                  <h3>20K+</h3>
                  <p>Orders Served</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="ff-section ff-menu-bg">
          <Container>
            <div className="ff-section-title">
              <h2>Explore The Madness</h2>
              <p>
                A bold restaurant menu packed with Chinese street food, desi
                classics, spicy sauces and proper fresh comfort food.
              </p>
              <div className="ff-line"></div>
            </div>

            <Row className="g-4">
              {categories.map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="ff-category-card" onClick={() => navigate("/menu")}>
                    <img src={item.img} alt={item.title} />

                    <div className="ff-category-content">
                      <div className="ff-category-icon">
                        <i className={item.icon}></i>
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="ff-section ff-special-bg">
          <Container>
            <div className="ff-section-title">
              <h2>Featured Specials</h2>
              <p>
                Chinese, desi and fast food favourites selected for real cravings.
              </p>
              <div className="ff-line"></div>
            </div>

            <Row className="g-4">
              {featured.map((item) => (
                <Col lg={4} md={6} key={item.id}>
                  <Card className="ff-food-card">
                    <div className="ff-food-img">
                      <img src={item.img} alt={item.name} />
                      <Badge className="ff-badge">{item.tag}</Badge>
                    </div>

                    <div className="ff-food-content">
                      <h3>{item.name}</h3>
                      <p>
                        Freshly prepared with bold spices, signature sauces and
                        proper restaurant-style flavour.
                      </p>

                      <div className="ff-price-row">
                        <div className="ff-price">£{item.price.toFixed(2)}</div>

                        <Button className="ff-add" onClick={() => addToCart(item)}>
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

        <section className="ff-section">
          <Container>
            <div className="ff-cart-panel" ref={cartRef}>
              <div className="ff-cart-head">
                <h3>Your Cart</h3>
                <div className="ff-cart-count">{totalItems}</div>
              </div>

              {cart.length === 0 ? (
                <div className="ff-empty-cart">
                  <i className="bi bi-bag-heart"></i>
                  <strong>No items added yet</strong>
                  <p className="mb-0 mt-2">
                    Tap the plus button on any featured meal to add it here.
                  </p>
                </div>
              ) : (
                <>
                  <div className="ff-cart-list">
                    {cart.map((item) => (
                      <div className="ff-cart-item" key={item.id}>
                        <img src={item.img} alt={item.name} className="ff-cart-img" />

                        <div>
                          <div className="ff-cart-name">{item.name}</div>
                          <div className="ff-cart-small">£{item.price.toFixed(2)} each</div>

                          <div className="ff-cart-controls">
                            <Button className="ff-qty-btn" onClick={() => decreaseQty(item.id)}>
                              <i className="bi bi-dash"></i>
                            </Button>

                            <span className="ff-qty">{item.quantity}</span>

                            <Button className="ff-qty-btn" onClick={() => increaseQty(item.id)}>
                              <i className="bi bi-plus"></i>
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Button className="ff-remove" onClick={() => removeItem(item.id)}>
                            <i className="bi bi-x-circle"></i>
                          </Button>

                          <div className="ff-cart-price">
                            £{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="ff-bill">
                    <div className="ff-bill-row">
                      <span>Subtotal</span>
                      <strong>£{subtotal.toFixed(2)}</strong>
                    </div>

                    <div className="ff-bill-row">
                      <span>Delivery Fee</span>
                      <strong>£{deliveryFee.toFixed(2)}</strong>
                    </div>

                    <div className="ff-bill-row total">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>

                    <Button className="ff-checkout" onClick={handleCheckout}>
                      <i className="bi bi-credit-card-fill me-2"></i>
                      Checkout / Book Order
                    </Button>

                    <Button className="ff-clear" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Container>
        </section>

        <section className="ff-section">
          <Container>
            <div className="ff-delivery">
              <h2>
                Fresh Food.
                <span> Fast Delivery.</span>
              </h2>

              <p>
                Order Chinese, desi food, burgers, wings and loaded fries from
                one place. Hot meals, fresh prep and flavour that hits different.
              </p>

              <div className="ff-apps">
                <Button className="ff-app-btn">
                  <i className="bi bi-apple"></i>
                  App Store
                </Button>

                <Button className="ff-app-btn">
                  <i className="bi bi-google-play"></i>
                  Google Play
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Modal
        show={showSuccessPopup}
        onHide={closeSuccessPopup}
        centered
        className="ff-success-modal"
      >
        <div className="ff-success-box">
          <div className="ff-success-icon">
            <i className="bi bi-check2-circle"></i>
          </div>

          <h3>Order Booked Successfully!</h3>

          <p>
            Thank you for your order. Your food request has been received and
            our team will prepare it fresh for you.
          </p>

          <div className="ff-success-total">
            <i className="bi bi-receipt"></i>
            Total: £{confirmedTotal.toFixed(2)}
          </div>

          <Button className="ff-success-close" onClick={closeSuccessPopup}>
            Continue Ordering
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Home;