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

    }

}