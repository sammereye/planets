const Nav = ({ planets, activePlanet, setPlanet }) => {
  return (
    <nav className="hidden md:flex mt-6 lg:mt-0 flex-row space-x-7">
      {
        planets.map((planet, i) => {
          return <button key={i} onClick={() => { setPlanet(i) }} className={`${activePlanet.name === planet.name ? 'text-[#D8D8D8]' : 'text-[#D8D8D8c0]'} hover:text-[#D8D8D8] transition-all px-2 py-2 text-xxs uppercase font-[Spartan] font-bold tracking-wider`}>{planet.name}</button>
        })
      }
    </nav>
  )
}

export default Nav