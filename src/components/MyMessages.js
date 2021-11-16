import React from 'react'
import Message from './Message'
import { useState, useEffect } from 'react'
import { getMessagesByUser } from '../services/messagesServices'
//import { useGlobalState } from '../utils/stateContext'

const MyMessages =({history})=>{
    // const{store} = useGlobalState()
    // const{loggedInUser}= store
      const[myMessageList, setMyMessageList] = useState([])
      useEffect(()=>{
    const user =sessionStorage.getItem("username")
        getMessagesByUser(user)
        .then((messages) =>{
            setMyMessageList(messages)
        })
        .catch(err => console.error(err)) 

        },[]) 
       
    return(
        <div>
            <h3>Messages</h3>
            {myMessageList.map((message, index)=>
                <Message key={index} message={message}/>
            )}
        </div>
    )
}

export default MyMessages