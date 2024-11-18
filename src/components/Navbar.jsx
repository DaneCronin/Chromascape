

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">

        <NavLink to="/" className="w-10 h-10 rounded-lg bg-slate-500 items-center justify-center flex font-bold shadow-md">
       <p className="text-white">CHROMASCAPES</p>
       </NavLink>

       <nav className="flex gap-7 text-lg font-medium ">
        <NavLink to="/recent" className= {({isActive}) => isActive ? 'text-slate-500' : 'text-black' }>
            Recent
        </NavLink>

        <NavLink to="/mixes" className= {({isActive}) => isActive ? 'text-slate-500' : 'text-black' }>
           Mixes
        </NavLink>

       </nav>

    </header>
  )
}

export default Navbar;