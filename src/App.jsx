import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Header from "./components/common/Header";

const App = () => {
  return (
    <Router>
      <DataProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
