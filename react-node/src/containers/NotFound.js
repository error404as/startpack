import React from 'react';

const NotFound = (props) => {
    return (
        <div>
            <h1>Not Found - {props.location.pathname}</h1>
        </div>
    )
}

export default NotFound;
