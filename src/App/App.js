import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [startStop, setStartStop] = useState(
        {name:'Start', toDo: () => setTimeOn(true)});


  useEffect(() => {
   let interval = null;

    if (timeOn) {
      setStartStop({name:'Stop', toDo: () => (setTimeOn(false), setTime(0))})
      interval = setInterval(() => {
       setTime(prevTime => prevTime + 1)
      }, 1000);
    } else {
      setStartStop({name:'Start', toDo: () => setTimeOn(true)})
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [timeOn])

  return (
    
    <div className="App">
      <h1>Timer</h1>

      <div className="h3">
        <span>{('0'+ Math.floor((time/3600) % 24)).slice(-2) + ': '}</span>
        <span>{('0'+ Math.floor((time/60) % 60)).slice(-2) + ': '}</span>
        <span>{('0'+ (time % 60)).slice(-2)}</span>
      </div>

      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button onClick = {startStop.toDo}
                type="button" 
                className="btn btn-outline-dark">
                  {startStop.name}</button>
        <button onDoubleClick = {() => setTimeOn(false)}
                type="button" 
                className="btn btn-outline-dark">
                  Wait</button>
        <button onClick = {()=> (setTime(0), setTimeOn(true))}
                type="button" 
                className="btn btn-outline-dark">
                  Reset</button>
      </div>
    </div>
  );
}

export default App;
