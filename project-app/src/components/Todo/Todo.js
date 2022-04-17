import React from "react";
import check from '../../assets/images/icon-check.svg'
import cross from '../../assets/images/icon-cross.svg'
import AllTodos from './AllTodos/AllTodos'
import './Todo.css'



const Todo = () => {
    return (
        <section className="flex justify-center">
            <div className="flex justify-between items-center">
                <span className="check_container rounded-full"></span>
                <input type="text" name="content" placeholder="Create a new todo..." />
            </div>
            <AllTodos />
        </section>)
}


export default Todo