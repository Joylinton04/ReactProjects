import Note from './Note'


const Home = ({ notes, setNotes, color, setColor, handleDelete }) => {
  return (
    <main className="Home">
        <h1>Note</h1>
        <div className='note'>
        {notes.length ? 
            <Note notes={notes} setNotes={setNotes} setColor={setColor} color={color} handleDelete={handleDelete}/> :
            <p>no note to display</p>    
        }
        </div>
    </main>
  )
}

export default Home