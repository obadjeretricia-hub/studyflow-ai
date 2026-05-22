import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
      "Finish math assignment",
      "Study data structures",
      "Update Resume"
    ]);
  const [newTask, setNewTask] = useState("");
  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  function deleteTask(indexToDelete){
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  }
  return (
    <div className="app">
      <header>
        <h1>StudyFlow AI</h1>
        <p>Your AI productive assistant for school</p>
      </header>
      
    <main className="dashboard">
      <section className="card">
        <h2>Today's Tasks</h2>
        <div className="task-input">
          <input type="text"
           placeholder= "Add a new task..."
           value={newTask}
           onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
          <ul className="task-list">
            {tasks.map((task, index) =>(
              <li key={index}>
                <span>{task}</span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
      </section>
      <section className="card">
        <h2>AI Study Plan</h2>
          <p>
            Add your tasks, and let studyFlow AI help organize your priorities.
          </p>
        <button>Generate Plan</button>
      </section>
       
    </main>
      
    </div>
  );
}

export default App;
