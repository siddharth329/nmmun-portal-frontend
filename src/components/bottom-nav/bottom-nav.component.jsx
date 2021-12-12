import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion'
import {ReactComponent as HomeIconSVG} from '../../assets/icons/homeicon.svg';
import {ReactComponent as CalendarIconSVG} from "../../assets/icons/calendaricon.svg";
import {ReactComponent as FolderIconSVG} from '../../assets/icons/foldericon.svg'
import {ReactComponent as SupportIconSVG} from "../../assets/icons/supporticon.svg";
import {ReactComponent as TeamIconSVG} from "../../assets/icons/teamicon.svg";
import './bottom-nav.styles.scss';
import React, {Fragment, useState} from "react";

const BottomNavComponent = () => {
    const [highlight, setHighlight] = useState(true);
    setTimeout(() => setHighlight(false), 2000)

    return (
        <Fragment>
            <div style={{height: `76px`}}>&nbsp;</div>
            <div
                className="bottomnav"
                id='bottomnav'
                style={{paddingBottom: window.navigator.appVersion.includes('iPhone') ? '2.1rem' : '1.3rem'}}
                // initial={{y: 50, opacity: 0, background: '#fff'}}
                // animate={{y: 0, opacity: 1}}
                // transition={{duration: 0.4}}
            >
                <NavLink exact to='/' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    <HomeIconSVG/>
                    <div className="bottomnav__linkname">Home</div>
                </NavLink>
                <NavLink to='/events' className="bottomnav__linkgroup" activeClassName='bottomnav__active'>
                    {highlight && (
                        <motion.div
                            initial={{width: 0, height: 0}}
                            animate={{width: '8rem', height: '8rem'}}
                            transition={{duration: 0.8, repeat: 5}}
                            className='bottomnav__highlight'
                        >
                            &nbsp;
                        </motion.div>
                    )}
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
            {/*{ && <div className="iphone-panel">&nbsp;</div>}*/}
        </Fragment>
    )
}

export default BottomNavComponent;