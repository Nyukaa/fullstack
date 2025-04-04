import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: 0,
      id: String(persons.length + 1),
    }  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      <div>
      name: <input value={newName} onChange={handleNameChange} />
        <button type="submit">add</button>
        </div>
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