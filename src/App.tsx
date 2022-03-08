import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState<any>([]);


  const onClickFetchData = async (): Promise<void> => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
    setTodoList(response.data);
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todoList.map((todo: any) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
}

export default App;
