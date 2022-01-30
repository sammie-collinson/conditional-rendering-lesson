import React from 'react';

const Mailbox = (props) => {
    const unreadMessages = props.unreadMessages


    return(
        <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && (
            <h2>You have {unreadMessages.length} unread messages.</h2>
        )}
        {/* <ul>{
            unreadMessages.map((message) => (
                <li>
                {message}
                </li>
            ))
        }
        </ul> */}
        </div>
    );
}

export default Mailbox;