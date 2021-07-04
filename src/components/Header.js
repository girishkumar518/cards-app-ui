mport React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Card Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Cards List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Card
        </NavLink>
      </div>
    </header>
  );
};

export default Header;