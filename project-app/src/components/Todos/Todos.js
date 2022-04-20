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
    margin-bottom: 3em
}

`


const Todos = () => {


    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'Jog around the park 3x',
            completed: false
        },
        {
            id: 2,
            content: '10 minutes motivation',
            completed: false
        },
        {
            id: 3,
            content: 'Read for 1 hour',
            completed: false
        },
        {
            id: 4,
            content: 'Pick up groceries',
            completed: false
        },
        {
            id: 5,
            content: 'Complete Todo App on Frontend Mentor',
            completed: false
        }

    ])


    function addTodo(todo) {
        todo.id = Math.random()
        let newTodos = [...todos, todo]
        setTodos(newTodos)
    }


    function deleteTodo(id) {
        // eslint-disable-next-line
        const todos1 = todos.filter(todo => {
            if (todo.id !== id) {
                return todo
            }
        })
        return setTodos(todos1)
    }


    function checkcompleteTodo(id) {
        const checktodos = todos.map(todo =>

            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(checktodos)

    }
    console.log(todos)


    function allTodo() {
        // eslint-disable-next-line
        const allTodo = todos.filter(todo => {
            if (todo.content) {
                return todo
            }
        })
        return setTodos(allTodo)
    }

    function Completedtodo() {
        const completedtodo = todos.filter(todo => {
            if (todo.completed) {
                return todo
            }

        })
        setTodos(completedtodo)
    }
    function activetodo() {
        const activetodo = todos.filter(todo => {
            if (!todo.completed) {
                return todo
            }

        })
        setTodos(activetodo)
    }



    const allStyle = {
        color: 'hsl(220, 98%, 61%)'
    }

    const todoList = todos.map((datum) => {
        return (
            <AllTodos
                key={datum.id}
                num={datum.id}
                content={datum.content}
                deleteTodo={deleteTodo}
                checkcompleteTodo={checkcompleteTodo}
                todos={todos}

            />
        )
    })




    return (
        <StyledSection className="flex-column justify-center relative rounded-md">
            <AddTodo addTodo={addTodo} />
            {todoList}
            <footer className="footer relative flex items-center ">
                <p>{todos.length} items left</p>
                <ul className="filtertodo_container">
                    <li><button style={allStyle} onClick={allTodo}>All</button></li>
                    <li><button onClick={activetodo}>Active</button></li>
                    <li><button onClick={Completedtodo}>Completed</button></li>
                </ul>
                <p>Clear Completed</p>
            </footer>
        </StyledSection>
    )
}


export default Todos