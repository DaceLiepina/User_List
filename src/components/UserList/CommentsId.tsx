import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import type { IComment } from "./CommentsList";

const CommentsId = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState<IComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if(!id) return;
    setLoading(true);

    axios 
    .get<IComment>(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setComment(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message); 
        setError(error.message); 
        setLoading(false); 
      });
      
  }, [id]); 

  if (loading) {
  return <div className="container mt-4">Loading...</div>;
}

if (error) {
  return <div className="container mt-4 text-danger">Error: {error}</div>;
}

if (!comment) {
  return <div className="container mt-4">No comment found.</div>;
}

  return (
     <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2>Comment Details</h2>
          <h4 className="card-title">Name:  {comment.name}</h4>
           <h6 className="text-muted"><strong>ID: </strong> {comment.id}</h6>
          <h6 className="text-muted"><strong>Email: </strong> {comment.email}</h6>
          <p className="card-text"><strong>Body: </strong> {comment.body}</p>

          <Link to="/comments" className="btn btn-secondary btn-sm">
            Return to comments list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentsId;