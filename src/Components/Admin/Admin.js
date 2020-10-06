import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      
        <Link style={{ textDecoration: "none" }} to="/adminControl">
          <button className="btn btn-primary"> <img style={{width: "25px"}} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/users-alt%201.png" alt=""/> Total User</button>
        </Link>
        <br/> <br/>
        <Link style={{ textDecoration: "none" }} to="/adminAddEvent">
          <button className ="btn btn-danger"> <img style={{width: "25px"}} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/plus%201.png" alt=""/> Add Event</button>
        </Link>
      
    </div>
  );
};

export default Admin;