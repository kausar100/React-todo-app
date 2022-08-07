import React from 'react'

import Todos from './Todos'
import style from './home.module.css'

const Home = () => {
    const dummyTodos = [
        {
            id:1,
            title: "title 1",
            desc: "description 1"
        },
        {
            id:2,
            title: "title 2",
            desc: "description 2"
        }
    ]


  return (
    <div className={style.container}>
        <h1 style={{color:'white'}}>Todo App</h1>
        <Todos todos={dummyTodos}/>
    </div>
  )
}

export default Home