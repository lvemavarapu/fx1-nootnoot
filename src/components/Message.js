import React from 'react'
import { Link } from 'react-router-dom'

const Message = ({message}) =>(
    <div>
        {message ?
            <>
                <Link to={`/messages/${message.id}`}>
                    <h4>{message.text}</h4></Link>
                <p>{message.username} {message.posted_at}</p>
            </>
            :
            <>
                <p>invalid id for a message</p>
                <Link to="/messages"> click here to go back to the home page</Link>
            </>}
    </div>
)

export default Message