import { Link, useLocation } from 'react-router-dom'

const NavbarButton = ({route, text}) => {
    const location = useLocation()

    return (
        <div className={`uppercase navbar-button ${location.pathname === route ? "current" : null}`}>
            <Link to={route}>{text}</Link>
        </div>
    )
}

export default NavbarButton