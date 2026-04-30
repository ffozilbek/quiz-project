const Card = ({ data, count, isFlipped }) => {
  return (
    <div
      className={`${isFlipped ? "rotate-y-180" : ""} relative transform-3d transition duration-500 ease-in mb-8`}
    >
      <div className="card front">{data[count].question}</div>
      <div className="card back rotate-y-180">{data[count].answer}</div>
    </div>
  );
};

export default Card;
