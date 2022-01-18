// Import library from npm
import randomColor from 'randomcolor';
// Import React
import React, { useState } from 'react';

// Create a component
function Button() {
  // Create a useState variable with a String value
  const [hex, setHex] = useState('#78d3d2');
  // Connect the setHex to the color
  const randomizedHex = function (tone) {
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
          zoom: 2,
        }}
      >
        {/* Show state variable value on page */}
        <div className="App-header">
          <p>Generated Color: background color hex code</p>
          {hex}
        </div>
        {/* Update state variable */}
        <button className="generateButton" onClick={randomizedHex}>
          Generate
        </button>
      </div>
    </>
  );
}

export default Button;
