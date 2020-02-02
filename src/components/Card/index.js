import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "320px",
  height: "460px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  border: "1rem solid white"
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
