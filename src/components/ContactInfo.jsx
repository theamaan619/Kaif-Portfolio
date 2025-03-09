import React from "react";

function ContactInfo({ icon, text, type, link }) {
  return (
    <div className="flex items-center space-x-3 text-gray-700">
      <div className="text-indigo-600">{icon}</div>
      {type === "link" ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {text}
        </a>
      ) : type === "email" ? (
        <a href={`mailto:${link}`} className="hover:underline">
          {text}
        </a>
      ) : type === "phone" ? (
        <a href={`tel:${link}`} className="hover:underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

export default ContactInfo;
