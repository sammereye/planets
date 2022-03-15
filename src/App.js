import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import data from './data.json';

function App() {
  let [activePlanet, setActivePlanet] = useState(data[0]);
  let [inMenu, setInMenu] = useState(false);

  let setPlanet = (id) => {
    setActivePlanet(data[id]);
    if (inMenu) {
      setInMenu(!inMenu)
    }
  }

  return (
    <div className="App">
      <Header planets={data} activePlanet={activePlanet} setPlanet={setPlanet} setInMenu={setInMenu} inMenu={inMenu} />
      <Main planets={data} activePlanet={activePlanet} setPlanet={setPlanet} inMenu={inMenu} />
    </div>
  );
}

export default App;
