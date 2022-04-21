import React, { useState } from 'react'
import check from '../../assets/images/icon-check.svg'
import cross from '../../assets/images/icon-cross.svg'
import './AllTodos.css'

const AllTodos = ({ content, id, num, deleteTodo, checkcompleteTodo, todos }) => {


    const [style, setstyle] = useState({
        isUnchecked: true
    })
    const imgStyle = {
        opacity: 0
    }
    const backgroundStyle = {
        background: ''
    }
    const contentStyle = {
        textDecoration: 'none',
        color: '',
        opacity: 1

    }

    function checkTodo() {
        setstyle(prevStyle => {
            return {
                ...prevStyle,
                isUnchecked: !style.isUnchecked
            }
        })

    }





    function completeTodo() {
        if (style.isUnchecked) {
            imgStyle.opacity = 0
            backgroundStyle.background = ''
            contentStyle.textDecoration = 'none'
        }
        else {
            imgStyle.opacity = 1
            backgroundStyle.background = 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
            contentStyle.textDecoration = 'line-through'
            contentStyle.color = ' hsl(233, 14%, 35%)'
            contentStyle.opacity = 0.5
        }
    }
    completeTodo();

    return (
        <div className='relative alltodos_container flex justify-between items-center' key={id}>

            <div className=' alltodos relative items-center flex '>
                <span className='rounded-full check-container' onClick={checkTodo} style={backgroundStyle}>
                    <img className='check' src={check} alt="check" style={imgStyle} onClick={() => { checkcompleteTodo(num) }} />
                </span>

                {
                    content && < p className="todo-content" style={contentStyle}>{content}</p>

                }

            </div >
            <img className='cross' src={cross} alt="delete" onClick={() => { deleteTodo(num) }} />


        </div>
    )
}

export default AllTodos