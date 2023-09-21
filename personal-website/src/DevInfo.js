import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const DevInfo = () => {
    const { ref: webDev, inView: webDevIsVisible } = useInView()
    const { ref: webIcon, inView: iconIsVisible } = useInView()


  return (
    <section className="devInfo">
        <div className="dev-contain">
            <div className="info">
                <h3 ref={webDev} className={`${webDevIsVisible ?  'animateDev' : ''}`}>Hello, I'm Joy</h3>
                <p>Frontend web developer</p>
                <button>Resume <FaDownload/></button><br/>
                <p ref={webIcon} className={`${iconIsVisible ? 'animateIcon' : ''}`}>
                    <span><FaLinkedin/></span>
                    <span><FaTwitter/></span>
                    <span><FaGithub/></span> 
                </p>
            </div>
            <div className="devImg">
                <img src="./devImg/2211.w026.n002.2759B.p1.2759.jpg" alt="developer"/>
            </div>
        </div>
    </section>
  )
}

export default DevInfo;