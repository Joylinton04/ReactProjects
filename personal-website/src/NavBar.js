import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Aside from './Aside'
import { Link } from "react-router-dom";


const NavBar = () => {
  const { ref: navRef, inView: navIsVisible } = useInView()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`nav ${navIsVisible ? 'animateNav' : ''}`} ref={navRef}>
        {windowWidth < 710 ?
            <>
              <h1>J.A.A</h1> 
              <div>
                  <label className="hamburger-menu">
                    <input type="checkbox"/>
                  </label>
                  <Aside/>
              </div>
            </>
            :
            <>
              <h1>ADU A. JOY</h1>
              <div>
                  <ul className="bigScreen">
                      <li><Link to='/'>Home</Link></li>
                      <li>Skills</li>
                      <li><Link to='/personalprojects'>Projects</Link></li>
                      <li>Hire me</li>
                  </ul>
              </div>
            </>
        }
    </nav>
  )
}

export default NavBar;