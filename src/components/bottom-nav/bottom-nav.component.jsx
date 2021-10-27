import {NavLink} from "react-router-dom";
import {ReactComponent as HomeIconSVG} from '../../assets/icons/homeicon.svg';
import {ReactComponent as CalendarIconSVG} from "../../assets/icons/calendaricon.svg";
import {ReactComponent as FolderIconSVG} from '../../assets/icons/foldericon.svg'
import {ReactComponent as SupportIconSVG} from "../../assets/icons/supporticon.svg";
import {ReactComponent as TeamIconSVG} from "../../assets/icons/teamicon.svg";
import './bottom-nav.styles.scss';
import React, {Fragment} from "react";

const BottomNavComponent = () => {
    return (
        <Fragment>
            <div style={{height: `76px`}}>&nbsp;</div>
            <div className="bottomnav" id='bottomnav'>
                <NavLink exact to='/' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <HomeIconSVG/>
                    <div className="bottomnav__linkname">Home</div>
                </NavLink>
                <NavLink to='/events' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <CalendarIconSVG/>
                    <div className="bottomnav__linkname">Events</div>
                </NavLink>
                <NavLink to='/resources' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <FolderIconSVG/>
                    <div className="bottomnav__linkname">Resources</div>
                </NavLink>
                <NavLink to='/support' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <SupportIconSVG/>
                    <div className="bottomnav__linkname">Support</div>
                </NavLink>
                <NavLink to='/details' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <TeamIconSVG/>
                    <div className="bottomnav__linkname">Details</div>
                </NavLink>
            </div>
        </Fragment>
    )
}

export default BottomNavComponent;