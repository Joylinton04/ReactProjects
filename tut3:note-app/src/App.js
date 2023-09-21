import './App.css';
import Home from './Home';
import WriteNotes from './WriteNotes';
import SideBar from './SideBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import { useState, useEffect } from 'react';
import apiRequest from './api/apiRequest';


function App() {
  const [notes, setNotes] = useState([])

  const [noteTitle, setNoteTitle] = useState('')
  const [noteBody, setNoteBody] = useState('')
  const [color, setColor] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const notes = async() => {
      try{
        const response = await apiRequest.get('/notes')
        setNotes(response.data)
      }
      catch(err) {
        console.log(err.message)
      }
    }
    notes()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMM dd, yyyy pp')
    const newNote = {id:id, title:noteTitle, text:noteBody, datetime:datetime}
    try{
      const response = await apiRequest.post('/notes', newNote)
      const allNote = [...notes, response.data]
      console.log(response.data)
      setNotes(allNote)
      setNoteTitle('')
      setNoteBody('')
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    try{
      const response = await apiRequest.delete(`/notes/${id}`)
      const note = notes.filter(note => note.id !== id)
      setNotes(note)
    } 
    catch(err) {
      console.log(err.message)
    }
   }

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route exact path='/' element={<Home notes={[...notes].reverse()} setNotes={setNotes} color={color} setColor={setColor} handleDelete={handleDelete}/>}/>
        <Route exact path='/writenote' element={<WriteNotes noteTitle={noteTitle} setNoteTitle={setNoteTitle} noteBody={noteBody} setNoteBody={setNoteBody} handleSubmit={handleSubmit}/>}/>
      </Routes>
    </div>
  );
}

export default App;
