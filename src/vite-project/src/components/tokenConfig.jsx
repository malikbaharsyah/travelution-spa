const isTokenAvailable = () => {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  };
  
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  const setAuthorizationHeader = (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
  };

  export { isTokenAvailable, removeToken, setAuthorizationHeader };