import React, { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "../api";

const TrendingP = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      const posts = await fetchPosts();
      const comments = await fetchComments();

      const postCommentCounts = posts.map((post) => ({
        ...post,
        commentCount: comments.filter((comment) => comment.postId === post.id)
          .length,
      }));

      const maxComments = Math.max(
        ...postCommentCounts.map((p) => p.commentCount)
      );
      const topTrendingPosts = postCommentCounts.filter(
        (p) => p.commentCount === maxComments
      );

      setTrendingPosts(topTrendingPosts);
    };

    getTrendingPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Trending Posts</h2>
      <ul className="mt-4">
        {trendingPosts.map((post) => (
          <li key={post.id} className="border p-2 my-2 rounded-md shadow">
            {post.title} - {post.commentCount} Comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingP;
