
import { useState } from 'react';
// import './App.css'
import Greeting from './components/Greeting';
import PeopleForm from './components/PeopleForm';

function App() {

  // variables
  // states
  // functions

  // let count = 0;
  let [count, setcount] = useState(0);


  const handleClick = () => {
    // count++;
    // console.log(count);
    setcount(count++);
  }



  return (
    <>

      <div>
        <h1>Get started</h1>
        <h2>{count}</h2>
        <button onClick={handleClick}>ClickMe</button>
      </div>



      <Greeting username="Razan" pet="Sherry" />

      <PeopleForm />

    </>
  )
}

export default App;
