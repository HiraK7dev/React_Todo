import './App.css'
import Input from './components/Input'
import List from './components/List';
import { useState } from 'react';

function App() {
  let check = false;
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(`Write here....`);
  console.log(todo);
  function updateList(event){
    const { value } = event.target.previousElementSibling;
    if(value === ``){
      setPlaceHolder(`ENTER SOMETHING......!!`);
    } else {
      const todoValue = {
        id: `${id}`,
        value: `${`  ` + value}`,
        complete: false
      }
      setTodo([...todo, todoValue]);
      setId(id + 1);
      event.target.previousElementSibling.value = ``;
      setPlaceHolder(`Write here....`);
    }
  }
  function handleComplete(event){
    setTodo(todo.map(element => {
      if(element.id === event.target.id){
        check = element.complete;
        return {...element, complete: !check}
      } else{
        return element;
      }
    }))
  }
  function handleDelete(event){
    setTodo(todo.filter(element => {
      return element.id != event.target.previousElementSibling.firstChild.id;
    }))
  }
  return (
    <div id='main'>
      <Input updateList={updateList} placeHolder={placeHolder} />
      <div id='Output'>
        {
          todo.length === 0 ?
          <div id='noData'>EMPTY TODO</div> :
          todo.map((items) => {
            return <List value={items.value} complete={items.complete} id={items.id} handleComplete={handleComplete} handleDelete={handleDelete}/>
          })
        }
      </div>
    </div>
  )
}

export default App
