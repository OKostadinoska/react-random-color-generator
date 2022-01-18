// Import library from npm
import randomColor from 'randomcolor';
// Import React
import React, { useState } from 'react';

// Create a component
function Button() {
  // Create a useState variable with a String value
  const [hex, setHex] = useState('#78d3d2');

  // Statement function
  // function randomizedHex(tone) {
  //   const color = randomColor({ hue: tone });
  //   setHex(color);
  // }

  // Arrow function
  // Connect the setHex to the color
  const randomizedHex = (tone) => {
    const color = randomColor({ hue: tone });
    setHex(color);
  };

  return (
    <>
      {/* Show state variable value on the page */}
      <div
        className="App"
        style={{
          backgroundColor: hex,
        }}
      >
        {/* Show state variable value on page */}
        Generated Color: {hex}
      </div>
      {/* Update state variable */}
      <button className="generateButton" onClick={randomizedHex}>
        Generate
      </button>
    </>
  );
}

export default Button;
