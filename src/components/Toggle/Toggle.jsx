import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState({
    clicked: true
  });
  // console.log(toggle.clicked)
  return (
    <>
      <div className="container">
        <button
          className="btn"
          onClick={() => setToggle({ clicked: !toggle.clicked })}
        >
          Hide Element Below
        </button>

        <h1>{toggle.clicked ? "Toggle Challenge" : ""}</h1>
      </div>
    </>
  );
}

export default Toggle;
