export default function reducer(state,action){
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

    }

}