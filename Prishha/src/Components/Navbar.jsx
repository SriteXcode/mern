import react from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Store/auth';


function Navbar() {
  
const {isLoggedIn} = useAuth();

  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">Navbar</h1> */}
    
    <header>
        <div className="flex mx-4">
            <div className="p-4">
                <NavLink to="/"> Sri </NavLink>
            </div>
            <nav>
                <ul className='flex mx-8 p-4'>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {isLoggedIn ?(
                    <li><NavLink to="/logout">Logout</NavLink></li> ): (<>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li></>)}
                </ul>
            </nav>
        </div>
    </header>

    </>
  )
}

export default Navbar
