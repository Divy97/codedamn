import React, { useState } from "react";

const UseState_Hook = () => {
  const [state, setState] = useState(0);

  const updateValue = (value) => setState(value + 1);

  return (
    <>
      <h1>UseState_Hook</h1>
      {/* <p onClick={() => setState(updateValue) setTimeout(() => {
        
        
      }, 500);}>State: {state}</p> */}
    </>
  );
};

export default UseState_Hook;
