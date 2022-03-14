const Hamburger = ({ setInMenu, inMenu }) => {
  return (
    <div className="md:hidden">
      <img onClick={() => { setInMenu(!inMenu) }} className="cursor-pointer" src="./assets/icon-hamburger.svg" alt="hamburger" />
    </div>
  )
}

export default Hamburger