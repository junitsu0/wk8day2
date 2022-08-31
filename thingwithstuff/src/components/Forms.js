import React from 'react'

export default function ToDoForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='form-group'>
                <input type='text' className='form-control' name='task' placeholder='Enter Task' />
                <input type='submit' className='btn btn-success w-100' value='Add' />
            </div>
        </form>
    )
}
