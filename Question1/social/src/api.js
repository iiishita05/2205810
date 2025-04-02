const API_URL = "http://20.244.56.144/evaluation-service";

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchPosts = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/posts`);
  return response.json();
};

export const fetchComments = async (postId) => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`);
  return response.json();
};
