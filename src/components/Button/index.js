import React from "react";

const buttonStyles = {
  padding: "20px 24px",
  background: "whitesmoke",
  cursor: "pointer",
  borderRadius: 50,
  border: "none",
  outline:"none"
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
