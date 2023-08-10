import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

    const countIncrement = () => {
      setCount(count + 1);
    }

    const countDecrement = () => {
      setCount(count - 1);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading' >Counter Application</h1>
      </header>
      <main>
        <section className='main-content' >
          <h2>Count: {count} </h2>
          <button onClick={ countIncrement } className='button' >Increment</button>
          <button onClick={ countDecrement } className='button' >Decrement</button>
        </section>
      </main>
    </div>
  );
}

export default App;
