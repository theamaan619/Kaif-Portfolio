import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
