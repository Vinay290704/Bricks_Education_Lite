import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Leaderboard from "./pages/Leaderboard";
import BootCamp from "./pages/BootCamp";
import Header2 from "./components/common/Header2";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <Router>
      <DataProvider>
        <div className="min-h-screen bg-gray-50">
          <Header2 />
          <Routes>
            <Route path="/" element={<BootCamp />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
          <Footer/>
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
