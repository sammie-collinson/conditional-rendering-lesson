import React from 'react';

const Messages = (props) => {
    return(
        <div>
        <ul>
        {
            props.unreadMessages.map((message) => (
                <li key={message}>
                {message}
                </li>
            ))
        }
        </ul>
        </div>
    )
}

export default Messages;