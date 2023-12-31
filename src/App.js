import Head from './components/Head'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'June 18th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Special Class',
        day: 'June 22nd at 8:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Arts Class',
        day: 'June 25th at 4:30pm',
        reminder: false,
    }
])
//Add Task
  const addTask = (task) => {
    const id =Math.floor(Math.random() *10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

//Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>  task.id !==id))
  }
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Head onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask  onAdd={addTask} />}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> ) : ('No Tasks to Show')}
    </div>
  )
}

export default App
