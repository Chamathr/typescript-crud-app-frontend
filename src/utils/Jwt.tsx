const setAccessToken = (accessToken: string) => {
  localStorage.setItem("token", accessToken);
};

const getAccessToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token
  }
  else {
    return null
  }
};

const removeAccessToken = () => {
  localStorage.removeItem("token");
  window.location.href = '/signin'
}

export { setAccessToken, getAccessToken, removeAccessToken };
