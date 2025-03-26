import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const StatisticLine = ({text, value}) => (
  
    <tr>
    <td>{text}</td> 
    <td>{value}</td> 
    </tr>
   
)
const Statistics = ({ good, bad, neutral, total })=> {
  if (total === 0){
  return (
    <div>
        No feedback given
    </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="avarage" value ={(good-bad)/total} />
      <StatisticLine text="positive" value ={good/total} />
      </tbody>
      </table>
)  
}    
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
      <Statistics  good={good} bad={bad} neutral= {neutral} total={total}/>
      
    </div>
  )
}

export default App


