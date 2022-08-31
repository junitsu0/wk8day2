import React, { useState } from 'react';
import ToDoForm from './Forms';
import ToDoCard from './Cards';

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    function updateTasks(e){
        e.preventDefault();
        let newTask = e.target.task.value;
        setTasks([...tasks, newTask]);
        e.target.task.value = '';
    }

    return (
        <>
            <h1 className='text-center'>Brian is cool</h1>
            <ToDoForm handleSubmit={updateTasks}/>
            <div className='row mt-5'>
                {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
            </div>
        </>
    )
}