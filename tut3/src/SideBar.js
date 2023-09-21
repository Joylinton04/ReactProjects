import { FaPlus } from 'react-icons/fa'
import ColorButton from './ColorButton'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className='sidebar'>
        <Link to={'/writenote'}><FaPlus className='Plus'/></Link>
        <ColorButton />
    </aside>
  )
}

export default SideBar;