import React, { useState } from 'react'

import style from './newtodo.module.css'

const Newtodo = (props) => {


    const [todo, setTodo] = useState({ title: '', desc: '' })

    const { title, desc } = todo;


    const onInput = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value };
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        props.setTodo(todo);

        setTodo({
            title: "",
            desc: ""
        })

    }
    return (

        <form onSubmit={handleSubmit}>

            <div>
                <label for='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={title}
                    onChange={onInput}
                    required></input>
            </div>
            <div>
                <label for='desc'>Description</label>
                <textarea
                    type='text'
                    id='desc'
                    name='desc'
                    value={desc}
                    onChange={onInput}
                    required></textarea>
            </div>
            <div className={style.btn}><button type='submit'>Add todo</button></div>

        </form>

    )
}

export default Newtodo