import React from 'react';

// stateless widget
const Weather = (props) => (
    <div>
        { props.city && props.temperature && <p>Location : { props.city }, { props.country } </p>}
        { props.temperature && <p>Temperature : { props.temperature }&#8451;</p>}
        { props.humidity && <p>Humidity : { props.humidity } </p>}
        { props.description && <p>Condition : { props.description } </p>}
        { props.error && <p>{props.error}</p>}                
    </div>
);

export default Weather;