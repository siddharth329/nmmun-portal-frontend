import React from "react";
import LayoutContainer from "./containers/layout/layout.component";
import {BrowserRouter, Route} from 'react-router-dom';
import {generateTokenForMessaging} from "./configs/firebase";

import HomePage from './pages/home/home.page';
import ResourcesPage from './pages/resources/resources.page';
import EventsPage from "./pages/events/events.page";
import SupportPage from "./pages/support/support.page";
import DetailsPage from "./pages/details/details.page";
import NotificationsPage from "./pages/notifications/notifications.page";
import GalleryPage from "./pages/gallery/gallery.page";
import BlogsPage from "./pages/blogs/blogs.page";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firebaseMessagingTokenFound: false};
    }

    componentDidMount() {
        generateTokenForMessaging();
        if (process.env.NODE_ENV === 'production') {
            generateTokenForMessaging();
        }
    }

    render() {
        return (
            <BrowserRouter>
                <LayoutContainer>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/events' component={EventsPage}/>
                    <Route exact path='/resources' component={ResourcesPage}/>
                    <Route exact path='/support' component={SupportPage}/>
                    <Route exact path='/details' component={DetailsPage}/>
                    <Route exact path='/notifications' component={NotificationsPage}/>
                    <Route exact path='/gallery' component={GalleryPage}/>
                    <Route exact path='/blogs' component={BlogsPage} />
                </LayoutContainer>
            </BrowserRouter>
        );
    }

}

export default App;
