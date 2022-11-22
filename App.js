import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home'

import Favourites from './pages/Favourites';
import AllBooks from './pages/AllBooks';
import Top10  from './pages/Top10';
import Login from './pages/login';
import NewBooks from './pages/Newbooks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} /> {/* Main Page */}
          <Route path="Favourites" element={<Favourites />} />{/* Main Page */}
          <Route path="AllBooks" element={<AllBooks />} />{/* All Books*/}
          <Route path="NewBooks" element={<NewBooks />} />{/* New Books Page */}
          <Route path='Top10' element={<Top10/>}/>{/* Top 10 Page */}
          <Route path='Login' element={<Login/>}/>{/*Login Page */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
