import { FaLaptop,  FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

const Header = ({width}) => {
    return (
      <header className="header">
        <h1>React JS blog</h1>
        {width < 768 ? <FaMobileAlt /> 
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop />
        }
      </header>
    )
  }
  
  export default Header;