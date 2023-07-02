const setAccessToken = (accessToken: string) => {
  localStorage.setItem("token", accessToken);
};

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
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

const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    return refreshToken
  }
  else {
    return null
  }
};

const removeAccessToken = () => {
  localStorage.removeItem("token");
}

const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
  window.location.href = '/signin'
}

export { setAccessToken, setRefreshToken, getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken };
