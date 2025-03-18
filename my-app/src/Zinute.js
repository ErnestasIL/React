import { useEffect } from "react";

function Zinute() {
  useEffect(() => {
    console.log("Komponentas užsikrovė!");
  }, []);

  return <h2>This is a message from useEffect</h2>;
}

export default Zinute;
