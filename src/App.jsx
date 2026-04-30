import { useState } from "react";
import db from "../public/data.json";
import ProgressBar from "./components/ui/ProgressBar";
import Card from "./components/ui/Card";

const App = () => {
  const [data, setData] = useState(db);
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

  return (
    <div className="max-w-200 mx-auto px-2">
      <div className="mt-40">
        {/* PROGRESS BAR */}
        <ProgressBar count={count} data={data} />
        {/* FLASH CARD */}
        <Card data={data} count={count} isFlipped={isFlipped} />
        {/* BUTTONS */}
        <div className="flex gap-x-5 relative top-100">
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
    </div>
  );
};

export default App;
