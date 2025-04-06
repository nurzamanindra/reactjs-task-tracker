import React, {useState} from 'react'

import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags:[]
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const filteredTags = taskData.tags.filter(item => item != tag);

            setTaskData(
                (prev) => {return {...prev, tags: filteredTags}}
            );
        } else {
            setTaskData(
                (prev) => {return {...prev, tags: [...prev.tags, tag]}}
            );
        }
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setTaskData(
            (prev) => {return {...prev, [name]:value}}
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTasks(
        (prev) => {return [...prev, taskData]}
        )

        setTaskData({
            task: "",
            status: "todo",
            tags:[]
        })
    }
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" className='task_input' placeholder='Enter Your Task'
            name="task"
            autoComplete='off'
            onChange={handleOnChange} 
            value={taskData.task}/>

            <div className='task_form_buttom_line'>
                <div>
                    <Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')}/>
                    <Tag tagName='CSS'  selectTag={selectTag} selected={checkTag('CSS')}/>
                    <Tag tagName='JavaScript'  selectTag={selectTag} selected={checkTag('JavaScript')}/>
                    <Tag tagName='ReactJs'  selectTag={selectTag} selected={checkTag('ReactJs')}/>
                </div>

                <div>
                    <select className='task_status' name="status" onChange={handleOnChange} value={taskData.status}>
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>

                    <button type='submit' className='task_submit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header>

  )
}

export default TaskForm