import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from './Box'

const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([
           {
            id:1,
            src: "/devImg/PassWord-Generator.webp",
            text: "An incredible password generator built using Html css and Javascript"
           },
           {
            id:2,
            src: "/devImg/reactnoteapp.png",
            text: "A note app built using react.js, where all data are being stored on a JSON server npm module"
           },
           {
            id:3,
            src: "/devImg/weatherapp.png",
            text: "A weather app, an API based project, use to check weather condition at any location"
           }
    ])

    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('animateProject', entry.isIntersecting)
            })   
        })
        const boxes = document.querySelectorAll('.box')
        boxes.forEach((box)=>{
            observer.observe(box)
        })
    },[])

  return (
    <section className="fprojects">
        <h2>Projects</h2>
        <span>here are some of my personal projects</span>
        <div className="projectInfo">
            {projectInfo.map(project => (
               <Box key={project.id} project={project}/>
            ))}
        </div>
        <Link to={'/personalprojects'} id="moreprojects">see more of my projects...</Link>
    </section>
  )
}

export default Projects;