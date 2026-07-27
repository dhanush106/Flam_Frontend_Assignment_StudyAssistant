import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const Navbar = () => {
    
  return (
    <nav>
        <div className='rounded-full flex align-middle items-center gap-10 p-10 glass w-fit'>
            <NavItem
                link="/"
                item="Home"
            />
            <NavItem
                link="/generate"
                item="Generate"
            />
            <NavItem
                link="/about"
                item="About"
            />
        </div>
    </nav>
  )
}

const NavItem = ({ link, item }) => {
    const location = useLocation();

    return (
        <div className={`${location.pathname === link ? "bg-transparent backdrop-blur-lg border-2 border-white/20 shadow-lg" : null}  px-6 py-2 rounded-full`}>
            <Link to={link}>{item}</Link>
        </div>
    );
};

export default Navbar
