import React, { useState } from "react";

function Greetings() {
  const [greeting, setGeeting] = useState("Hello!");

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => setGeeting("Greetings React!")}>Click me!</button>
    </div>
  );
}

export default Greetings;
