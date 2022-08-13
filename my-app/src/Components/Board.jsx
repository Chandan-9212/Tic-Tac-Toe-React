import React from "react";
import Square from "./Square";
import "./Board.scss";

function Board(props) {
  const { squares, onClick } = props;
  return (
    <div className="board_style">
      {squares.map((squares, i) => {
        return <Square value={squares} key={i} onClick={() => onClick(i)} />;
      })}
    </div>
  );
}

export default Board;
