import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/UserList";
import CommentsList from "./components/UserList/CommentsList";


// SPA - Single Page Application
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to='/'>Домашняя страница</Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/users'>Пользователи</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Comments'>Комментарии</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<div>Добро пожаловать на наш сайт!</div>} />
        <Route path="/users" element={<UserList />} />
         <Route path="/comments" element={<CommentsList />} />

      </Routes>
    </>
  );
}
export default App;
