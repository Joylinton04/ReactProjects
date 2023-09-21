import ColorButton from "./ColorButton";
import { Link } from "react-router-dom";

const WriteNotes = ({ noteTitle, setNoteTitle, noteBody, setNoteBody, handleSubmit }) => {

  return (
    <main className="writenotes">
        <h2>WriteNotes</h2>
        <form className="form" onSubmit={handleSubmit}>
            <input t
                type="text" 
                placeholder="Enter your title"
                value={noteTitle} 
                onChange={(e) => setNoteTitle(e.target.value)}
                required
                className="title"
            />
            <input t
                type="text" 
                placeholder="Enter your note"
                value={noteBody} 
                onChange={(e) => setNoteBody(e.target.value)}
                required
                className="body"
            />
        <div>
            <span></span>
            <span></span>
            <button type="submit" className="submit">Add</button>
        </div>
        </form>
        <Link to='/'><p>back to all note</p></Link>
    </main>
  )
}

export default WriteNotes;