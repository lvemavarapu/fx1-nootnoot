import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

const Navigation = () =>{
    const {store,dispatch} = useGlobalState()
    const{loggedInUser} = store
 
    function logout(e){
        e.preventDefault()
        console.log("log out")
        sessionStorage.clear()
    //    activateUser("")
    dispatch({
        type: "setLoggedInUser",
        data:""
    })
    dispatch({
        type: "setToken",
        data:""
    })
    
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
                         <Link to ="/messages/myMessages">My Messages</Link>
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