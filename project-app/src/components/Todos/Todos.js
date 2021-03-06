import React, { useState } from "react";
import AllTodos from '../AllTodos/AllTodos'
import '../../styles/Todos.css'
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
@media(max-width: 375px) {
    top: -7em;
}

`


const Todos = () => {

    // todo initial content

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

    // generating a random if when new todos are added


    function addTodo(todo) {
        todo.id = Math.random()
        let newTodos = [...todos, todo]
        setTodos(newTodos)
    }


    // deleteTodo when the x cross is clicked

    function deleteTodo(id) {
        // eslint-disable-next-line
        const todos1 = todos.filter(todo => {
            if (todo.id !== id) {
                return todo
            }
        })
        return setTodos(todos1)
    }


    // check if any todo has been completed


    function checkcompleteTodo(id) {
        const checktodos = todos.map(todo =>

            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )

        // search for any changes to the boolean completed value (case completed)
        const completedtodo = checktodos.filter(todo => {
            if (todo.completed) {
                return todo
            }

        })
        // case uncompleted(thereby active)
        const activetodo = checktodos.filter(todo => {
            if (!todo.completed) {
                return todo
            }

        })
        // saving each completed and active data to session storage
        sessionStorage.setItem('completedtodo', JSON.stringify(completedtodo));
        sessionStorage.setItem('activetodo', JSON.stringify(activetodo));
        setTodos(checktodos)
    }

    function Completedtodo() {

        // changing the color text when clicked
        activestatestyle(setcompletedstyles, setactivestyle, setallStyle)

        // getting active and completed data
        const getCompletedtodo = sessionStorage.getItem('completedtodo')
        const finalCompletedtodo = JSON.parse(getCompletedtodo)


        // setting a default value to settodos if finalcompleted todo is empty or not empty
        if (finalCompletedtodo === null) {
            setTodos(todos)
        }
        else {
            setTodos(finalCompletedtodo)
        }

    }



    function activetodo() {

        // setting state styles when clicked
        activestatestyle(setactivestyle, setallStyle, setcompletedstyles)

        // getting and setting activetodo to main todo as well as checking when empty
        const getActivetodo = sessionStorage.getItem('activetodo')
        const finalActivetodo = JSON.parse(getActivetodo)
        if (finalActivetodo === null) {
            setTodos(todos)
        }
        else {
            setTodos(finalActivetodo)
        }
    }

    function alltodos() {

        activestatestyle(setallStyle, setactivestyle, setcompletedstyles)

        // getting and merging active and completed todo together


        const getallactivetodo = JSON.parse(sessionStorage.getItem('activetodo'))
        const getallCompletetedtodo = JSON.parse(sessionStorage.getItem('completedtodo'))

        const alltodos = [].concat(getallactivetodo, getallCompletetedtodo)

        // checking whether all todos contains null and returning it without the null value 

        console.log(alltodos)
        if (alltodos.includes(null) === true) {
            const allnewtodos = alltodos.filter((elem) => {
                return elem !== null
            })
            if (allnewtodos.length === 0) {
                setTodos(todos)
            }
            else {
                setTodos(allnewtodos)
            }

        }

        else {
            setTodos(alltodos)
        }
    }



    function clearcompleted() {
        // clearing completed todo from memory when clicked
        sessionStorage.removeItem('completedtodo')
    }



    function activestatestyle(mainstyle, otherstyle1, otherstyle2) {
        mainstyle(prevStyle => {
            return {
                ...prevStyle,
                color: 'hsl(220, 98%, 61%)'
            }
        })
        otherstyle1(prevStyle => {
            return {
                ...prevStyle,
                color: 'hsl(234, 11%, 52%)'
            }
        })
        otherstyle2(prevStyle => {
            return {
                ...prevStyle,
                color: 'hsl(234, 11%, 52%)'
            }
        })
    }



    const [allStyle, setallStyle] = useState({
        color: 'hsl(220, 98%, 61%)'
    })
    const [completedstyles, setcompletedstyles] = useState({
        color: 'hsl(234, 11%, 52%)'
    })
    const [activeStyle, setactivestyle] = useState({
        color: 'hsl(234, 11%, 52%)'
    })

    // mapping over the initial todos content

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
                    <li><button style={allStyle}
                        onClick={alltodos}
                    >
                        All</button></li>
                    <li><button onClick={activetodo} style={activeStyle}>Active</button></li>
                    <li><button
                        onClick={Completedtodo}
                        style={completedstyles}
                    >Completed </button></li>
                </ul>
                <button onClick={clearcompleted}>Clear completed</button>
            </footer>
        </StyledSection>
    )
}


export default Todos