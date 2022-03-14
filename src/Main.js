import PlanetImage from './PlanetImage';
import PlanetDescription from './PlanetDescription';
import PlanetStats from './PlanetStats';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Main = ({ planets, activePlanet, setPlanet, inMenu }) => {

  let [imageType, setImageType] = useState('planet')

  if (!inMenu) {
    return (
      <main className="mx-auto w-full lg:max-w-[1000px] px-10 mt-24">
        <div className='flex flex-col lg:flex-row'>
          <PlanetImage images={activePlanet.images} imageType={imageType} alt={`${imageType} of ${activePlanet.name}`} />
          <PlanetDescription activePlanet={activePlanet} imageType={imageType} setImageType={setImageType} />
        </div>
        <PlanetStats activePlanet={activePlanet} />
      </main>
    )
  } else {
    return (
      <main className="w-full px-5">
        <MobileMenu planets={planets} setPlanet={setPlanet} />
      </main>
    )
  }
  
}

export default Main