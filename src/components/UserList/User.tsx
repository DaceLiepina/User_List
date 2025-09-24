// import type { JSX } from "react";
import type { FC } from "react";
import { v4 } from "uuid";
import type { IUser } from "./UserList";

const User: FC<{ user: IUser }> = ({ user: { name, username, email } }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4" key={v4()}>
      <div className="card h-100 shadow-sm">
        <div className="card-header bg-info text-black">
          <h5 className="mb-3">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@{username}</h6>
          <p className="bi bi-envelope me-2">
            <strong>Email: </strong> {email}
          </p>
        </div>
        <div className="card-footer bg-secondary">
          <button className="btn btn-sm btn-outline-info w-100">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;