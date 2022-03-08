import axios from 'axios';
import React, { useState } from 'react';
import { Todo } from "./Todo"
import { TodoType } from "./types/todo"



function App() {
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);

  //asyncは引数の前に書く
  const onClickFetchData = async (): Promise<void> => {
    //axios.get<型>という書き方になる
    const response = await axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos");
    setTodoList(response.data);
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todoList.map((todo: TodoType) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </div>
  );
}

export default App;
