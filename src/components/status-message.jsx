function statusMessage({ winner, gameBoard }) {
  const { isONext, squares } = gameBoard;
  const nextPlayer = !isONext ? `X` : `O`;
  const noMovesLeft = squares.every((el) => el !== null);

  const statusMessage = () => {
    return winner ? (
      <>
        Winner is{" "}
        <span className={isONext ? `text-green` : `text-orange`}>{winner}</span>
      </>
    ) : noMovesLeft ? (
      <>
        Draw : <span className="text-orange">O</span> and{" "}
        <span className="text-green">X</span> Tied
      </>
    ) : (
      <>
        Next Player is{" "}
        <span className={!isONext ? `text-green` : `text-orange`}>
          {nextPlayer}
        </span>
      </>
    );
  };
  return <h2>{statusMessage()}</h2>;
}

export default statusMessage;
