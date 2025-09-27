import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function PostList() {
    const [post, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
    .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .then((data) => {
        setPosts(data);
        setLoading(false);
    })
    .catch((error)=> {
        setError(error.message);
    })
    .finally(()=> setLoading(false))
  }, []);

    return (
    <div className="container mt-4">
      <h2 className="mb-4">Posts </h2>
      <div className="row">
        {post.slice(0, 20).map((post) => (
          <div key={post.title}  className="list-group-item mb-3 shadow-sm rounded">
            <div className="card">
              <div className="card-body">
            
                <p className="card-text">{post.body}</p>
              </div>
            <div className="card-footer bg-light">
          <Link
            to={`/posts/${post.id}`}
            className="btn btn-sm btn-outline-info w-100"
          >
            View Post Details
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

export default PostList;