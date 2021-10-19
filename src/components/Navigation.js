import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({loggedInUser, activateUser}) =>{
    
    function logout(e){
        e.preventDefault()
        console.log("log out")
       activateUser("")
    }
    
    return(
        <div>
            <Link to ="/messages">Home</Link>
           <Link to ="/about">About</Link>
            {loggedInUser?
                <>
                         {loggedInUser}
                         <Link to ="/newmessage">Post an new message</Link>
                         <Link to ="/messages" onClick ={logout}>SignOut</Link>
                </>
                :
                <>
                    <Link to ="/login">Login</Link>
                    <Link to ="/SignUp">Sign Up</Link>
                    Guest
                </>
            }
        </div>
    )
}

export default Navigation