import { FaGithub} from "react-icons/fa";


const Card = ({project}) => {
  return (
    <div className="card">
        <h2>{project.name}</h2>
        <p>{project.text}</p>
        <span><a href="#"><FaGithub/></a></span> 
    </div>
  )
}

export default Card;