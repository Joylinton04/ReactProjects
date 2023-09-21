import './App.css';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import PostPage from './Postpage';
import NewPost from './NewPost';
import Edit from './Edit';
import Nav from './Nav';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import apiRequest from './api/apiRequest';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();
  const { width } = useWindowSize()

  useEffect(()=>{
   const fetchPost = async() => {
    try{
      const response = await apiRequest.get('/post')
      setPosts(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err.message)
    }
   }
   fetchPost()
  },[])
 
  useEffect(()=>{
    const filteredResults = posts.filter((post)=> ((post.body)).toLowerCase().includes(search.toLowerCase())
    || ((post.title)).toLowerCase().includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  },[posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMM dd, yyyy pp')
    const newPostItem = {id, title:postTitle, datetime:datetime, body:postBody}
    try{
      const response = await apiRequest.post('/post', newPostItem)
      const newPost = [...posts, response.data]
      setPosts(newPost)
      setPostBody('')
      setPostTitle('')
      navigate('/')
    } catch (err) {
      console.log('Error', err.message)
    }
  }

  const handleDelete = async (id) => {
    try{
      await apiRequest.delete(`/post/${id}`)
      const postsLists = posts.filter(post => post.id !== id)
      setPosts(postsLists)
      navigate('/')
    } catch (err) {
      console.log('Error', err.message)
    }
  }

  const handleUpdate = async(id) => {
    const datetime = format(new Date(), 'MMM dd, yyyy pp')
    const updatedPost = {id, title:editTitle, datetime:datetime, body:editBody}

    try{
      const response = await apiRequest.put(`/post/${id}`, updatedPost)
      setPosts(posts.map(post => post.id === id ? {...response.data} : post))
      setEditTitle('')
      setEditBody('')
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className='App'>
        <Header width={width}/>
        <Nav search={search} setSearch={setSearch}/>
          <Routes>
            <Route exact path='/' element={<Home posts= {searchResults}/>}/>
            <Route exact path='/post' element={<NewPost
              postTitle={postTitle} 
              setPostTitle={setPostTitle} 
              postBody={postBody} 
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
              />}/>
            <Route exact path='/edit/:id' element={<Edit
              setEditTitle={setEditTitle} 
              setEditBody={setEditBody}
              editBody={editBody} 
              editTitle={editTitle}
              handleUpdate={handleUpdate}
              posts={posts}
              />}/>
            <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
            <Route path='/about' Component={About}/>
            <Route path='*' Component={Missing}/>
          </Routes>
        <Footer posts={posts}/>
    </div>
  );
}

export default App;