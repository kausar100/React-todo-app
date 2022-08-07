import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {

  return (
    <section className={style.todos}>
        {props.todos.map( (item) => <Todo todo={item} key={item.title} /> )} 
    </section>
  )
}

export default Todos