import Note from './Note'
const Persons = ({ personsToShow }) => {
    return(    
    <div> 
    <ul>
        {personsToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
    </ul>
    </div>
    )}
export default Persons
