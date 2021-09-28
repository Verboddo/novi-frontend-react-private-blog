import {NavLink} from "react-router-dom";


function NavBar({isAuthenticated, logout}) {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                </li>
                {!isAuthenticated &&
                <li>
                    <NavLink to="/login" exact activeClassName="active-link">Login pagina</NavLink>
                </li>
                }
                {isAuthenticated &&
                <li>
                    <NavLink to="/blogposts" exact activeClassName="active-link">Blog Overzicht</NavLink>
                </li>
                }
                {isAuthenticated &&
                <NavLink to="/" exact activeClassName="active-link">
                <button
                    type="click"
                    onClick={logout}
                >uitloggen</button>
                </NavLink>
                }
            </ul>
        </nav>
    )
}

export default NavBar