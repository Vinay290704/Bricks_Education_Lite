import { School, Lock, ArrowRight, AlertCircle } from "lucide-react";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

const SchoolCodeEntry = () => {
  const getImageUrl = (imageName) => {
    try {
      const url = new URL(`../../assets/images/${imageName}`, import.meta.url)
        .href;
      return url;
    } catch (error) {
      return `https://via.placeholder.com/150x150?text=${encodeURIComponent(
        imageName
      )}`;
    }
  };
  const { schoolCode, setSchoolCode, loading, error, schools, loadData } =
    useContext(DataContext);

  const [localError, setLocalError] = useState("");

  const handleSubmit = async () => {
    if (!schoolCode.trim()) {
      setLocalError("Please enter a school code");
      return;
    }
    const validSchoolCode = schools.find(
      (school) => school.code === schoolCode.trim()
    );
    if (!validSchoolCode) {
      setLocalError("Invalid school code. Please check and try again.");
      return;
    }
    setLocalError("");
    await loadData();
  };

  const handleInputChange = (e) => {
    setSchoolCode(e.target.value);
    if (localError) setLocalError("");
    if (error) setLocalError("");
  };

  const displayError = localError || error;
  const isLoading = loading;
  const isValidating = loading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={getImageUrl("Logo.png")}
            alt="Bricks Logo"
            className="w-20 h-20 object-contain mx-auto mb-6"
          />
          <h1 className="text-4xl font-black text-gray-800 mb-2">
            Welcome to Bricks
          </h1>
          <p className="text-gray-600">
            Enter your school code to access the leaderboard
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <School className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              School Authentication
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="schoolCode"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                School Code
              </label>
              <div className="relative">
                <input
                  id="schoolCode"
                  type="text"
                  value={schoolCode}
                  onChange={handleInputChange}
                  placeholder="Enter your school code"
                  className={`w-full px-4 py-4 text-lg font-mono tracking-wider text-center border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 ${
                    displayError
                      ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 focus:ring-orange-100 bg-white"
                  }`}
                  disabled={isLoading}
                />
                {isValidating && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              {displayError && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{displayError}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || !schoolCode.trim()}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                isLoading || !schoolCode.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-xl hover:scale-105"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Validating...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Access Leaderboard
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCodeEntry;
