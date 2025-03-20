import React from "react";
import "./help.css";

const Help = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Help & Support</h2>
        <p>
          Google Gemini flash model is used for creating this chatbot.<br />
          You can ask anything from the chat system.<br/>
          Here you can find guidance on how to use the application.<br/>
          If you need further assistance, please contact support.<br/>
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Help;
