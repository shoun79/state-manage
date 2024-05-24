import { createContext, useState } from 'react';
import './App.css'
import Counter from './pages/Counter';
import LongForm from './components/LongForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }


  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <Counter></Counter>

      <LongForm></LongForm>
    </COUNTER_CONTEXT.Provider>

  )
}

export default App
