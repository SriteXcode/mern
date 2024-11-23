import React from 'react';
import { NavLink } from 'react-router-dom';
import Collection from "../assets/Api/Collectionapi";
import Pagesapi from '../assets/Api/Pagesapi';
import Elementapi from '../assets/Api/Elementsapi';
import { useAuth } from '../Store/auth';

function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="py-4">
            <NavLink to="/" className="text-xl font-bold"> Sri </NavLink>
          </div>
          <nav>
            <ul className='flex items-center space-x-4'>
              {/* Home Dropdown */}
              <div className='relative group'>
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/" className="flex items-center gap-1"> 
                    Home 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                </li>
                <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg z-50 rounded-md min-w-[200px] max-h-[400px] overflow-y-auto mt-1'>
                  <ul className='py-2'>
                    {Collection.map((curElem, index) => {
                      const { link, name } = curElem;
                      return (
                        <li key={index} className='px-4 py-2 hover:bg-slate-100 transition-colors duration-200'>
                          <NavLink to={link} className='relative block w-full'>{name}</NavLink>
                        </li>
                      );
                    })}
                    <li className='px-4 py-2 hover:bg-slate-200'>
                      <NavLink to="/Layout-collection">Landing...</NavLink>
                    </li>
                    <li className='px-4 py-2 hover:bg-slate-200'>
                      <NavLink to="/Layout-collection">Landing...</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Page Dropdown */}
              <div className='relative group mx-2'>
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/" className="flex items-center gap-1"> 
                    Pages
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                </li>
                <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg z-50 rounded-md min-w-[200px] max-h-[400px] overflow-y-auto mt-1'>
                  <ul className='py-2'>
                    {Pagesapi.map((curElem, index) => {
                      const { id, name, path } = curElem;
                      return (
                        <li key={index} className='px-4 py-2 hover:bg-slate-100 transition-colors duration-200'>
                          <NavLink to={path} className='relative block w-full'>{name}</NavLink>
                        </li>
                      );
                    })}
                    <li className='px-4 py-2 hover:bg-slate-200'>
                      <NavLink to="/Layout-collection">Landing...</NavLink>
                    </li>
                    <li className='px-4 py-2 hover:bg-slate-200'>
                      <NavLink to="/Layout-collection">Landing...</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blog and Portfolio Links - Updated styling */}
              <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                <NavLink to="/Blog" className="block">Blog</NavLink>
              </li>
              <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                <NavLink to="/portfolio" className="block">Portfolio</NavLink>
              </li>

              {/* Elements Dropdown */}
              <div className='relative group mx-2'>
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/" className="flex items-center gap-1"> 
                    Elements
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                </li>
                <div className='absolute right-0 hidden group-hover:block bg-white shadow-lg z-50 rounded-md w-[500px] max-h-[600px] overflow-y-auto mt-1'>
                  <div className='grid grid-cols-2 p-4 gap-4'>
                    {Elementapi.map((category) => (
                      <div key={category.category}>
                        <h2 className='font-bold text-gray-800 mb-2 border-b pb-2'>{category.category}</h2>
                        <ul className='space-y-1'>
                          {category.data.map((item) => (
                            <li key={item.id} className='px-3 py-1.5 hover:bg-slate-100 rounded-md transition-colors duration-200'>
                              <NavLink to={item.path} className='relative block w-full'>{item.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Authentication Links - Updated styling */}
              {isLoggedIn ? (
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/logout" className="block">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                    <NavLink to="/register" className="block">Register</NavLink>
                  </li>
                  <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                    <NavLink to="/login" className="block">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar