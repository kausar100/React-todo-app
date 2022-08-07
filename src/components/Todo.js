import React from 'react'

import style from './todo.module.css'

const Todo = (props) => {
    const {title, desc} = props.todo;

    const deleteItem = (id) =>{
      props.deleteTodo(id);
    }
    
  return (

    <article className={style.todo}>
        <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
        
        <div><button
        onClick={()=>{deleteItem(props.id)}}><i className='fa fa-trash fa-2x'></i></button></div>
    </article>
  )
}

export default Todo