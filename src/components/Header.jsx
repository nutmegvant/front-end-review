import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
                <Link className="nav-link" display='none' to='/'>Home</Link>
                <Link className="nav-link" to='/articles'>Articles</Link>
                <Link className="nav-link" to='/login'>Login</Link>
        </header>
    );
}

export default Header;
