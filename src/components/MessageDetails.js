import React, { useState, useEffect} from 'react'
import { Link, useParams,useHistory } from 'react-router-dom'
import { getMessageById } from '../services/messagesServices';
import { useGlobalState } from '../utils/stateContext';

import { deleteMessage } from '../services/messagesServices';
const MessageDetails = () =>{
   const{store,dispatch} = useGlobalState();
  const  {loggedInUser} =store
    const[message,setMessage] =useState();
    const {id} =useParams()
    const history = useHistory()

  useEffect(()=>{
      getMessageById(id)
      .then(message => setMessage(message))
      .catch(error =>console.log(error))
  },[id])

  function removeMessage(e){
      e.preventDefault()
      deleteMessage(id)
      .then(message =>{
          dispatch({
              type:"deleteMessage",
              data:id
          })
        return  history.push("/messages")
    })
       
      .catch(err=>console.log(err))
  }
  return(
      <div>
          { message ?
          <>
          
              <h4>{message.text}</h4>
              <p>{message.username} {message.posted_at}</p> 
              {loggedInUser === message.username && <>
              <button onClick={()=> history.push(`/messages/update/&{id}`)}>Update message</button>
              <button onClick={removeMessage}>Delete Message</button>
              
             
             
          </>
        }
        </>
          :
          <>
          <p>invalid id for a message</p>
          <Link to ="/messages"> click here to go back to the home page</Link>
          </>
          }
      </div>
  )
}

export default MessageDetails