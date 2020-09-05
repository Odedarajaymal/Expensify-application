import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="nav-header" >
    <h1>Expensify</h1>
    <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink className="nav-link" to="/create" activeClassName="is-active">Create Expense</NavLink>
  
  </header>
 
);

export default Header;
