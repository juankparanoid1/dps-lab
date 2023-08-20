import React from 'react'

export const Todo = ({name, index, deleteTask}) => {
  return (
    <div className='list'>
      <h3>{ name }</h3>
      <button className='btn-delete' onClick={() => deleteTask(index)}>X</button>
    </div> 
  )
}