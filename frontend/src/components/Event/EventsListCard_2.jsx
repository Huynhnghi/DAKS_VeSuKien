
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventCard_2 from "./EventCard_2"
import './event_component.scss'


function EventsListCard_2(props) {
    const { events } = props;

    return (
        <div className='d-flex flex-wrap'>
            {events != null}{
                events.map((event, index) => (
                    <Link to={`/event-detail/${event?.slug}`} key={index} className='w-[45%] h-[150px]'>
                        <EventCard_2 event={event} key={index} />
                    </Link>

                ))
            }
        </div>
    )
}

EventsListCard_2.propTypes = {
    events: PropTypes.array
}


export default EventsListCard_2