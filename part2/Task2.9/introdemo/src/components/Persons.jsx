import Note from './Note'
const Persons = ({ newFilter }) => {
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
