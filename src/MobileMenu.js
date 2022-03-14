const MobileMenu = ({ planets, setPlanet }) => {
  return (
    <div>
      {
        planets.map((planet, i) => {
          return (
          <div key={i} onClick={() => { setPlanet(i) }} className="flex items-center justify-between cursor-pointer hover:bg-[#d8d8d82d] transition-all px-10 py-6 border-b border-[#d8d8d85e] bg-[#070724]">
            <div className="flex items-center">
              <div style={{backgroundColor: planet.color}} className="w-4 h-4 rounded-full mr-9"></div>
              <div className="text-[#D8D8D8] font-[Spartan] font-bold uppercase">{planet.name}</div>
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron" />
          </div>
          )
        })
      }
    </div>
  )
}

export default MobileMenu