import Contact from "./Contact";
import DevInfo from "./DevInfo";
import Skills from "./Skills";
import Footer from './Footer'
import Projects from "./Projects";
import Cursor from "./Cursor";
import {useRef} from "react";

const Home = () => {
  const refCursor = useRef()
    const TrackCursor = (e) => {
      let x = e.clientX
      let y = e.clientY
  
      refCursor.current.style.left = x + 'px'
      refCursor.current.style.top = y + 'px'
    }
  
  return (
    <div className="Home" onMouseMove={(e) => TrackCursor(e)}>
        <Cursor refCursor={refCursor}/>
        <DevInfo/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;