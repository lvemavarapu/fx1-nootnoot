import React, { useState,useEffect } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { createMessage,getMessageById,updateMessage } from '../services/messagesServices'
import { useParams } from 'react-router-dom'

const MessageForm =({history})=>{
    const {store, dispatch} = useGlobalState()
    const {loggedInUser}= store
    const {id} = useParams()

    const initialFormData = {
        m_text: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    useEffect(() =>{
        getMessageById(id)
        .then(message =>{
            setFormData({
                m_text: message.text
            })
        })
    }, [id])

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(id){
            const data =  {id: id, ...formData}
            updateMessage(data)
            .then(message =>{
                dispatch({type: "updateMessage",data:message})
                history.push("/messages")
            })
        }
        else{
        createMessage(formData)
        .then((message) =>{
            dispatch({
                type: "addMessage",
                data:message
            })
        })
        .catch(error => console.log(error))
    }
        return history.push("/messages")
    }
    

    return(
        <div>
            {loggedInUser?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">Share your thoughts {loggedInUser}?</label>
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