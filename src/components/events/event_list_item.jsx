import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = (props) => {
  console.log("props", props);
  const eventId = props.event.id;
  const eventName = props.event.Name;
  const eventDesc = props.event.description.slice(0, 300);
  const eventImg = props.event.image_url;
  return (
    <li>
      <Link to={`events/${eventName}`}><h3>{eventName}</h3></Link>
      <img src={eventImg}></img>
      <p>{eventDesc}...</p>
    </li>
  );
};

export default EventListItem;
