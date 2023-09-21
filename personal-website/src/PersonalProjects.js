import { useState } from "react";
import Card from "./Card";

const PersonalProjects = () => {
  const [projectInfo, setProjectInfo] = useState([
    {
        id: 1,
        name:"Password Generator",
        text: "An incredible password generator built using Html css and Javascript"
    },
    {
        id: 2,
        name:"Blog App",
        text: "A very basic API with CRUD functionalities for Blog Posts."
    },
    {
        id: 3,
        name:"Space X Homepage Clone",
        text: "A homepage clone of one of the most popular tech websites in the world, SpaceX"
    },
    {
        id: 4,
        name:"Note App",
        text: "A note app built using react.js, where all data are being stored on a JSON server npm module"
    },
    {
        id: 5,
        name:"IOS Calculator",
        text: "A Calculator built with the design of an IOS mobile Calulator using HTML CSS and JavaScript"
    },
    {
        id: 6,
        name:"Math Quiz Game",
        text: "A very basic math addition game for kids"
    },
    {
        id: 7,
        name:"Weather App",
        text: "A weather app, an API based project, use to check weather condition at any location"
    }
  ])

  const [projectsWorkingOn, setProjectsWorkingOn] = useState([
    {
        id: 1,
        name:"Spotify clone",
        text: "An incredible password generator built using Html css and Javascript",
        progress: 60
    },
    {
        id: 2,
        name:"Twitter clone",
        text: "An incredible password generator built using Html css and Javascript",
        progress: 5
    }
  ])

  return (
    <section className="personalProjects">
        <h1>Here are my personal projects</h1>
        <div className="projectCards">
            {projectInfo.map(project => (
                <Card key={project.id} project={project}/>
            ))}
        </div>
        <h1>Currently working on...</h1>
        <div className="working-on">
            {projectsWorkingOn.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>progress {project.progress}%</p>
                   { <span style={{
                        display: 'block',
                        width: project.progress + '%',
                        height: '2px',
                        backgroundColor: '#009600',
                        marginTop: '2rem'
                    }}>
                    </span>
                    }
                </div>
            ))}
        </div>
    </section>
  )
}

export default PersonalProjects;