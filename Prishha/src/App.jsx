import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Services';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import Logout from './Pages/Logout';
import { AdminLayout } from './Components/Layouts/Admin-Layout';
import { AdminUsers } from './Pages/Admin-Users';
import { AdminContacts } from './Pages/Admin-Contacts';
import { AdminUpdate } from './Pages/Admin-Update';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/logout' element={<Logout />}/>
      <Route path="*" element={<Error />} />

       <Route path='/admin' element ={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />}/>
          <Route path="contacts" element={<AdminContacts />}/>
          <Route path="users/:id/edit" element={<AdminUpdate/>}/>

       </Route>

    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App