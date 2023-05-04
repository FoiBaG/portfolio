import React, { useState } from 'react';
import ToggleTheme from './components/common/toggle-theme';

function App() {

  const  [color, setColor] = useState();
  const handleCtoggle = (color) => {
    setColor(color);
  }

  return (
    //COMPONENTS
    <>
      <div className="div-2" style={{backgroundColor: color}}><ToggleTheme onColorChange={handleCtoggle}/></div>
    </>
  );
}

export default App;
