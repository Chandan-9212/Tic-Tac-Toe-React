import React, { useState } from "react";
import Board from "./Board";
import CheckWinner from "../Helper";

function Game() {
  const parent_style={
    display: "flex",
    padding: "5%",
    flexDirection: "row"
  }
  const board_style={
    padding: "1%",
    position: "relative",
    alignContent: "center",
    justifyContent: "center",
    flex: "1",
  }
  const move_style={
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    flex: "1",
    margin: "0 auto"
  }
  const scoreBoard={
    margin: "5% auto",
    fontFamily: "kalam",
    color: "white",
    fontSize: "3rem",
  }
  const heading = {
    margin: "5% auto",
    fontFamily: "kalam",
    color: "white",
    fontSize: "6rem",
  }
  const [board, setBoard] = useState(Array(9).fill(""));
  const [XisNext, setisNext] = useState(true);
  const winner = CheckWinner(board);
  const [isDraw, setDraw] = useState(false)
  const [isStarted, setStatus] = useState(false);
  var counts = 0;

function checkDraw(){
  board.forEach(element=>{
    if(element !== ""){
      counts = counts + 1;
    }
  })
  if(counts === 8){
    setDraw(true);
  }
}

  function handleClick(i) {
      const boardCopy = [...board];
      if (winner || boardCopy[i]) {
        return;
      }
      boardCopy[i] = XisNext ? "X" : "O";
      setisNext(!XisNext);
      setBoard(boardCopy);
      setStatus(true);
      checkDraw()
  }

  function reset(){
    setBoard(Array(9).fill(""));
    setisNext(true);
    setStatus(false);
    setDraw(false);
    counts = 0;
  }

  function renderMoves() {
      if(!isStarted){
        return <button type="button" className="btn btn-outline-light" onClick={() => setBoard(Array(9).fill(""))}>Start Game</button>
      }
      else{
        return <button type="button" className="btn btn-outline-light" onClick={reset}>Restart Game</button>
      }
  }

  return (
    <div style={parent_style}>
      <div style={board_style}>
        <Board squares={board} onClick={handleClick} />
      </div>
      <div style={move_style}>
        <h1 style={heading}>tic tac toe!</h1>
        <p style={scoreBoard}>
          {isDraw ? "Draw!" :(winner ? "Winner is " + winner +"!": (XisNext ? "X" : "O") + "'s Turn!")}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
}

export default Game;
