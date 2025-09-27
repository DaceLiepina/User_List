import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import type { IPost } from "./PostList";

const PostsId = () => {
  const { id } = useParams<{ id: string }>();
  const [posts, setComment] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if(!id) return;
    setLoading(true);

    axios 
    .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

if (!posts) {
  return <div className="container mt-4">No comment found.</div>;
}

  return (
     <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2>Posts  Details</h2>
          <h4 className="card-title"> ID:  {posts.id}</h4>
           <h6 className="text-muted"><strong>User ID: </strong> {posts.userId}</h6>
          <p className="card-text"><strong>Body: </strong> {posts.body}</p>

          <Link to="/posts" className="btn btn-secondary btn-sm">
            Return to Posts list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostsId;