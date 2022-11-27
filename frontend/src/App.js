import React from 'react';
import { BrowserRouter, Routes, Route , } from "react-router-dom";

import Home from './pages/Home'
import AllBooks from './pages/AllBooks';
import Top10  from './pages/Top10';
import Login from './pages/login';
import NewBooks from './pages/Newbooks';
import Register from './pages/Register';


import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBook from "./pages/AddBook";
import BookList from "./pages/BookList";
import PBookList from "./pages/PBooklist"
import EditBook from "./pages/EditBook";



export default function App() {
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route>
          <Route index element={<Home />} /> {/* Main Page */}
          <Route path="AllBooks" element={<AllBooks />} />{/* All Books*/}
          <Route path="NewBooks" element={<NewBooks />} />{/* New Books Page */}
          <Route path='Top10' element={<Top10/>}/>{/* Top 10 Page */}
          <Route path='Login' element={<Login/>}/>{/*Login Page */}
          <Route path='Register' element={<Register/>}/>{/*Register Page */}

          <Route path="UserList" element={<UserList />} />
          <Route path="listbooks" element={<BookList />} />
          <Route path="Plistbooks" element={<PBookList />} />
          <Route path="/AllBooks/Plistbooks" element={<PBookList />} />
          <Route path="UserList/add" element={<AddUser />} />
          <Route path="listbooks/add-book" element={<AddBook />} />
          <Route path="UserList/edit/:id" element={<EditUser />} />
          <Route path="listbooks/edit/:id" element={<EditBook />} />

        </Route>
      </Routes>
      
          

      
    </BrowserRouter>
  );
}
