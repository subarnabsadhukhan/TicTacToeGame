import PropTypes from "prop-types";

const Square = ({ value, position, onClick, winningSquares }) => {
  const isWinningSquare = winningSquares?.some((el) => el == position);

  return (
    <button
      type="button"
      className={`square ${value === `X` ? `text-green` : `text-orange`} ${
        isWinningSquare ? `winning` : ``
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  winningSquares: PropTypes.array,
};
export default Square;
