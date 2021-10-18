import React from 'react';
import { Link } from 'react-router-dom'

const NotFound =()=>{
    return(
        <div>
            <p> 404 Error</p>
            <Link to ="messages">click here to go to homepage</Link>
        </div>
    )
}
export default NotFound