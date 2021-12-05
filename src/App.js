import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctor appointment",
            day: "FEB 5th 2:30pm",
            reminder: true
        },
        {id: 2, text: 'Meeting at school', day: 'FEB 6th 2:30pm', reminder: true},
        {id: 3, text: "Shopping", day: "FEB 5th 4:30pm", reminder: false}

    ])
    const [showForm, setShowForm] = useState(false)
    const deleteTask = (id) => {
        console.log('deleted clicked', id)
        const new_task = tasks.filter((task) => (task.id !== id))
        setTasks(new_task)
    }
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)
        ))
    }
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 100)
        setTasks([...tasks, {id, ...task}])
    }
    const showAdd = () => {
        setShowForm(!showForm)
    }
    return (
        <div className="container">
=            <Header showAdd={showAdd }  showForm={showForm} />

            {showForm && <AddTask onAdd={addTask}/>}

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
                <h2> No tasks! </h2>
            }

        </div>
    );
}


export default App;
