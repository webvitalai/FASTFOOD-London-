import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Deals from "./components/Pages/Deals";
import OurStory from "./components/Pages/OurStory";
import FindUs from "./components/Pages/FindUs";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="menu" element={<Menu />} />
          <Route path="deals" element={<Deals />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="find-us" element={<FindUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;