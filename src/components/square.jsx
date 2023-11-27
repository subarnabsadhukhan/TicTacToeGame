import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
  const renderColor = (value) => {
    return value === `X` ? (
      <span className="text-green">X</span>
    ) : value === `O` ? (
      <span className="text-orange">O</span>
    ) : null;
  };
  return (
    <button type="button" className="square" onClick={onClick}>
      {renderColor(value)}
    </button>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Square;
