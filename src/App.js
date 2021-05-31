import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <RingLoader size={150} color={"orange"} loading={loading} />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="img"
        />
      )}
    </div>
  );
}
export default App;
