import React from "react";

function SkillCard({ skill, level }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-800">{skill}</span>
        <span className="text-indigo-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
