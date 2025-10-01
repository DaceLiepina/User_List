import { useContext, type FC } from "react";
import { v4 } from "uuid";
import type { IUser } from "./UserList";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

const User: FC<{ user: IUser }> = ({ user: { id, name, username, email, } }) => {

  const {theme} = useContext(ThemeContext);
  const isDark = theme ==='dark'
  // funktional component - FC - arii jaimportee no React

  // console.log("Значение переменной isDark равно " + isDark);
  // console.log('Сэр Уинстон Черчилль сказал: "Я хочу обратиться..."');

  return (
    <div
      className={`col-12 col-md-6 col-lg-4`}
      key={v4()}
    >
    <div className="card h-100 shadow-sm">
  <div className={`card-header ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
    <h5 className="mb-3">{name}</h5>
    <h6 className="card-subtitle mb-2">@{username}</h6>
    <p className="bi bi-envelope me-2">
      <strong>Email:</strong> {email}
    </p>
  </div>

  <div className={`card-footer ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
    <Link
      to={`/users/${id}`}
      className="btn btn-sm btn-outline-info w-100"
    >
      View Profile
    </Link>
  </div>
</div>
    </div>
  );
};

export default User;
