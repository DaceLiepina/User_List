import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { IUser } from "./UserList";

const UserProfile = () => {
  // useParams - React hook
  // sanjemam info pec id
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setUser(data); // saglabā konkrēto lietotāju state
        setLoading(false); // pabeidz ielādi
      })
      .catch((error) => {
        console.error(error.message); // kļūda konsolē
        setError(error.message); // saglabā kļūdu state
        setLoading(false); // pabeidz ielādi
      });
  }, [id]); // efekts atkārtoti palaidīsies, ja mainīsies id

  if (!user) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="">User Profile </h2>
          <div>
            <div className="card-body">
              <h4 className="card-title">{user.name}</h4>
              <h4 className="text-muted">@{user.username}</h4>
              <p className="card-text">
                <strong>Email: </strong> {user.email}
              </p>
              <p className="card-text">
                <strong>Phone Nr.: </strong> {user.phone}
              </p>
              <p className="card-text">
                <strong>Website: </strong>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.website}
                </a>
              </p>
              <Link to="/users" className="btn btn-secondary btn-sm">
                Atgriezties pie lietotaja saraksta
              </Link>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
