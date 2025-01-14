const fetchDataAxios = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log("response", response);

  return response.data;
 
};

export default fetchDataAxios;

//https://www.robinwieruch.de/react-hooks-fetch-data/