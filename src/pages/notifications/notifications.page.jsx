import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {format} from "date-fns";

import './notifications.styles.scss';

const TEMP_NOTIFICATIONS = [
    {id: 1, title: 'Lorem Ipsum', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Thanks for watching notification.', date: new Date(Date.now() - 1000000000), priority: 'NORMAL'},
    {id: 2, title: 'Lorem Ipsum', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Thanks for watching notification.', date: new Date(Date.now() - 100000000), priority: 'CRITICAL'},
    {id: 3, title: 'Lorem Ipsum', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Thanks for watching notification.', date: new Date(Date.now() + 100000000), priority: 'NORMAL'},
    {id: 4, title: 'Lorem Ipsum', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Thanks for watching notification.', date: new Date(Date.now() + 1000000000), priority: 'NORMAL'}
]

const NotificationsPage = () => {
    return (
        <div className='notificationspage'>
            <HeaderNavComponent title='Notifications' />

            <div className="notificationspage__notifications">
                {TEMP_NOTIFICATIONS.map(notification => (
                    <div className={`notification ${notification.priority === 'CRITICAL' ? 'notification--critical' : ''}`}>
                        <div className="notification__head">
                            <div className="notification__title">{notification.title}</div>
                            <div className="notification__date">{format(notification.date, 'do MMM, yyyy')}</div>
                        </div>
                        <div className="notification__body">{notification.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationsPage;