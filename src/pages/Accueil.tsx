import { useState } from "react";

const Accueil = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello world {count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        réinitialiser
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ marginLeft: "10px" }}
      >
        +
      </button>
    </div>
  );
};

export default Accueil;
