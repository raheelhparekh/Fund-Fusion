import React from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

function Dashboard() {
  const { role, user } =
    useRouteLoaderData("Applicant-Root")?.data ||
    useRouteLoaderData("Validator-Root")?.data;

  const navigate = useNavigate();

  const { userName, designation, department, institute } = user;

  // Personalized greeting message (updated for professionalism and animation)
  const greetingLine1 = `Hello, ${userName}!`;
  const greetingLine2 = `${designation} in ${department} Department, ${institute}`;

  return (
    <div className="font-sans bg-white overflow-y-scroll scroll-smooth snap-y h-screen" >
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center snap-start"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,research')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-red-600 to-red-800 opacity-80"></div>
        <div className="w-full text-center px-4 sm:px-6 md:px-8 relative z-10 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg animate-slide-in-down break-words text-center">
            {greetingLine1}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 drop-shadow-md mb-6 animate-slide-in-left">
            {greetingLine2}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-md mb-8 animate-slide-in-right">
            {role === "Applicant"
              ? "Submit and track your funding applications with ease."
              : "Review, validate, and manage applications efficiently."}
          </p>

          {role === "Applicant" && (
            <button
              onClick={() => navigate("../form")}
              className="px-3 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-white text-red-700 font-bold text-lg sm:text-base md:text-lg rounded-lg shadow-xl hover:bg-red-100 hover:scale-110 transition-all transform"
            >
              Start a New Application
            </button>
          )}
          {role === "Validator" && (
            <button
              onClick={() => navigate("../dashboard/pending")}
              className="px-3 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-white text-red-700 font-bold text-lg sm:text-base md:text-lg rounded-lg shadow-xl hover:bg-red-100 hover:scale-110 transition-all transform"
            >
              Check For New Applications
            </button>
          )}
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#features"
            className="text-white text-base sm:text-lg lg:text-xl transition-transform transform hover:scale-110"
          >
            &#8595; Scroll Down
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-12 sm:py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-white via-gray-100 to-red-50 min-h-screen snap-start"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-red-700 mb-10 sm:mb-12">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-4 hover:scale-105">
            <div className="text-5xl mb-4 text-red-700">🔍</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-red-700 text-center">
              View Your Applications
            </h3>
            <p className="text-center text-sm sm:text-base md:text-lg mb-6 text-gray-700">
              {role === "Applicant"
                ? "Manage and track the status of your funding applications. Review feedback and make necessary updates."
                : "Review and validate applications submitted by applicants. Approve or reject based on eligibility and guidelines."}
            </p>
            <button
              onClick={() =>
                navigate("../dashboard/pending")
              }
              className="px-6 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-red-700 text-white font-semibold text-lg sm:text-base md:text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-110 shadow-md"
            >
              {role === "Applicant" ? "View Status" : "Review Application"}
            </button>
          </div>

          {/* Feature 2 */}
          {role === "Validator" && (
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-4 hover:scale-105">
              <div className="text-5xl mb-4 text-red-700">📊</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-red-700 text-center">
                View Insights
              </h3>
              <p className="text-center text-sm sm:text-base md:text-lg mb-6 text-gray-700">
                Analyze and gain insights about funding and related data.
              </p>
              <button
                onClick={() => navigate("../report")}
                className="px-6 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-red-700 text-white font-semibold text-lg sm:text-base md:text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-110 shadow-md"
              >
                View Insights
              </button>
            </div>
          )}

          {/* Feature 3 */}
          {role === "Applicant" && (
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-4 hover:scale-105">
              <div className="text-5xl mb-4 text-red-700">📝</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-red-700 text-center">
                Create New Application
              </h3>
              <p className="text-center text-sm sm:text-base md:text-lg mb-6 text-gray-700">
                Start your application process to apply for funding and
                financial assistance.
              </p>
              <button
                onClick={() => navigate("../form")}
                className="px-6 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-red-700 text-white font-semibold text-lg sm:text-base md:text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-110 shadow-md"
              >
                Start Application
              </button>
            </div>
          )}

          {/* Feature 4 */}
          <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-4 hover:scale-105">
            <div className="text-5xl mb-4 text-red-700">📚</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-red-700 text-center">
              Understand the Policy
            </h3>
            <p className="text-center text-sm sm:text-base md:text-lg mb-6 text-gray-700">
              Learn about the eligibility, funding process, and guidelines for
              financial assistance.
            </p>
            <button
              onClick={() => navigate("../policy")}
              className="px-6 py-3 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-red-700 text-white font-semibold text-lg sm:text-base md:text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-110 shadow-md"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-red-700 py-1 text-white text-center snap-center">
        <p className="text-xs sm:text-sm md:text-base">
          © {new Date().getFullYear()} Travel Policy SVU. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
