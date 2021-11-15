import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authServices'

const SignUpForm =({history})=>{

    const{dispatch} = useGlobalState()

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
       signUp(formData)
       .then(({username, jwt}) =>{
           sessionStorage.setItem("username", username)
           sessionStorage.setItem("token",jwt)
        dispatch({
            type: "setLoggedInUser",
            data:username
            
        })
        dispatch({
            type: "setToken",
            data:jwt
            
        })
       })
       .catch(error =>{console.log(error)})
       
        return history.push("/messages")
        

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="username" name="username" id="username" value={formData.username} onChange={handleFormData}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                <label htmlFor="password_confirmation">Password_Confirmation</label>
                <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignUpForm