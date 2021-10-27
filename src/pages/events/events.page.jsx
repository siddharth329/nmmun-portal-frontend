import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {Component} from "react";
import {format} from "date-fns";

import './events.styles.scss';

const TEMP_EVENTS = [
    {id: 1, date: new Date(Date.now() - 10000000000), description: 'Event Started'},
    {id: 2, date: new Date(Date.now() - 10000), description: 'Orientation'},
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

        return enhancedEvents.reverse().map(event => this.generateSingleEvent(event))
    }

    generateSingleEvent = ({id, date, description, showProgress}) => {
        return (
            <div className={`event`} key={id}>
                <div className="event__progressbar">
                    &nbsp;
                    <div className="event__progress" style={{display: showProgress ? 'block' : 'none'}}>&nbsp;</div>
                </div>
                <div className='event__content'>
                    <div className="event__triangle">&nbsp;</div>
                    <div className="event__header">
                        <div className="event__date">{format(date, 'do MMM, yyyy')}</div>
                        <div className="event__time">{format(date, 'p')}</div>
                    </div>
                    <div className="event__description">{description}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='eventspage'>
                <HeaderNavComponent title='Events'/>
                <div className="eventspage__events">
                    {this.generateEvents()}
                </div>
            </div>
        )
    }
}

export default EventsPage;