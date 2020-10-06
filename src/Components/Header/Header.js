import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><img className="bg-light p-2" style={{ borderRadius: "10px", width: "150px" }} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/Group%201329.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link style={{ textDecoration: "none" }} to="/home" ><button className="btn btn-light">Home</button> </Link>
              </li>

            </ul>
            <ul className="navbar-nav ml-auto text-center">
              <Link to="/adminControl" className="m-1"><button className="btn btn-light">Admin</button></Link>
              <Link to="/userEvents" className="m-1"><button className="btn btn-light">My Events</button></Link>
              {
                loggedInUser.email ? <button className="btn btn-danger m-1" onClick={() => setLoggedInUser({})}>Sign Out, {loggedInUser.name}</button> :
                  <Link to="/login"><button className="btn btn-danger m-1">Sign In</button></Link>
              }
            </ul>
          </div></div>
      </nav>
    </div>
  );
};

export default Header;