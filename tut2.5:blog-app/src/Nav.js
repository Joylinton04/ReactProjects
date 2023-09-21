import { Link } from 'react-router-dom'
const Nav = ({search, setSearch}) => {
    return (
      <nav className="nav">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="inputText"></label>
            <input 
                type="text"
                id='inputText'
                placeholder='Search Posts'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/post' className='link'>Post</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
        </ul>
      </nav>
    )
}
  
  export default Nav;