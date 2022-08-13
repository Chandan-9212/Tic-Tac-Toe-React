import React from "react";
import "./Square.scss"
function Square(props) {
  const text = props.value;
  return (
    <button className="styles" onClick={props.onClick}>
      {text}
    </button>
  );
}
export default Square;
