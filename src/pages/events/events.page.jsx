import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {Component} from "react";
import {motion} from "framer-motion";
import {format} from "date-fns";

import './events.styles.scss';

const TEMP_EVENTS = [
    {id: 0, date: new Date(Date.now() - 86400 * 13), description: 'Early Bird Registration forms will be open for delegation.'},
    {id: 1, date: new Date(Date.now() - 86400 * 4), description: 'Orientation for NMMUN'},
    {id: 5, date: new Date(Date.now() + 86400 * 35), description: 'Forms for registrations will be rolled out.'},
    {id: 3, date: new Date(Date.now() + 10000000000), description: 'Training Session will be held.'}
]

class EventsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {events: TEMP_EVENTS};
    }

    componentDidMount() {

    }

    generateEvents = () => {
        let x = 0;
        const sortedEvents = this.state.events.sort((a, b) => a.date - b.date);
        const enhancedEvents = sortedEvents.reverse().map(event => {
            let showProgress;

            if (event.date > new Date()) {
                showProgress = false;
            } else {
                if (x === 0) {
                    showProgress = false;
                    x = 1;
                } else {
                    showProgress = true;
                }
            }

            return {...event, showProgress}
        })

        return enhancedEvents.reverse().map((event, index) => this.generateSingleEvent({...event, index}))
    }

    generateSingleEvent = ({id, date, description, showProgress, index}) => {
        return (
            <div className={`event`} key={id}>
                <div className="event__progressbar">
                    &nbsp;
                    <div className="event__progress" style={{display: showProgress ? 'block' : 'none'}}>&nbsp;</div>
                </div>
                <motion.div
                    className='event__content'
                    initial={{y: 40, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.4 + (index + 1) * 0.1, duration: 0.3}}
                >
                    <div className="event__triangle">&nbsp;</div>
                    <div className="event__header">
                        <div className="event__date">{format(date, 'do MMM, yyyy')}</div>
                        <div className="event__time">{format(date, 'p')}</div>
                    </div>
                    <div className="event__description">{description}</div>
                </motion.div>
            </div>
        )
    }

    render() {
        return (
            <motion.div
                className='eventspage'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                <HeaderNavComponent title='Events'/>
                <motion.div
                    className="eventspage__events"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.6}}
                >
                    {this.generateEvents()}
                </motion.div>
            </motion.div>
        )
    }
}

export default EventsPage;