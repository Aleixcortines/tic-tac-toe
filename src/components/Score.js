import "./Score.css";
const Score = ({ scoreX, scoreO }) => {
  return (
    <div className="score-board">
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
  );
};

export default Score;
