import "./styles.css";
import { useMemo, useState } from "react";

export default function App() {
  // const [arr, setArr] = useState([]);
  const arr = [1, 2, 3];
  const [isOn, setIsOn] = useState(false);
  const [number, setNumber] = useState(0);
  console.log("Child Component rendered!");

  const slowFunction = (number = 0) => {
    console.log("running slowFunction Number!");
    let x = 0;
    while (x < 10000) {
      x++;
    }
    console.log("finished");
    return number * 2;
  };

  const slowFunction2 = (arr = []) => {
    console.log("running slowFunction Array!");
    let x = 0;
    while (x < 10000) {
      x++;
    }
    console.log("finished");
    return [...arr, 1];
  };

  const myNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const myArr = useMemo(() => {
    return slowFunction2(arr);
  }, [arr]);
  return (
    <div className="App">
      <h1>useMemo can take an array as a dependency??</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      <h2>isOn?: {isOn ? "true" : "false"}</h2>
      <h2>My Number: {myNumber}</h2>
      <h2>My Array:</h2>
      <p>
        {myArr.map((item, index) => (
          <span key={index}>{item} </span>
        ))}
      </p>
    </div>
  );
}
