import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      {/* Do not remove the main div */}
      <h1>Time on Page</h1>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
