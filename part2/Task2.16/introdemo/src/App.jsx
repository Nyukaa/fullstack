import { useState, useEffect } from 'react'
import './index.css'
import personService from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
    })   
  }, [])
  const deleteObj = (id, name)=> {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  
  const addName = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName);
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one`)){
          const changedPerson = { ...person, number: newNumber }
          personService
          .update(changedPerson)
          .then(response => {
            setErrorMessage(
              `Number has changed '${newNumber}' `
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.map(p => p.id === person.id ? response.data : person))
          })
          
          
           // setPersons(notes.filter((n) => p.id !== id))
      
        }
      
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }  
    personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setErrorMessage(
          `Added '${nameObject.name}' `
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      
        setNewName('')
      })
      
        
    
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
    const handleFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilter(event.target.value)
    }
  
    const personsToShow = !newFilter
    ? persons
    : persons.filter(person => person.name.includes(newFilter))  
  return (
    <div>
       <h2>Phonebook</h2>
       <Notification message={errorMessage} />

       <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}/>
      
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} deletePerson={deleteObj}/>
      
    </div>
  )
}

export default App;