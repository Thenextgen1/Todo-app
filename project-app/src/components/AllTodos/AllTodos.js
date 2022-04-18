import React from 'react'

const AllTodos = ({ content, id, num }) => {

    return (
        <div className='todos' key={id}>


            {
                content && < p className="center">{content}</p>

            }
        </div >
    )
}

export default AllTodos