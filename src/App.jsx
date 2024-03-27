import './App.css'
import Input from './components/Input'
import List from './components/List';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState([]);
  function updateList(event){
      const { value } = event.target.previousElementSibling;
      const todoValue = {
        id: `${id}`,
        value: `${value}`,
        complete: false
      }
      setTodo([...todo, todoValue]);
      setId(id + 1);
  }
  return (
    <div id='main'>
      <Input updateList={updateList}/>
      <div id='Output'>
        {
          todo.map((items) => {
            return <List items={items.value} complete={items.complete}/>
          })
        }
      </div>
    </div>
  )
}

export default App
