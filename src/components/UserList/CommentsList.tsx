import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export interface IComment {   // interface sakas ar lielo I
  id: number;
  name: string;
  email: string;
  body: string;
}

function CommentsList() {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<IComment[]>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.data)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {

       setError(error.message);
    })
    .finally(() => setLoading(false))
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comments </h2>
      <div className="row">
        {comments.slice(0, 20).map((comment) => (
          <div key={comment.id}  className="list-group-item mb-3 shadow-sm rounded">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <h6 className="badge bg-primary">
                  {comment.email}
                </h6>
                <p className="card-text">{comment.body}</p>
              </div>
            <div className="card-footer bg-light">
          <Link
            to={`/comments/${comment.id}`}
            className="btn btn-sm btn-outline-info w-100"
          >
            View Comment Details
          </Link>
        </div>
            </div>
          </div>
        
        ))}
        </div>
      <div>
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>{error && <>Error loading data: {error}</>}</div>
    </div>
  );
}

export default CommentsList;