const PlanetStat = ({ statHeader, stat}) => {
  return (
    <div className="grow basis-0 border border-[#d8d8d83d] uppercase py-6 px-4">
      <div className="font-[Spartan] font-bold text-[#d8d8d886] text-xxs tracking-wider">{statHeader}</div>
      <div className="font-[Antonio] font-medium text-[#D8D8D8] text-4xl mt-2">{stat}</div>
    </div>
  )
}

export default PlanetStat