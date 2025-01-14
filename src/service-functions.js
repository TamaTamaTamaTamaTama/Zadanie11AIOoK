const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
};



const postData = async (Task) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos',
  {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/json',
    },
  body: JSON.stringify(Task)
  });
  return await response.json();
};

export {fetchData, postData};