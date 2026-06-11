import React, { useMemo, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";

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
      title: "Wild Fire Deal",
      tag: "Best Value",
      price: 12.99,
      old: 19.5,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=90",
      items: ["2x Smash Burgers", "Loaded Fries", "2x Soft Drinks"],
    },
    {
      id: 2,
      title: "Happiness Combo",
      tag: "Limited",
      price: 16.99,
      old: 24.0,
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1200&q=90",
      items: ["2x Signature Meals", "6pc Hot Wings", "2x Milkshakes"],
    },
    {
      id: 3,
      title: "Family Feast Box",
      tag: "Mega Deal",
      price: 28.99,
      old: 40.0,
      img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=1200&q=90",
      items: ["4x Burgers", "Large Fries", "Onion Rings", "4x Drinks"],
    },
  ];

  const scrollToCart = () => {
    setTimeout(() => {
      cartRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
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

        .hb-deals {
          min-height: 100vh;
          padding: 130px 0 90px;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.2), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,191,0,.18), transparent 30%),
            linear-gradient(160deg, #fff7ed, #ffe3d3 48%, #fff7ed);
          color: var(--hb-black);
          font-family: "Inter", sans-serif;
        }

        .hb-floating-fire {
          position: absolute;
          top: 80px;
          right: -60px;
          font-size: 260px;
          color: rgba(229,9,20,.11);
          animation: floatFire 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-heading {
          text-align: center;
          margin-bottom: 70px;
        }

        .hb-eyebrow {
          color: var(--hb-red);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 16px;
        }

        .hb-heading h2 {
          font-size: clamp(48px,7vw,92px);
          line-height: .9;
          font-weight: 950;
          margin-bottom: 18px;
          letter-spacing: -2px;
        }

        .hb-heading h2 span {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-heading p {
          color: var(--hb-muted);
          max-width: 720px;
          margin: auto;
          line-height: 1.9;
          font-size: 18px;
          font-weight: 600;
        }

        .hb-line {
          width: 100px;
          height: 5px;
          border-radius: 999px;
          margin: 22px auto 0;
          background: linear-gradient(90deg, var(--hb-red), var(--hb-yellow));
        }

        .hb-deal-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(229,9,20,.18);
          height: 100%;
          transition: .45s ease;
          box-shadow: 0 28px 75px rgba(18,7,7,.12);
        }

        .hb-deal-card:hover {
          transform: translateY(-14px);
          border-color: rgba(229,9,20,.36);
          box-shadow: 0 40px 100px rgba(229,9,20,.18);
        }

        .hb-img-wrap {
          height: 280px;
          position: relative;
          overflow: hidden;
        }

        .hb-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 1s ease;
          filter: brightness(1.06) contrast(1.08) saturate(1.12);
        }

        .hb-deal-card:hover img {
          transform: scale(1.12);
        }

        .hb-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,7,7,.76), rgba(229,9,20,.16), transparent 70%);
        }

        .hb-badge {
          position: absolute !important;
          top: 20px;
          left: 20px;
          z-index: 2;
          border-radius: 999px !important;
          padding: 10px 16px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-yellow)) !important;
          color: white !important;
          font-weight: 950 !important;
        }

        .hb-content {
          padding: 30px;
        }

        .hb-content h3 {
          font-size: 34px;
          font-weight: 950;
          margin-bottom: 18px;
        }

        .hb-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
        }

        .hb-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--hb-muted);
          margin-bottom: 14px;
          font-size: 15px;
          font-weight: 600;
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
          margin-bottom: 26px;
        }

        .hb-price {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hb-new {
          color: var(--hb-red);
          font-size: 44px;
          line-height: 1;
          font-weight: 950;
        }

        .hb-old {
          color: #9b8b80;
          text-decoration: line-through;
          margin-bottom: 8px;
          font-size: 16px;
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
          padding: 16px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          font-weight: 950 !important;
          font-size: 16px !important;
          box-shadow: 0 18px 45px rgba(229,9,20,.26);
          transition: .35s ease;
        }

        .hb-claim:hover {
          transform: translateY(-5px) scale(1.03);
        }

        .hb-cart-panel {
          margin-top: 70px;
          border-radius: 36px;
          padding: 28px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.97), rgba(255,227,211,.9));
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 35px 95px rgba(18,7,7,.13);
          scroll-margin-top: 100px;
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
          border: 1px solid rgba(229,9,20,.12);
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

        .hb-checkout {
          width: 100%;
          margin-top: 18px;
          border: none !important;
          border-radius: 999px !important;
          padding: 15px !important;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
          color: white !important;
          font-weight: 950 !important;
        }

        .hb-clear {
          width: 100%;
          margin-top: 12px;
          border-radius: 999px !important;
          padding: 12px !important;
          border: 1px solid rgba(229,9,20,.2) !important;
          background: white !important;
          color: var(--hb-black) !important;
          font-weight: 850 !important;
        }

        .hb-app {
          margin-top: 95px;
          padding: 80px 55px;
          border-radius: 40px;
          text-align: center;
          background:
            linear-gradient(rgba(143,0,8,.84), rgba(18,7,7,.86)),
            url("https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1700&q=95") center/cover;
          color: white;
          box-shadow: 0 35px 100px rgba(18,7,7,.22);
        }

        .hb-app h2 {
          font-size: clamp(42px,6vw,78px);
          line-height: .92;
          font-weight: 950;
          margin-bottom: 20px;
        }

        .hb-app h2 span {
          color: var(--hb-yellow);
        }

        .hb-app p {
          color: rgba(255,255,255,.76);
          max-width: 760px;
          margin: auto;
          line-height: 1.9;
          font-size: 18px;
        }

        .hb-discount {
          display: inline-flex;
          margin-top: 30px;
          padding: 14px 24px;
          border-radius: 999px;
          background: rgba(255,191,0,.13);
          border: 1px solid rgba(255,191,0,.28);
          color: var(--hb-yellow);
          font-weight: 950;
        }

        .hb-store-buttons {
          margin-top: 38px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        .hb-store {
          min-width: 240px;
          height: 68px;
          border-radius: 22px !important;
          border: 1px solid rgba(255,191,0,.28) !important;
          background: rgba(255,255,255,.1) !important;
          color: white !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-weight: 950 !important;
          transition: .35s ease;
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
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
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
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark)) !important;
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
          .hb-cart-list {
            grid-template-columns: 1fr;
          }

          .hb-bill {
            max-width: 100%;
          }
        }

        @media(max-width: 768px) {
          .hb-deals {
            padding: 110px 0 70px;
          }

          .hb-img-wrap {
            height: 230px;
          }

          .hb-content {
            padding: 24px;
          }

          .hb-app,
          .hb-cart-panel {
            padding: 28px 20px;
          }

          .hb-store-buttons {
            flex-direction: column;
          }

          .hb-store {
            width: 100%;
          }

          .hb-heading h2 {
            line-height: 1;
          }

          .hb-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <main className="hb-deals">
        <i className="bi bi-fire hb-floating-fire"></i>

        <Container>
          <div className="hb-heading">
            <div className="hb-eyebrow">Hot Deals • Bigger Cravings</div>

            <h2>
              Today’s <span>Special Deals</span>
            </h2>

            <p>
              Freshly crafted combos loaded with bold flavours, crispy bites and
              unbeatable prices.
            </p>

            <div className="hb-line"></div>
          </div>

          <Row className="g-4">
            {deals.map((deal) => (
              <Col lg={4} md={6} key={deal.id}>
                <div className="hb-deal-card">
                  <div className="hb-img-wrap">
                    <img src={deal.img} alt={deal.title} />
                    <Badge className="hb-badge">{deal.tag}</Badge>
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
                <i className="bi bi-bag"></i>
                <strong>No deals selected yet</strong>
                <p className="mb-0 mt-2">
                  Click “Claim This Deal” to add a deal to cart.
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
            <div className="hb-eyebrow">Fast Food App</div>

            <h2>
              Download Our <span>Mobile App</span>
            </h2>

            <p>
              Unlock exclusive discounts, loyalty rewards, weekly offers and
              lightning-fast ordering.
            </p>

            <div className="hb-discount">
              🔥 Get 50% OFF Your First Burger
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
            Thank you for your order. Our team has received your deal booking
            and will prepare it fresh for you.
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