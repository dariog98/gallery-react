import RoutesNavigation from "../constants/RoutesNavigation"
import NavbarButton from "./NavbarButton"

const Navbar = () => {

    return (
        <div className="flex flex-column align-items-center justify-content-center py-1">
            <h1 className="main-title uppercase">Gallery</h1>

            <div className="flex gap-1 py-1">
                <NavbarButton route={RoutesNavigation.Home} text={"Home"}/>
                <NavbarButton route={RoutesNavigation.Random} text={"Random"}/>
            </div>

        </div>
    )
}

export default Navbar