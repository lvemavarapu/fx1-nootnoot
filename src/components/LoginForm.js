import React, { useState } from 'react'

const LoginForm =({history, activateUser})=>{
    console.log(history)
    const initialFormData = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log("You clicked login: ", formData.email)
        //console.log(formData.password)
        activateUser(formData.email)
        return history.push("/messages")

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm