import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-red-800 bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Travel Policy
          </h1>
          <p className="text-lg md:text-xl">
            Structured, efficient, and research-focused travel planning.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-red-700 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg leading-relaxed">
            Our travel policy for research students and associates ensures a
            structured process for approvals and financial support, fostering
            efficiency and alignment with academic and research objectives.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Travel Policy"
            className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Achievements & History */}
      <div className="bg-gray-100 py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Policy Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Travel Request Form",
              description:
                "Submit detailed forms including purpose, destination, budget, and supporting documentation.",
              icon: "📄",
            },
            {
              title: "Approval Process",
              description:
                "Supervisor, department head, and Office of Research must approve for major travels.",
              icon: "✔️",
            },
            {
              title: "Financial Support",
              description:
                "Eligibility depends on travel relevance, available funds, and research alignment.",
              icon: "💰",
            },
            {
              title: "Documentation",
              description:
                "Attach conference invitations or research collaboration letters for approval.",
              icon: "📜",
            },
            {
              title: "International Travel",
              description:
                "Managed through the Office of Research for additional oversight and funding.",
              icon: "✈️",
            },
            {
              title: "Funding Sources",
              description:
                "Includes department funds, institutional grants, or scholarships.",
              icon: "🏛️",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Our Policy Stands Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Efficiency",
              description: "Streamlined processes for quicker approvals.",
            },
            {
              title: "Clarity",
              description: "Clear guidelines for both students and staff.",
            },
            {
              title: "Supportive",
              description:
                "Ensures financial and logistical aid for research-related travel.",
            },
            {
              title: "Global Outlook",
              description: "Facilitates international collaborations and exchanges.",
            },
            {
              title: "Comprehensive",
              description: "Covers all aspects of academic travel management.",
            },
            {
              title: "Transparent",
              description: "Approval criteria and funding sources clearly defined.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top */}
      <div className="text-center py-6">
        
      </div>
    </div>
  );
};

export default About;