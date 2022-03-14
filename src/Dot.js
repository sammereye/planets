const Dot = () => {
  let top = Math.floor(Math.random() * window.innerHeight);
  let left = Math.floor(Math.random() * window.innerWidth);
  let diameter = Math.floor(Math.random() * 4) + 2

  return (
    <div style={{top: `${top}px`, left: `${left}px`, width: `${diameter}px`, height: `${diameter}px`}} className={`absolute bg-[#ffffff30] rounded-full`}></div>
  )
}

export default Dot