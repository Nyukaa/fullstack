import Note from './Note'
const Persons = ({ personsToShow, deletePerson }) => {
    return(    
    <div> 
    <ul>
        {personsToShow.map(person => (
          <Note key={person.id} note={person}
          deleteHandler={() => deletePerson(person.id, person.name)}
          />
        ))}
    </ul>
    </div>
    )}
export default Persons
