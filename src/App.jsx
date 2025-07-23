import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Leaderboard from "./pages/Leaderboard";
import BootCamp from "./pages/BootCamp";
import Header2 from "./components/common/Header2";
import Footer from "./components/common/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import RefundPolicy from "./pages/RefundPolicy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null; 
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <DataProvider>
        <div className="flex flex-col min-h-screen bg-gray-950 font-inter">
          <Header2 />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<BootCamp />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
