import { NavLink, useLocation } from "react-router-dom"
import "./Navigator.css"

const Navigator = () => {
    const location = useLocation();

    return (
      <div className="container nav text-uppercase d-flex justify-content-center justify-content-lg-around align-items-center py-5 ">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className={`nav-link nav-tab ${location.pathname === '/' ? 'active' : ''}`}
          >
            all
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/fsd"
            className={`nav-link nav-tab ${location.pathname === '/fsd' ? 'active' : ''}`}
          >
            fullstack development
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/data-science"
            className={`nav-link nav-tab ${location.pathname === '/data-science' ? 'active' : ''}`}
          >
            data science
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cyber-security"
            className={`nav-link nav-tab ${location.pathname === '/cyber-security' ? 'active' : ''}`}
          >
            cyber security
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/career"
            className={`nav-link nav-tab ${location.pathname === '/career' ? 'active' : ''}`}
          >
            career
          </NavLink>
        </li>
      </div>
    );
  };
  
export default Navigator;