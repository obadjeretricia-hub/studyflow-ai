import './App.css';
function App() {
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
          <input type="text" placeholder= "Add a new task.."/>
          <button>Add Task</button>
        </div>
          <ul className="task-list">
            <li>Finish math assignment</li>
            <li>Study data structures</li>
            <li>Update Resume</li>
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
