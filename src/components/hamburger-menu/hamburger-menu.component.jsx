import {Link} from "react-router-dom";
import {ReactComponent as MenuCrossIconSVG} from "../../assets/icons/menucrossicon.svg";
import './hamburger-menu.styles.scss';

const HAMBURGER_MENU_LINKS = [
    {name: 'About', url: '/about'},
    {name: 'Blog', url: '/blog'},
    {name: 'Committee', url: '/committee'},
    {name: 'Team', url: '/team'},
    {name: 'Resources', url: '/resources'},
    {name: 'Events', url: '/events'},
    {name: 'Support', url: '/support'}
]

const HamburgerMenuComponent = () => {
    return  (
        <div className='hamburgermenu'>
            <label htmlFor="hamburgermenu" className='hamburgermenu__label'>
                <MenuCrossIconSVG />
            </label>
            <ul className="hamburgermenu__links">
                {HAMBURGER_MENU_LINKS.map((link, index) => (
                    <li className='hamburgermenu__link' key={index}>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default HamburgerMenuComponent;