import { useState } from "react";

const App = () => {
  const question_data = [
    {
      id: 1,
      question: "Spidermanning haqiqiy ismi kim?",
      answer: "Peter Parker",
    },
    {
      id: 2,
      question: "Batmanning haqiqiy ismi kim?",
      answer: "Bruse Wayne",
    },
    {
      id: 3,
      question: "Supermanning haqiqiy ismi kim?",
      answer: "Klark Kent",
    },
  ];

  const [data, setData] = useState(question_data);
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const increment = () => {
    if (data.length - 1 > count) setCount(count + 1);
    setIsFlipped(false);
  };

  const decrement = () => {
    if (count != 0) setCount(count - 1);
    setIsFlipped(false);
  };

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(count);

  return (
    <div className="max-w-200 mx-auto px-2">
      <div className="w-full h-100 bg-stone-500 mt-40 mb-5 overflow-y-auto flex items-center justify-center px-4 py-3">
        {isFlipped ? (
          <div>{data[count].answer}</div>
        ) : (
          <div>{data[count].question}</div>
        )}
      </div>
      {/* BUTTONS */}
      <div className="flex justify-between">
        <button
          onClick={() => decrement()}
          className={count == 0 ? "disabled" : "active"}
        >
          previous
        </button>
        <button onClick={() => onFlip()}>
          {isFlipped ? "Hide answer" : "Show answer"}
        </button>
        <button
          onClick={() => increment()}
          className={count == data.length - 1 ? "disabled" : "active"}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
