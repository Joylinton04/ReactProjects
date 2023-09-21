import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import PersonalProjects from './PersonalProjects';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/personalprojects' element={<PersonalProjects/>}/>
      </Routes>
    </div>
  );
}

export default App;