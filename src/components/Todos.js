import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {

  const deleleId = (id)=>{
    props.removeTodos(id);

  }  

  return (
    <section className={style.todos}>
        {props.todos.map( (item) => <Todo deleteTodo={deleleId} todo={item.todo}  key={item.id} id={item.id}/> )} 
    </section>
  )
}

export default Todos