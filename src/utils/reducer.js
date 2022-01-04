export default function reducer(state,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case "setMessageList":{
            return{
                ...state,
                messageList:action.data
            }

        }
        case "addMessage":{
            return{
                ...state,
                messageList:[action.data, ...state.messageList]
            }
        }
        case"setLoggedInUser":{
            return{
                ...state,
                loggedInUser:action.data
            }

        }
        case"setToken":{
            return{
                ...state,
                auth:{
                    ...state.auth,
                token:action.data
                }
            }

        }
        case "deleteMessage":{
            const updatedMessageList = state.messageList.filter((message) => 
            message.id !== parseInt (action.data))
            return{
                ...state,
                messageList:updatedMessageList
            }
        }
        case "updateMessage": {
            const message = state.messageList.find(message => message.id === parseInt(action.data.id))
            const restOfList = state.messageList.filter((message)=>
                message.id !== parseInt(action.data.id)
            )
            const updatedMessage = Object.assign(message, action.data)
            return {
                ...state,
                messageList: [updatedMessage, ...restOfList]
            }
        }

    }

}