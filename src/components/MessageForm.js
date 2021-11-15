import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { createMessage } from '../services/messagesServices'

const MessageForm =({history})=>{
    const {store, dispatch} = useGlobalState()
    const {loggedInUser}= store

    const initialFormData = {
        m_text: ""
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
        createMessage(formData)
        .then((message) =>{
            dispatch({
                type: "addMessage",
                data:message
            })
        })
        .catch(error => console.log(error))

        //addMessage(formData.text)
        //clean the form after submitting
        setFormData({
            ...formData,
            m_text: ""
        })
        return history.push("/messages")
    }
    // function addMessage(text){

    //     const message = {
    //       id:getNextId(),
    //       text: text,
    //       user: loggedInUser
    //     }
    //         dispatch({
    //             type:"addMessage",
    //             data:message
    //           })
        
    //     .catch(error => console.log(error))
       
    //   }
    //   function getNextId(){
    //     const ids = messageList.map(msg =>msg.id) //3 2 1
    //     return ids.sort()[ids.length-1] +1
    //   }

    return(
        <div>
            {loggedInUser?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">What's on your mind {loggedInUser}?</label>
                    <input type="m_text" name="m_text" id="m_" value={formData.m_text} onChange={handleFormData}/>
                    <input type="submit" value="Send" />
                </form>
            : 
                <p>you're not logged in</p>
            }
            
        </div>
    )
}

export default MessageForm