const Note = ({ note, deleteHandler }) => {
    return <li>
      {note.name}
       {note.number}
       <button onClick={deleteHandler}>{`delete`}</button>
       </li>
  }
  
  export default Note

  
  