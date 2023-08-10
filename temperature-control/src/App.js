import './App.css';
import { useState } from 'react'

function App() {
  const [temperature, setTemperature] = useState(29);

  const Increment = () => {
    setTemperature(temperature + 1);
  }

  const Decrement = () => {
    setTemperature(temperature - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className='heading'>Temperature Control Application</h1>
      </header>

      <main>
        <div className='container' >
          <div className='main-box' >
            <div className={ `temperature ${temperature < 30? "bg-cold": "bg-warm"}` } >
              <h2 className='figure' >{ temperature }&#0176;C</h2>
            </div>

            <div className='buttons'>
              <button className='button' onClick={ Increment }>+</button>
              <button className='button' onClick={ Decrement }>-</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
