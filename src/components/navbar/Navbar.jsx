import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
    
    <div className="wrapper">
            <Sidebar />
        <div className="social">
            <a href="https://github.com/Futuredevkev" target="_blank"><img src="/git.svg" alt="github"/></a>
            <a href="https://www.linkedin.com/in/kevin-moreira-3788b1272/" target="_blank"><img src="/link.svg" alt="linkedin"/></a>
        </div>
    </div>

    </div>
  )
}
