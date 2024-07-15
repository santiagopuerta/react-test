import { Link, useNavigate } from "react-router-dom"
import { getPathByName } from "../routes/RouteConfig"

export function Navbar() {
  const email = localStorage.getItem("email")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("email")
    navigate(getPathByName("login"))
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={getPathByName("home")}>
          AppName
        </Link>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to={getPathByName("home")}>
                Home
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {email ? (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {email}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <li className="nav-item">
                <Link className="navbar-brand" to={getPathByName("login")}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
