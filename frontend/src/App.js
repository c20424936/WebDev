import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="listbooks" element={<BookList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="listbooks/add-book" element={<AddBook />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="listbooks/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
