import react from 'react'
import { NavLink } from 'react-router-dom';
import Collection from "../assets/Api/Collectionapi";
import Pagesapi from '../assets/Api/Pagesapi';
import Elementapi from '../assets/Api/Elementsapi';
import { useAuth } from '../Store/auth';


function Navbar() {

  const { isLoggedIn } = useAuth();

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
              <div className='group/item hover:bg-slate-100'>
                <li><NavLink to="/"> Home </NavLink></li>
                <div>
                  <div>
                    {Collection.map((curElem, index) => {
                      const { link, name } = curElem;
                      return (
                        <>
                          <li key={index} className='group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to={link} className='relative'>{name}</NavLink></li>
                        </>
                      )
                    })}
                  </div>
                  <li className='pt-4 group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to="/Layout-collection">Landing...</NavLink></li>
                  <li className='pt-0 group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to="/Layout-collection">Landing...</NavLink></li>

                </div>

              </div>
              <div className='group/item hover:bg-slate-100'>
                <li><NavLink to="/"> Page </NavLink></li>
                <div>
                  <div>
                    {Pagesapi.map((curElem, index) => {
                      const { id, name, path } = curElem;
                      return (
                        <>
                          <li key={index} className='group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to={path} className='relative'>{name}</NavLink></li>
                        </>
                      )
                    })}
                  </div>
                  <li className='pt-4 group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to="/Layout-collection">Landing...</NavLink></li>
                  <li className='pt-0 group/edit hidden hover:bg-slate-200 group-hover/item:block'><NavLink to="/Layout-collection">Landing...</NavLink></li>

                </div>

              </div>
              <li><NavLink to="/Blog">Blog</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>

              <div className='group/item hover:bg-slate-100'>
                <li><NavLink to="/"> Elements </NavLink></li>
                <div>
                  <div className='grid grid-cols-2'>
                    {Elementapi.map((category) => (
                      <div key={category.category} className='group/edit hidden hover:bg-slate-200 group-hover/item:block'>
                        <h2>{category.category}</h2>
                        <ul>
                          {category.data.map((item) => (
                            <li key={item.id} className='group/edit hidden hover:bg-slate-200 group-hover/item:block'>
                              <NavLink to={item.path} className='relative'>{item.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>


                </div>

              </div>

              {/* <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li> */}
              {isLoggedIn ? (
                <li><NavLink to="/logout">Logout</NavLink></li>) : (<>
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
