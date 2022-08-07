import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './Todos'
import style from './home.module.css'
import Newtodo from './Newtodo'



const Home = () => {

    const [todos, updateTodos] = useState([]);

    const getTodo = (todo) => {
        updateTodos((prevTodos) => {

            return [...todos, { id: uuidv4(), todo}]

        });
    }

    console.log(todos);


    return (
        <div className={style.container}>
            <h1 style={{ color: 'white' }}>Todo App</h1>
            <Newtodo setTodo={getTodo} />
            <Todos todos={todos} />

        </div>
    )
}

export default Home