import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'

const MessageForm =({history})=>{
    const {store, dispatch} = useGlobalState()
    const {loggedInUser,messageList}= store

    const initialFormData = {
        text: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        addMessage(formData.text)
        //clean the form after submitting
        setFormData({
            ...formData,
            text: ""
        })
        return history.push("/messages")
    }
    function addMessage(text){

        const message = {
          id:getNextId(),
          text: text,
          user: loggedInUser
        }
        // setMessageList(
        //   (messageList) => [message, ...messageList]
        // )
        dispatch({
          type:"addMessage",
          data:message
        })
      }
      function getNextId(){
        const ids = messageList.map(msg =>msg.id) //3 2 1
        return ids.sort()[ids.length-1] +1
      }

    return(
        <div>
            {loggedInUser?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">What's on your mind {loggedInUser}?</label>
                    <input type="text" name="text" id="text" value={formData.text} onChange={handleFormData}/>
                    <input type="submit" value="Send" />
                </form>
            : 
                <p>you're not logged in</p>
            }
            
        </div>
    )
}

export default MessageForm