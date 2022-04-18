import React, { useState } from 'react'
import check from '../../assets/images/icon-check.svg'
import cross from '../../assets/images/icon-cross.svg'
import './AllTodos.css'

const AllTodos = ({ content, id, num, deleteTodo }) => {


    const [style, setstyle] = useState({
        opacity: 0
    })
    const [background, setBackground] = useState({
        background: ''
    })

    function checkTodo() {
        setstyle({
            opacity: 1
        })
        setBackground({
            background: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
        })

    }

    return (
        <div className='relative alltodos_container flex justify-between items-center' key={id}>

            <div className=' alltodos relative items-center flex '>
                <span className='rounded-full check-container' onClick={checkTodo} style={background}>
                    <img className='check' src={check} alt="check" style={style} />
                </span>

                {
                    content && < p className="todo-content">{content}</p>

                }

            </div >
            <img className='cross' src={cross} alt="delete" onClick={() => { deleteTodo(num) }} />
        </div>
    )
}

export default AllTodos