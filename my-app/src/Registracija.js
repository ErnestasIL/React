import React, { useState } from "react";

function Registracija() {
  const [vardas, setVardas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vardas: ${vardas}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vardas:
        <input
          type="text"
          value={vardas}
          onChange={(e) => setVardas(e.target.value)}
        />
        <button type="submit">Pateikti</button>
      </label>
    </form>
  );
}

export default Registracija;
