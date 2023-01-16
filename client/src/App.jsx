import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackend] = useState({});
  useEffect(() => {
    fetch("/modelRes")
      .then((response) => response.json())
      .then((data) => setBackend(data));
  }, {});
  return (
    <div>
      <h1>{backendData.tester}</h1>
    </div>
  );
}

export default App;
