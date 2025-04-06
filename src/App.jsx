import React, {useState, useEffect} from 'react'

import './App.css'
import TaskForm from './components/TaskForm'

import TodoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'
import TaskColumn from './components/TaskColumn'

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks]
  )

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn icon={TodoIcon} title="To Do" tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn icon={DoingIcon} title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn icon={DoneIcon} title="Done" tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App