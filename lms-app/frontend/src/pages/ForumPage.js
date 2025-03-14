import React, { useEffect, useState } from "react";
import axios from "../services/api";

const ForumPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/forum").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Discussion Forum</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ForumPage;
