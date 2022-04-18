import React from 'react'
import check from '../../assets/images/icon-check.svg'
import cross from '../../assets/images/icon-cross.svg'
import './AllTodos.css'

const AllTodos = ({ content, id, num }) => {

    return (
        <div className='relative alltodos_container' key={id}>

            <div className=' alltodos relative justify-between items-center flex '>
                <span className='rounded-full'></span>

                {
                    content && < p className="todo-content">{content}</p>

                }
                <img className='cross' src={cross} alt="delete" />

            </div >
        </div>
    )
}

export default AllTodos