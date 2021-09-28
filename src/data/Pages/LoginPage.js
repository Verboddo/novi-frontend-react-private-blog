import {Link} from "react-router-dom";

function LoginPage({login}) {

    return (
        <Link to="/blogposts">
            <button
                type="click"
                onClick={login}
            >Inloggen
            </button>
        </Link>
    )
}

export default LoginPage