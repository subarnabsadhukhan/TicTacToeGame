import { useState } from "react";
import "./styles.scss";
import Board from "./components/board";
import Winner from "./winner";
import StatusMessage from "./components/status-message";
import History from "./components/history";

const NEW_GAME = { squares: new Array(9).fill(null), isONext: false };

function App() {
  const [history, setHistory] = useState([NEW_GAME]);
  const [currentMove, setCurrentMove] = useState(0);

  const gameBoard = history[currentMove];
  const { winner, winningSquares } = Winner(gameBoard.squares);
  const isTraversing = history.length === currentMove + 1 ? false : true;

  const handleSquareClick = (clickedPosition) => {
    if (gameBoard.squares[clickedPosition] || winner) return;
    setHistory((previousHistory) => {
      if (isTraversing) {
        previousHistory.splice(currentMove + 1, previousHistory.length);
      }
      const lastHistoryElement = previousHistory[previousHistory.length - 1];
      const newSquares = lastHistoryElement.squares.map((squareEl, pos) => {
        if (clickedPosition === pos) {
          return !lastHistoryElement.isONext ? `X` : `O`;
        } else {
          return squareEl;
        }
      });

      return previousHistory.concat({
        squares: newSquares,
        isONext: !lastHistoryElement.isONext,
      });
    });
    setCurrentMove((move) => move + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const startNewGame = () => {
    setCurrentMove(0);
    setHistory([NEW_GAME]);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC </span>TOE
      </h1>
      <StatusMessage winner={winner} gameBoard={gameBoard} />
      <Board
        squares={gameBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        className={`btn-reset ${winner ? `active` : ``}`}
        onClick={startNewGame}
      >
        Start New Game
      </button>
      <h3>Current Game History</h3>
      <History history={history} currentMove={currentMove} moveTo={moveTo} />
    </div>
  );
}

export default App;
