import { FaGit, FaGitAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footerLinks">
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaLinkedin/></a>
                <a href="#"><FaGithub/></a>
            </div>
            <p>coyright &copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer;