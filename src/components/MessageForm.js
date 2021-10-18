import React, { useState } from 'react'

const MessageForm =({history, loggedInUser, addMessage})=>{
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