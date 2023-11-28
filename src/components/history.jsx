import PropTypes from "prop-types";
const History = function ({ history, moveTo, currentMove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={`btn-move ${currentMove === index ? `active` : ``}`}
                onClick={() => {
                  moveTo(index);
                }}
              >
                {!index ? `Go to Game start` : `Go to Move #${index}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

History.propTypes = {
  history: PropTypes.array.isRequired,
  moveTo: PropTypes.func.isRequired,
  currentMove: PropTypes.number.isRequired,
};
