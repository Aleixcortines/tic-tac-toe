import classNames from "classnames";
import "./Square.css";
const Square = ({ value, onClick, turn }) => {
  const handleClick = () => {
    if (turn !== null && value === null) {
      onClick();
    }
  };

  let squareClass = classNames({
    square: true,
    [`square--${value}`]: value !== null,
  });
  return <div className={squareClass} onClick={() => handleClick()}></div>;
};

export default Square;
