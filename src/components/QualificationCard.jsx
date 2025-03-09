import React from "react";
import { Award } from "lucide-react";

function QualificationCard({ year, title, organization, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Award className="w-8 h-8 text-indigo-600 mr-3" />
        <span className="text-indigo-600 font-semibold">{year}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-indigo-600 mb-3">{organization}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default QualificationCard;
