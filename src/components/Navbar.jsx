

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">

        <NavLink to="/" className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
       <p className="blue-gradient_text">CHROMASCAPES</p>
       </NavLink>

       <nav className="flex gap-7 text-lg font-medium ">

       <NavLink to="/mixes" className= {({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
          Mixes
        </NavLink>

        <NavLink to="/contact" className= {({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
           Contact
        </NavLink>


       </nav>

    </header>
  )
}

export default Navbar;