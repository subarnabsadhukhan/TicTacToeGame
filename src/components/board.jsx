import PropTypes from "prop-types";
import Square from "./square";
function Board({ squares, handleSquareClick, winningSquares }) {
  const renderSquare = (pos) => {
    return (
      <Square
        winningSquares={winningSquares}
        value={squares[pos]}
        position={pos}
        onClick={() => handleSquareClick(pos)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
Board.propTypes = {
  squares: PropTypes.array,
  handleSquareClick: PropTypes.func.isRequired,
  winningSquares: PropTypes.array,
};
export default Board;
