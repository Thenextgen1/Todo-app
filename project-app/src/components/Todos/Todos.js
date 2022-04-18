import React, { useState } from "react";
import AllTodos from '../AllTodos/AllTodos'
import './Todos.css'
import styled from 'styled-components'
import AddTodo from '../AddTodo/AddTodo'

const StyledSection = styled.section`
top: -6em;
width: 34%;
left: 33%;

@media(max-width: 1024px) {
    width: 75%;
    left: 8%;
    padding: 0 1.5em;
}

@media(max-width: 540px) {
    width: 100%;
    left: 0;
}

`


const Todos = () => {


    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'Jog around the park 3x'
        },
        {
            id: 2,
            content: '10 minutes motivation'

        },
        {
            id: 3,
            content: 'Read for 1 hour'
        },
        {
            id: 4,
            content: 'Pick up groceries'
        },
        {
            id: 5,
            content: 'Complete Todo App on Frontend Mentor'
        }

    ])


    function addTodo(todo) {
        todo.id = Math.random()
        let newTodos = [...todos, todo]
        setTodos(newTodos)
    }







    const todoList = todos.map((datum) => {
        return (
            <AllTodos
                key={datum.id}
                num={datum.id}
                content={datum.content}
            />
        )
    })






    return (
        <StyledSection className="flex-column justify-center relative">
            <AddTodo addTodo={addTodo} />
            {todoList}
        </StyledSection>
    )
}


export default Todos