import { useState } from "react";
import "./styles.scss";
import Board from "./components/board";
import Winner from "./winner";
import StatusMessage from "./components/status-message";
function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isONext, setIsONext] = useState(false);
  const winner = Winner(squares);

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) return;
    setSquares((square) => {
      return square.map((squareEl, pos) => {
        if (clickedPosition === pos) {
          return !isONext ? `X` : `O`;
        } else {
          return squareEl;
        }
      });
    });
    setIsONext((state) => !state);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} isONext={isONext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
