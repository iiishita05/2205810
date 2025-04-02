const API_URL = ""; 

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchComments = async () => {
  const response = await fetch(`${API_URL}/comments`);
  return response.json();
};
