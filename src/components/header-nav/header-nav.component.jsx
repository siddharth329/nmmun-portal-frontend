import React, {Fragment} from 'react';
import {ReactComponent as MenuIconSVG} from '../../assets/icons/menuicon.svg';
import {ReactComponent as BellIconSVG} from '../../assets/icons/bellicon.svg';
import {NavLink} from "react-router-dom";
import './header-nav.component.scss';
import HamburgerMenuComponent from "../hamburger-menu/hamburger-menu.component";

const HeaderNavComponent = ({title}) => {
    return (
        <Fragment>
            <div className='headernav' id='headernav'>
                <div className="headernav__wrapper">
                    <label htmlFor='hamburgermenu' className="headernav__item">
                        <MenuIconSVG/>
                        <input type="checkbox" name="menu" id="hamburgermenu" className="headernav__menucheckbox"/>
                        <HamburgerMenuComponent />
                    </label>
                    {title && <div className="headernav__item">{title}</div>}
                    <NavLink to='/notifications' className="headernav__item" activeClassName="headernav__active">
                        <BellIconSVG/>
                    </NavLink>
                </div>
            </div>
            <div style={{height: `75px`}}>&nbsp;</div>
        </Fragment>
    )
}

export default HeaderNavComponent