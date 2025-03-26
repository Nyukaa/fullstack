import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  
 const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)   
    setTotal(updatedGood + bad + neutral)
  }

  const handleBadClick = () => { 
    const updatedBad = bad + 1;
    setBad(updatedBad);  
    setTotal(updatedBad + good + neutral)
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + bad + good)
  };

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      
      <h1>statisticks</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>avarage {(good-bad)/total}</p>
      <p>positive {good/total}</p>
    </div>
  )
}

export default App


