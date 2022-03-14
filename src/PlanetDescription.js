import React from 'react';

let buttons = [
  {
    imageType: 'planet',
    number: '01',
    text: 'Overview'
  },
  {
    imageType: 'internal',
    number: '02',
    text: 'Internal Structure'
  },
  {
    imageType: 'geology',
    number: '03',
    text: 'Surface Geology'
  },
]

const PlanetDescription = ({ activePlanet, imageType, setImageType }) => {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between lg:flex-col lg:w-[40%] mt-16 lg:mt-0'>
      <div className='md:w-[45%] lg:w-full'>
        <div className='font-[Antonio] font-medium uppercase text-[#D8D8D8] text-6xl'>{activePlanet.name}</div>
        <div className='text-xs text-[#D8D8D8] font-[Spartan] mt-8 leading-7'>{activePlanet.overview.content}</div>
        <div className='text-xs text-[#d8d8d880] font-[Spartan] mt-6'>Source: <a href={activePlanet.overview.source} target="_blank" rel="noreferrer" className="underline">Wikipedia</a></div>
      </div>
      <div className='mt-6 space-y-4 md:w-[45%] lg:w-full'>
        {
          buttons.map((btn, i) => {
            let buttonStyle = { backgroundColor: imageType === btn.imageType && activePlanet.color }
            let numberStyle = { color: imageType === btn.imageType ? "#000000c7" : "#d8d8d89a" }
            let textStyle = { color: imageType === btn.imageType ? "#000000" : "#d8d8d8" }

            return (
              <button key={i} style={buttonStyle} onClick={() => { setImageType(btn.imageType) }} className={`flex w-full border border-[#D8D8D830] px-8 py-4 font-[Spartan] font-bold text-xs tracking-wider`}>
                <div style={numberStyle} className='mr-8'>{btn.number}</div>
                <div style={textStyle} className='uppercase'>{btn.text}</div>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default PlanetDescription