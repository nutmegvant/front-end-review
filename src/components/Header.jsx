import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            {/* <span className="navigation-bar"> */}
                <Link className="nav-link" display='none' to='/'>Home</Link>
            {/* </span> */}
            {/* <span className="navigation-bar"> */}
                <Link className="nav-link" to='/articles'>Articles</Link>
            {/* </span> */}
            {/* <span className="navigation-bar"> */}
                <Link className="nav-link" to='/users'>Users</Link>
            {/* </span> */}
        </header>
    );
}

export default Header;
