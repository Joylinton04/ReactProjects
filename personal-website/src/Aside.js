import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <aside className="aside">
        <ul className="mobileView">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/personalprojects">Projects</Link></li>
            <li>Hire me</li>
        </ul>
    </aside>
  )
}

export default Aside;