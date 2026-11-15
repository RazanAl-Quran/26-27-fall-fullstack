
import { useState } from 'react';
import './App.css'

function App() {

  // variables
  // states
  // functions

  const element = <h1>Hello, world!</h1>; //jsx
  // const element = React.createElement('h1', null, 'Hello, world!');


  let username = "Student";
  const greeting = <h2>Hello, {username} 👋</h2>;
  const year = new Date().getFullYear();

  // let count = 0;

  let [count, setcount] = useState(0);


  const handleClick=()=>{
    // count++;
    // console.log(count);

setcount(count++);    
  }



  return (
    <>
      {element}
      <div>
        <h1>Get started</h1>
        <h2>{count}</h2>
        <button onClick={handleClick}>ClickMe</button>
      </div>

      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>🎓 Welcome to My React App</h1>
        {greeting}
        <p>This is a simple JSX example with no state or props.</p>
        <ul style={{ listStyle: "none" }}>
          <li>✔ JSX uses JavaScript expressions inside {"{}"}</li>
          <li>✔ You can embed variables and functions</li>
          <li>✔ All tags must be closed properly</li>
        </ul>
        <footer style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
          &copy; {year} My React Classroom
        </footer>
      </div>

    </>
  )
}

export default App;
