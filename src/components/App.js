import React, { useEffect, useReducer } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import SignUpForm from './signUpForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import initialMessageList from '../data/message-list.json'
import reducer from '../utils/reducer'
import { StateContext } from '../utils/stateContext'
import { getMessages } from '../services/messagesServices'


const App = () => {
  //define the initialstate
  const initialstate ={
    messageList: [],
    loggedInUser: sessionStorage.getItem("username") || null,
    auth:{token:sessionStorage.getItem("token") || null}

  }
  //useReducer has two arguments
  // reducer function
  // initial state (same as useState)
  //store is where the state is stored
  //dispatch invoked the reducer function
  const [store, dispatch] = useReducer(reducer, initialstate )
  const {messageList} = store
  

  useEffect(()=>{
  getMessages() 
  .then((messages)=> {
      dispatch({
          type: "setMessageList",
          data: messages
  })
  }) 
  .catch(error=> {console.log(error)})
    
  },[])

  function getMessage(id){
    return messageList.find(m=> m.id === parseInt(id))
  }

  

  return (
    <div >
      <h1>NootNoot</h1>
      <StateContext.Provider value={{store, dispatch}}>
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Redirect to="messages" />
            </Route>
            <Route exact path="/messages"  component={Messages}/>
            <Route exact path="/messages/:id" 
              render={(props)=> <Message {...props} 
                message={getMessage(props.match.params.id)}/>}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={LoginForm} /> 
            <Route exact path="/signUp" component={SignUpForm} /> 
            <Route exact path="/newmessage" component={MessageForm} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </StateContext.Provider>    
    </div>
  )
}

export default App