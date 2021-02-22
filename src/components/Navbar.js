import { NavLink } from 'react-router-dom';

function Navbar() {

    <div className="navbar">
        <h1>Simple TODO</h1>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new-todo">New TODO</NavLink>
        </div>
    </div>

}

export default Navbar;