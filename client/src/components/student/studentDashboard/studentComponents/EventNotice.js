import React from 'react';
import './studentComponentCss/Event-Notice.css';
import { Link } from 'react-router-dom';

function EventNotice() {
    var c=1;
    return (
      <div className="event-notices">
          <h1 id="event_title">Upcoming Events</h1>
          <div className="event-notice" >
            
            <Link >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</Link>
            <br/>
            <Link >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</Link>
            <br/>
            <Link >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</Link>
            <br/>
            <Link >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</Link>
            <br/>
            <Link >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</Link>
          </div>
        
      </div>
    );
}

export default EventNotice;