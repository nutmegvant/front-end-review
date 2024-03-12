import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <span className="navigation-bar">
                <Link to='/'>Home</Link>
            </span>
            <span className="navigation-bar">
                <Link to='/articles'>Articles</Link>
            </span>
            <span className="navigation-bar">
                <Link to='/users'>Users</Link>
            </span>
        </header>
    );
}

export default Header;
