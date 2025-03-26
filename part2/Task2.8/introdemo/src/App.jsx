import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 222, id: 0}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }  
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      
      <div>name: <input value={newName} onChange={handleNameChange} /> </div>
      <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
      <div> <button type="submit">add</button></div> 
        
      </form>
     
      <h2>Numbers</h2>
      <ul>
        {persons.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  )
}

export default App;