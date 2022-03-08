import axios from 'axios';
import React from 'react';

function App() {
  const onClickFetchData = async (): Promise<void> => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;
