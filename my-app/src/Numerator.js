import React, { useState } from "react";

function Numerator() {
  const [numerator, setNumerator] = useState(0);

  return (
    <div>
      <h1>{numerator}</h1>
      <button onClick={() => setNumerator(numerator + 1)}>Increase</button>
      <button onClick={() => setNumerator(numerator - 1)}>Decrease</button>
    </div>
  );
}

export default Numerator;
