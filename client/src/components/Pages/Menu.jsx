import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Badge, Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Menu = () => {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const cartRef = useRef(null);

  const categories = [
    { name: "All", icon: "bi bi-grid-fill" },
    { name: "Fast Food", icon: "bi bi-lightning-charge-fill" },
    { name: "Chinese", icon: "bi bi-fire" },
    { name: "Desi", icon: "bi bi-cloud-steam-fill" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Inferno Smash Burger",
      category: "Fast Food",
      price: 8.99,
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90",
      desc: "Double smashed beef, melted cheese, crispy onions and signature fire sauce.",
    },
    {
      id: 2,
      name: "Loaded Cheesy Fries",
      category: "Fast Food",
      price: 5.99,
      tag: "Loaded",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=90",
      desc: "Golden fries topped with cheese sauce, spicy mayo and crispy chicken bites.",
    },
    {
      id: 3,
      name: "Fire Pepperoni Pizza",
      category: "Fast Food",
      price: 13.99,
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=90",
      desc: "Stone-baked pizza loaded with pepperoni, mozzarella and jalapeños.",
    },
    {
      id: 4,
      name: "Crispy Chicken Wrap",
      category: "Fast Food",
      price: 6.99,
      tag: "Crispy",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1200&q=90",
      desc: "Crunchy chicken strips wrapped with lettuce, cheese and creamy garlic sauce.",
    },
    {
      id: 5,
      name: "Chicken Chow Mein",
      category: "Chinese",
      price: 9.49,
      tag: "Popular",
      img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1200&q=90",
      desc: "Stir-fried noodles with chicken, vegetables and rich oriental seasoning.",
    },
    {
      id: 6,
      name: "Kung Pao Chicken",
      category: "Chinese",
      price: 10.99,
      tag: "Spicy",
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1200&q=90",
      desc: "Tender chicken tossed with chilli, peppers, peanuts and sweet-spicy sauce.",
    },
    {
      id: 7,
      name: "Egg Fried Rice",
      category: "Chinese",
      price: 6.99,
      tag: "Classic",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1200&q=90",
      desc: "Fluffy fried rice with egg, spring onion and perfectly balanced seasoning.",
    },
    {
      id: 8,
      name: "Chicken Manchurian",
      category: "Chinese",
      price: 9.99,
      tag: "Saucy",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=90",
      desc: "Crispy chicken balls covered in bold sweet and tangy Manchurian gravy.",
    },
    {
      id: 9,
      name: "Chicken Biryani",
      category: "Desi",
      price: 8.99,
      tag: "Signature",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1200&q=90",
      desc: "Aromatic basmati rice cooked with tender chicken and traditional spices.",
    },
    {
      id: 10,
      name: "Butter Chicken",
      category: "Desi",
      price: 11.49,
      tag: "Creamy",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200&q=90",
      desc: "Rich creamy curry with smoky chicken pieces and buttery desi flavour.",
    },
    {
      id: 11,
      name: "Seekh Kebab Roll",
      category: "Desi",
      price: 6.49,
      tag: "Street Style",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1200&q=90",
      desc: "Juicy seekh kebab wrapped with chutney, onions and soft paratha.",
    },
    {
      id: 12,
      name: "Lahori Karahi",
      category: "Desi",
      price: 12.99,
      tag: "Desi Hit",
      img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=1200&q=90",
      desc: "Traditional karahi cooked with tomatoes, green chillies and fresh ginger.",
    },
  ];

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

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
    setCart([]);
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

        .hb-menu {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(255, 191, 0, .35), transparent 24%),
            radial-gradient(circle at 90% 8%, rgba(229, 9, 20, .22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(255, 90, 0, .22), transparent 34%),
            linear-gradient(145deg, #fff8ed 0%, #ffe3c2 48%, #fff1dc 100%);
          color: var(--hb-black);
          overflow: hidden;
          padding: 120px 0 80px;
          position: relative;
          font-family: "Inter", sans-serif;
        }

        .hb-menu::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.34) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.34) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 80%);
          pointer-events: none;
        }

        .hb-floating-icon {
          position: absolute;
          right: -35px;
          top: 90px;
          font-size: 210px;
          color: rgba(229,9,20,.11);
          animation: floatFire 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-floating-icon-2 {
          position: absolute;
          left: -28px;
          bottom: 150px;
          font-size: 170px;
          color: rgba(255,90,0,.1);
          animation: floatFire 6s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .hb-heading {
          text-align: center;
          margin-bottom: 36px;
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
          font-weight: 950;
          line-height: .9;
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
          margin: 28px 0 42px;
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

        .hb-filters {
          position: sticky;
          top: 78px;
          z-index: 5;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 42px;
          padding: 12px;
          border-radius: 26px;
          background: rgba(255,255,255,.62);
          border: 1px solid rgba(229,9,20,.12);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 50px rgba(18,7,7,.08);
        }

        .hb-filter-btn {
          border-radius: 999px !important;
          padding: 13px 20px !important;
          background: white !important;
          color: var(--hb-black) !important;
          border: 1px solid rgba(229,9,20,.18) !important;
          font-weight: 950 !important;
          transition: .32s ease;
          box-shadow: 0 10px 26px rgba(18,7,7,.05);
          display: inline-flex !important;
          align-items: center;
          gap: 9px;
        }

        .hb-filter-btn.active,
        .hb-filter-btn:hover {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(229,9,20,.25);
        }

        .hb-card {
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(229,9,20,.14);
          transition: .38s ease;
          box-shadow: 0 24px 65px rgba(18,7,7,.1);
          position: relative;
        }

        .hb-card:hover {
          transform: translateY(-10px);
          border-color: rgba(229,9,20,.38);
          box-shadow: 0 30px 76px rgba(229,9,20,.18);
        }

        .hb-card-img {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .hb-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 1s ease;
          filter: brightness(1.05) contrast(1.08) saturate(1.16);
        }

        .hb-card:hover img {
          transform: scale(1.12) rotate(1deg);
        }

        .hb-card-img::after {
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
          background: linear-gradient(135deg, var(--hb-yellow), var(--hb-orange), var(--hb-red)) !important;
          color: white !important;
          font-weight: 950 !important;
          padding: 10px 14px !important;
          box-shadow: 0 12px 30px rgba(18,7,7,.2);
        }

        .hb-content {
          padding: 26px;
        }

        .hb-category {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--hb-red);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .hb-content h3 {
          font-size: 28px;
          font-weight: 950;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .hb-desc {
          color: var(--hb-muted);
          line-height: 1.75;
          margin-bottom: 22px;
          font-weight: 600;
        }

        .hb-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .hb-price {
          color: var(--hb-red);
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .hb-add {
          min-width: 54px;
          height: 54px;
          border-radius: 50% !important;
          border: none !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange)) !important;
          color: white !important;
          font-size: 20px !important;
          transition: .32s ease;
          box-shadow: 0 14px 32px rgba(229,9,20,.28);
        }

        .hb-add:hover {
          transform: rotate(90deg) scale(1.08);
        }

        .hb-cart-panel {
          position: sticky;
          top: 155px;
          border-radius: 34px;
          padding: 24px;
          background:
            radial-gradient(circle at top right, rgba(255,191,0,.24), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.97), rgba(255,235,210,.94));
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 30px 80px rgba(18,7,7,.13);
          scroll-margin-top: 115px;
        }

        .hb-cart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .hb-cart-head h3 {
          margin: 0;
          font-size: 27px;
          font-weight: 950;
        }

        .hb-cart-count {
          min-width: 40px;
          height: 40px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-orange));
          color: white;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(229,9,20,.26);
        }

        .hb-empty-cart {
          padding: 34px 18px;
          text-align: center;
          border-radius: 24px;
          border: 1px dashed rgba(229,9,20,.3);
          color: var(--hb-muted);
          background: rgba(255,255,255,.55);
        }

        .hb-empty-cart i {
          display: block;
          color: var(--hb-red);
          font-size: 42px;
          margin-bottom: 12px;
        }

        .hb-cart-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-height: 390px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .hb-cart-list::-webkit-scrollbar {
          width: 6px;
        }

        .hb-cart-list::-webkit-scrollbar-thumb {
          background: rgba(229,9,20,.35);
          border-radius: 999px;
        }

        .hb-cart-item {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 12px;
          border-radius: 22px;
          background: #fff8f1;
          border: 1px solid rgba(229,9,20,.12);
        }

        .hb-cart-img {
          width: 56px;
          height: 56px;
          border-radius: 16px;
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
          margin-top: 10px;
        }

        .hb-bill {
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(229,9,20,.16);
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
          font-size: 22px;
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

        .hb-cta {
          margin-top: 80px;
          border-radius: 38px;
          padding: 64px 42px;
          text-align: center;
          background:
            linear-gradient(rgba(143,0,8,.82), rgba(18,7,7,.88)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover;
          color: white;
          box-shadow: 0 35px 100px rgba(18,7,7,.24);
          position: relative;
          overflow: hidden;
        }

        .hb-cta::after {
          content: "";
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: rgba(255,191,0,.22);
          right: -60px;
          top: -60px;
        }

        .hb-cta h2 {
          position: relative;
          z-index: 2;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 950;
          line-height: .96;
          margin-bottom: 18px;
        }

        .hb-cta h2 span {
          color: var(--hb-yellow);
        }

        .hb-cta p {
          position: relative;
          z-index: 2;
          color: rgba(255,255,255,.78);
          max-width: 760px;
          margin: auto;
          line-height: 1.85;
          font-size: 18px;
          font-weight: 600;
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
          .hb-menu {
            padding: 105px 0 70px;
          }

          .hb-filters {
            position: relative;
            top: auto;
          }

          .hb-cart-panel {
            position: relative;
            top: auto;
            margin-top: 30px;
          }
        }

        @media(max-width: 768px) {
          .hb-menu {
            padding: 92px 0 58px;
          }

          .hb-heading {
            margin-bottom: 25px;
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
            margin-bottom: 28px;
          }

          .hb-quick-pill {
            flex: 0 0 auto;
          }

          .hb-filters {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding: 10px;
            border-radius: 22px;
            margin-bottom: 28px;
          }

          .hb-filter-btn {
            flex: 0 0 auto;
            padding: 12px 16px !important;
            font-size: 14px !important;
          }

          .hb-card {
            border-radius: 26px;
          }

          .hb-card-img {
            height: 215px;
          }

          .hb-content {
            padding: 22px;
          }

          .hb-content h3 {
            font-size: 24px;
          }

          .hb-desc {
            font-size: 14px;
            line-height: 1.65;
          }

          .hb-price {
            font-size: 28px;
          }

          .hb-add {
            min-width: 50px;
            height: 50px;
          }

          .hb-cart-panel {
            border-radius: 28px;
            padding: 20px;
          }

          .hb-cart-item {
            grid-template-columns: 52px 1fr;
          }

          .hb-cart-price {
            text-align: left;
          }

          .hb-cart-item > div:last-child {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .hb-cta {
            margin-top: 55px;
            padding: 46px 22px;
            border-radius: 28px;
          }

          .hb-floating-icon {
            font-size: 130px;
            right: -42px;
            top: 70px;
          }

          .hb-floating-icon-2 {
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

          .hb-card-img {
            height: 200px;
          }

          .hb-cart-head h3 {
            font-size: 24px;
          }
        }
      `}</style>

      <main className="hb-menu">
        <i className="bi bi-fire hb-floating-icon"></i>
        <i className="bi bi-cloud-steam-fill hb-floating-icon-2"></i>

        <Container>
          <div className="hb-heading">
            <div className="hb-eyebrow">
              <i className="bi bi-stars"></i>
              Fast Food • Chinese • Desi
            </div>

            <h2>
              Crazy <span>Food Menu</span>
            </h2>

            <p>
              Burgers, pizzas, noodles, fried rice, biryani, karahi and spicy
              street-style favourites — all in one bold, modern food menu.
            </p>
          </div>

          <div className="hb-quick-strip">
            <span className="hb-quick-pill">
              <i className="bi bi-lightning-charge-fill"></i> Fresh & Hot
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-bag-check-fill"></i> Easy Cart
            </span>
            <span className="hb-quick-pill">
              <i className="bi bi-truck"></i> Delivery Ready
            </span>
          </div>

          <div className="hb-filters">
            {categories.map((cat) => (
              <Button
                key={cat.name}
                className={`hb-filter-btn ${
                  active === cat.name ? "active" : ""
                }`}
                onClick={() => setActive(cat.name)}
              >
                <i className={cat.icon}></i>
                {cat.name}
              </Button>
            ))}
          </div>

          <Row className="g-4">
            <Col lg={8}>
              <Row className="g-4">
                {filtered.map((item) => (
                  <Col xl={6} md={6} key={item.id}>
                    <div className="hb-card">
                      <div className="hb-card-img">
                        <img src={item.img} alt={item.name} />
                        <Badge className="hb-badge">{item.tag}</Badge>
                      </div>

                      <div className="hb-content">
                        <div className="hb-category">
                          <i
                            className={
                              item.category === "Desi"
                                ? "bi bi-cloud-steam-fill"
                                : item.category === "Chinese"
                                ? "bi bi-fire"
                                : "bi bi-lightning-charge-fill"
                            }
                          ></i>
                          {item.category}
                        </div>

                        <h3>{item.name}</h3>
                        <p className="hb-desc">{item.desc}</p>

                        <div className="hb-bottom">
                          <div className="hb-price">
                            £{item.price.toFixed(2)}
                          </div>

                          <Button
                            className="hb-add"
                            onClick={() => addToCart(item)}
                            aria-label={`Add ${item.name} to cart`}
                          >
                            <i className="bi bi-plus-lg"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={4}>
              <div className="hb-cart-panel" ref={cartRef}>
                <div className="hb-cart-head">
                  <h3>Your Cart</h3>
                  <div className="hb-cart-count">{totalItems}</div>
                </div>

                {cart.length === 0 ? (
                  <div className="hb-empty-cart">
                    <i className="bi bi-bag-heart-fill"></i>
                    <strong>No items added yet</strong>
                    <p className="mb-0 mt-2">
                      Tap the plus button and build your perfect order.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="hb-cart-list">
                      {cart.map((item) => (
                        <div className="hb-cart-item" key={item.id}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="hb-cart-img"
                          />

                          <div>
                            <div className="hb-cart-name">{item.name}</div>
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
                        Checkout / Book Order
                      </Button>

                      <Button className="hb-clear" onClick={clearCart}>
                        Clear Cart
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>

          <div className="hb-cta">
            <h2>
              Hungry Already?
              <span> Build Your Box.</span>
            </h2>

            <p>
              Pick from fast food, Chinese and desi favourites. Add items to the
              cart and check your total instantly.
            </p>
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

          <h3>Order Booked Successfully!</h3>

          <p>
            Thank you for your order. Your meal request has been received and
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
            Continue Ordering
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Menu;