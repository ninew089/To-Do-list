import React from "react";

export default function numberFill({ text, onDelete }) {
  return (
    <div style={{ display: "flex", margin: 10 }}>
      <div
        style={{
          fontSize: 18,
          background: "white",
          color: "black",
          borderRadius: 10,
          width: 100,
          height: 40,
          margin: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text}
      </div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}
