import { FaTrashAlt } from "react-icons/fa";

const Note = ({ notes, setNotes, color, setColor, handleDelete}) => {

   const handleColorChange = () => {
    const backgroundColors = ['#009600','#5cc428', '#eeba4b','#0096ff', '#ff5f5f']
    const randomColors = Math.floor(Math.random() * backgroundColors.length)
    return backgroundColors[randomColors]
   }

  return (
    <>
        {notes.map((note) => 
            <div key={note.id} className='text' style={{backgroundColor: handleColorChange()}}>
                <h3>{note.title}</h3>
                <p className="txt">{note.text}</p>
                <div className="time-fns">
                    <p>{note.datetime}</p>
                    <FaTrashAlt onClick={() => handleDelete(note.id)} style={{cursor: 'pointer'}}/>
                </div>
            </div>
        )}
    </>
  )
}

export default Note;