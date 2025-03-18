import { useState, useEffect } from "react";

function Skaiciuokle() {
  const [skaicius, setSkaicius] = useState(0);

  useEffect(() => {
    console.log(`Number changed to: ${skaicius}`);
  }, [skaicius]);

  return (
    <div>
      <h2>Number: {skaicius}</h2>
      <button onClick={() => setSkaicius(skaicius + 1)}>Add</button>
    </div>
  );
}

export default Skaiciuokle;
