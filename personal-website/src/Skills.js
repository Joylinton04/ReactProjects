import { useEffect, useRef, useState } from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const { ref: languagesRef, inView: langIsVisible } = useInView()
    const [langIntersecting, setLangIsIntersecting] = useState()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('animateLang', entry.isIntersecting)
            })
        })
        const lang = document.querySelectorAll('.lang')
        lang.forEach((lan) => {
            observer.observe(lan)
        })
    },[])

  return (
    <section className="section-2">
        <h2>My Skills</h2><br />
        <p ref={languagesRef} className={` here ${langIsVisible ? 'animateSkill' : ''}`}>Here are my Skills</p>
        <div className="tools">
            <ul>
                <li>
                    <p> <FaHtml5/> HTMl</p>
                    <span></span>
                </li>
                <li>
                    <p> <FaCss3/> CSS</p>
                    <span></span>
                </li>
                <li>
                    <p> <FaNodeJs/> JAVASCRIPT</p>
                    <span></span>
                </li>
                <li>
                    <p> <FaReact/> REACT</p>
                    <span></span>
                </li>
            </ul>
            <div className="languages">
                <div className="html lang">
                    <p>Html</p>
                </div>
                <div className="CSS lang">
                    <p>CSS</p>
                </div>
                <div className="Javascript lang">
                    <p>Javascript</p>
                </div>
                <div className="react lang">
                    <p>React</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;