async function request({ url, method, body }) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json',
        },
        method,
      }
    : {
        method,
      };

  const response = await fetch(
    `${process.env.REACT_APP_ROOT_API}${url}`,
    fetchData
  );

  return response.json();
}

const API = {
  get: url => request({ url, method: 'GET' }),
};

export default API;
