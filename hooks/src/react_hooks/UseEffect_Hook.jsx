import React, { useEffect, useState } from "react";

const UseEffect_Hook = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("SOMETHING CHANGED");
  });

  return (
    <div>
      <h1 className="App" onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </h1>
    </div>
  );
};

export default UseEffect_Hook;
