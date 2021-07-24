import React from "react";

const Cards = props => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      {props.children}
    </div>
  );
};

export default Cards;
