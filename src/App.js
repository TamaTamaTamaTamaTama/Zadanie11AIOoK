import React, { Component, useState, useEffect } from 'react';
import { fetchData, postData } from './service-functions';

function App() {
  const [todos, updateTodos] = useState([])
  const [newtitle, setTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  


  useEffect(() => {
    fetchData().then(data=>updateTodos(data));
    
    
  }, []);
  
  const handleChangeOfTitle = (newerTitle) => {
    setTitle(newerTitle.target.value);
  };


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function CreateNewTask()
  {
    if (!newtitle.trim()) {
      return; 
    }

   const todo = {
     userId: 1,
     title: newtitle,
     completed: isChecked,
   };

   postData(todo).then((data) => {
    updateTodos((prevTodos) => [...prevTodos, data]); 
    setTitle(''); 
    setIsChecked(false); 
  });
};
  
  return (
    <div>
      Add a new task:
      <br />
      Title:
      <input
        type="text"
        value={newtitle}
        onChange={handleChangeOfTitle}
      ></input>
      <br/>
      Set the task as completed:
      <input
          type="checkbox"
          onChange={handleCheckboxChange}
          />
          <br/>
          <button onClick={CreateNewTask}>Create a new task</button>
      <br/>
      Fetching data:
      <ul>
        {todos.map(el=><li>Title: {el.title}, Completed: <input type="checkbox" readOnly checked={el.completed}/></li>)}
        </ul>
    </div>
  );
}
export default App;
