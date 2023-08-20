import React, { useState } from 'react'
import { Todo } from './Todo';

export const Form = () => {
  const [name, setName] = useState('');

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Todo 1' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3' },
  ]);

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      alert('name field is required');
      return;
    }
    const id = todoList.length + 1;
    setTodoList([...todoList, { id, name }]);
    setName('');
  }

  const deleteTask = (index) => {
    const list = [...todoList];
    if (list) {
      list.splice(index, 1);
      setTodoList(list);
    }
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Add task</label>
        <br />
        <input type='text' name='name' value={name} onChange={handleChange}></input>
        <button type='submit'>Add</button>
      </form>
      {
        todoList.map((todo, index) => {
          return <Todo key={index} name={todo.name} index={index} deleteTask={deleteTask} />
        })
      }
    </div>
  )
}