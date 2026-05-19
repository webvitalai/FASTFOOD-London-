import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Whatsapp, TelephoneFill, ArrowUpShort, } from "react-bootstrap-icons";

export default function MainLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <a href="tel:+442076800696" className="phone-float" aria-label="Call Us">
        <TelephoneFill />
      </a>

      <a
        href="https://wa.me/442076800696"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>
      {showScrollTop && (
  <button
    className="scroll-top-btn"
    onClick={scrollToTop}
    aria-label="Scroll To Top"
  >
    <ArrowUpShort />
  </button>
)}

      <style>{`
      .scroll-top-btn{
  position:fixed;
  right:50px;
  bottom:170px;
  width:58px;
  height:58px;
  border:none;
  border-radius:50%;
  background:linear-gradient(135deg,#2563eb,#06b6d4);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  z-index:999999;
  box-shadow:0 12px 30px rgba(37,99,235,.35);
  animation:scrollFade .35s ease;
  transition:all .3s ease;
}

.scroll-top-btn:hover{
  transform:translateY(-4px) scale(1.08);
}

.scroll-top-btn svg{
  width:34px;
  height:34px;
}

@keyframes scrollFade{
  from{
    opacity:0;
    transform:translateY(20px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@media (max-width:575px){
  .scroll-top-btn{
    right:8px;
    bottom:148px;
    width:52px;
    height:52px;
  }

  .scroll-top-btn svg{
    width:30px;
    height:30px;
  }
}
        .phone-float,
        .whatsapp-float{
          position: fixed;
          right: 50px;
          width: 58px;
          height: 58px;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 999999;
          transition: all 0.3s ease;
        }

        .phone-float{
          bottom: 105px;
          background: linear-gradient(135deg,#7c3aed,#ec4899);
          box-shadow: 0 12px 30px rgba(124,58,237,0.35);
        }

        .whatsapp-float{
          bottom: 40px;
          background: #25D366;
          box-shadow: 0 12px 30px rgba(37,211,102,0.35);
          animation: whatsappPulse 2s infinite;
        }

        .phone-float:hover,
        .whatsapp-float:hover{
          transform: scale(1.08);
          color: #fff;
        }

        .phone-float svg,
        .whatsapp-float svg{
          width: 30px;
          height: 30px;
        }

        @keyframes whatsappPulse{
          0%{ box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70%{ box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        @media (max-width: 575px){
          .phone-float,
          .whatsapp-float{
            right: 8px;
            width: 52px;
            height: 52px;
          }

          .phone-float{
            bottom: 82px;
          }

          .whatsapp-float{
            bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}