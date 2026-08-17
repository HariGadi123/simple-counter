import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count >= 0) {
      setCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Simple Counter</h1>
      <h3>{count}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
