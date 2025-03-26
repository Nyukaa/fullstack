import { useState } from 'react'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  

  const handleAnecdote = () => {
    const updatedA = getRandomInt(0, 8)
    //selected=getRandomInt(0, 8)   
    setSelected(updatedA)

    
  };
  const handleVote = ()=>{
    const copy = [...votes]
    copy[selected] += 1  
    setVotes(copy)   
    console.log(votes)
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes </p>
      <Button onClick={handleAnecdote} text='next anecdote' />
      <Button onClick={handleVote} text='vote' />
    </div>
  )
}

export default App