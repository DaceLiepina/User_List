import type { FC } from "react";
import { v4 } from "uuid";
import type { IUser } from "./UserList";
import { Link } from "react-router-dom";

const User: FC<{ user: IUser }> = ({ user: { id, name, username, email } }) => {
  // funktional component - FC - arii jaimportee no React
  return (
    <div className="col-12 col-md-6 col-lg-4 pt-10" key={v4()}>
      <div className="card h-100 shadow-sm">
        <div className="card-header bg-info text-black">
          <h5 className="mb-3">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@{username}</h6>
          <p className="bi bi-envelope me-2">
            <strong> Email: </strong> {email}
          </p>
        </div>
        <div className="card-footer bg-light">
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
