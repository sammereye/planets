import React from 'react'

const PlanetImage = ({ images, imageType, alt }) => {
  let image;
  if (imageType === 'geology') {
    image = (
      <>
        <img src={images['planet']} alt={alt} />
        <img className="absolute w-1/4 translate-y-32" src={images[imageType]} alt={alt} />
      </>
    )
  } else {
    image = (
      <img src={images[imageType]} alt={alt} />
    )
  }

  return (
    <div className='w-full lg:w-[60%] px-5 relative flex items-center justify-center'>
      {image}
    </div>
  )
}

export default PlanetImage