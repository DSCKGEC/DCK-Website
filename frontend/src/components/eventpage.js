import React, {Component} from 'react';
import Footer from './footer.js';
import Navbar from './navbar.js';

class EventPage extends Component{
    render(){
        return(
            <div className="body">
                <Navbar />
                <Footer />
            </div>
        );
    }
}
export default EventPage;
