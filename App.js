import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home'

import UserList from './pages/ListUsers';
import AllBooks from './pages/AllBooks';
import Top10  from './pages/Top10';
import Login from './pages/login';
import NewBooks from './pages/Newbooks';
import Register from './pages/Register';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} /> {/* Main Page */}
          <Route path="UserList" element={<UserList />} />{/* List of Users */}
          <Route path="AllBooks" element={<AllBooks />} />{/* All Books*/}
          <Route path="NewBooks" element={<NewBooks />} />{/* New Books Page */}
          <Route path='Top10' element={<Top10/>}/>{/* Top 10 Page */}
          <Route path='Login' element={<Login/>}/>{/*Login Page */}
          <Route path='Register' element={<Register/>}/>{/*Register Page */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
