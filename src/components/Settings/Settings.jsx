import React from "react";
import "./Settings.css";
// import { useTheme } from "C:\\Users\\Gausar\\OneDrive\\Documents\\semester2025\\chatbot\\chat_system\\src\\context\\ThemeContext.jsx";

const Settings = ({ show, onClose, toggleTheme, theme }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Settings</h2>
        <div className="theme-toggle">
          <p>Theme:</p>
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "🔆"}
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Settings;

// import React, { useState } from "react";
// import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";

// export const Settings = () => {
//   const [isDark, setIsDark] = useState(true);

//   const systemPrefersDark = useMediaQuery(
//     {
//       query: "(prefers-color-scheme: dark)",
//     },
//     undefined,
//     (isSystemDark) => setIsDark(isSystemDark)
//   );

//   return (
//     <Toggle
//       checked={isDark}
//       onChange={({ target }) => setIsDark(target.checked)}
//       icons={{ checked: "🌙", unchecked: "🔆" }}
//       aria-label="Dark mode toggle"
//     />
//   );
// };