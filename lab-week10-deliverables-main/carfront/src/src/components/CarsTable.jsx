import React, { useEffect, useState } from "react";

export default function CarsTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/cars")           
      .then(r => r.json())
      .then(setRows)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Carshop</h2>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
