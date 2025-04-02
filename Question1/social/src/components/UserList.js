import React, { useEffect, useState } from "react";
import { fetchUsers, fetchPosts } from "../api";

const UserList = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      const posts = await fetchPosts();

      const userPostCounts = users.map((user) => ({
        ...user,
        postCount: posts.filter((post) => post.userId === user.id).length,
      }));

      const sortedUsers = userPostCounts
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);
      setTopUsers(sortedUsers);
    };

    getUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Top 5 Users</h2>
      <ul className="mt-4">
        {topUsers.map((user) => (
          <li key={user.id} className="border p-2 my-2 rounded-md shadow">
            {user.name} - {user.postCount} Posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
