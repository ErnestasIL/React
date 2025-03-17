import React from "react";
import Greetings from "./Greetings";
import Numerator from "./Numerator";
import Registracija from "./Registracija";

function App() {
  return (
    <div>
      <div>
        <p>My first React App!</p>
        <h1>My React App!</h1>
        <Greetings />
      </div>
      <div>
        <Numerator />
      </div>
      <div>
        <Registracija />
      </div>
    </div>
  );
}

export default App;
