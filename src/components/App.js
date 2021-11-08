import React, { useEffect, useReducer } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import Message from './Message'
import reducer from '../utils/reducer'
import { StateContext } from '../utils/stateContext'


const App = () => {


  const initialState ={
    messageList:[],
    loggedInUser:""
  }
  const[store,dispatch]=useReducer(reducer,initialState)
  const{messageList} =store
   

  useEffect(()=>{
    
    dispatch({
      type: "setMessageList",
      data:initialMessageList
    })
  },[])
  
  return (
    <div>
          <h1>NootNoot</h1>
          <StateContext.Provider value ={{store,dispatch}}>
          <BrowserRouter>
          <Navigation/>
          <Switch>
          <Route exact path = "/">
            <Redirect to ="messages" />
            </Route>
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/messages" component = {Messages} />
      
        <Route exact path = "/messages/:id"
        render={(props)=> <Message {...props}
        message={messageList.find(msg =>msg.id === props.match.params.id)}
        />}
        />
          <Route exact path ="/login" component = {LoginForm} />
         <Route exact path="/newmessage" component = {MessageForm} />
          
          <Route component = {NotFound} />
          </Switch>
          </BrowserRouter>
    </StateContext.Provider>
    </div>
  )
}

export default App
