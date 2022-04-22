import React, { useState } from "react";
import '../../styles/AddTodo.css'

const AddTodo = (props) => {


    // set initial form data content
    const [formData, setformData] = useState({
        content: "".trim()
    })

    // controlled form to check for changes, implementation using names and values
    function handleChange(event) {
        const { name, value } = event.target
        setformData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // submit form

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
                    autoComplete="off"
                />
            </form>
        </div>
    )
}

export default AddTodo;