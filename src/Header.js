import Hamburger from './Hamburger';
import Nav from './Nav';

const Header = ({ planets, activePlanet, setPlanet, setInMenu, inMenu }) => {
  return (
    <header className="flex flex-row md:flex-col lg:flex-row justify-between items-center border-b-2 border-[#ffffff30] px-12 py-7">
      <div className="uppercase text-[#D8D8D8] font-[Antonio] font-medium text-3xl">The Planets</div>
      <Nav planets={planets} activePlanet={activePlanet} setPlanet={setPlanet} />
      <Hamburger setInMenu={setInMenu} inMenu={inMenu} />
    </header>
  )
}

export default Header