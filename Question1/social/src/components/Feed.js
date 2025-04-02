import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await fetchPosts();
      setPosts(data.sort((a, b) => b.id - a.id)); 
    };

    fetchFeed();
    const interval = setInterval(fetchFeed, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Live Feed</h2>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-2 my-2 rounded-md shadow">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
