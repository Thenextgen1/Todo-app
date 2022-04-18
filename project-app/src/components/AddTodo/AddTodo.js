import React, { useState } from "react";
import './AddTodo.css'




const AddTodo = (props) => {

    const [formData, setformData] = useState({
        content: ""
    })


    function handleChange(event) {
        const { name, value } = event.target
        setformData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addTodo(formData)
        setformData(prevFormData => {
            return {
                ...prevFormData,
                content: ''
            }
        })
    }


    return (
        <div className="rounded-md flex items-center input_todo">
            <span className="check_container rounded-full"></span>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="content"
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                    value={formData.content}
                />
            </form>
        </div>
    )
}

export default AddTodo;