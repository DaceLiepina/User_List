import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/UserList";
import CommentsList from "./components/UserList/CommentsList";
import UserProfile from "./components/UserList/UserProfile";
import CommentsId from "./components/UserList/CommentsId";
import PostList from "./components/UserList/PostList";
import PostsId from "./components/UserList/PostId";
import { createContext, useContext, type Dispatch } from "react";

export interface IThemeContext {
  theme: 'light' | 'dark',
  setTheme: Dispatch<React.SetStateAction<"light" | "dark">>
} 

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
setTheme: () => {}

})
// SPA - Single Page Application
function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  const isDark = theme === "dark";
  const newTheme = isDark ? 'light' : 'dark'
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg-sm  sticky-top ">
        <div className="container">
          <Link className="navbar-brand fw-bold text-uppercase" to="/">
            Home page{" "}
          </Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comments">
                  Comments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
              </li>
               <li className="nav-item">
                <button
                  className="nav-link btn btn-info"
                  onClick={() => setTheme(newTheme)}  
                >To change theme to: {newTheme}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container text-center mt-5">
              <div className="p-5 mb-4 bg-light rounded-3 shadow">
                <div className="container-fluid py-5">
                  <h1 className="display-4 fw-bold">Welcome to our website!</h1>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/comments" element={<CommentsList />} />
        <Route path="/comments/:id" element={<CommentsId />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostsId />} />
      </Routes>
    </>
  );
}

export default App;
