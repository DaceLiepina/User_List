import { useEffect, useState } from "react";
import axios from "axios";


interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

function CommentsList() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComments(response.data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Комментарии</h2>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsList;