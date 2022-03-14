import PlanetStat from "./PlanetStat"

const PlanetStats = ({activePlanet}) => {
  return (
    <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0  md:space-x-10 my-10">
      <PlanetStat statHeader={'Rotation Time'} stat={activePlanet.rotation} />
      <PlanetStat statHeader={'Revolution Time'} stat={activePlanet.revolution} />
      <PlanetStat statHeader={'Radius'} stat={activePlanet.radius} />
      <PlanetStat statHeader={'Average Temp'} stat={activePlanet.temperature} />
    </div>
  )
}

export default PlanetStats