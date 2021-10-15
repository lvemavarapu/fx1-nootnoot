import React from 'react'
import Message from './Message'

const Messages =({messageList})=>{
    console.log(messageList)
    return(
        <div>
            <h3>Messages</h3>
            {messageList.map((message, index)=>
                <Message key={index} message={message}/>
            )}
        </div>
    )
}

export default Messages

// import React from 'react'
// import Message from './Message'

// const Messages = ({messageList}) =>{
    
//     return(
//         <div>
//             <h3>Messages</h3>
//             {messageList.map((item, index) =>
//                 <Message msg={item}/>
//             )}
//         </div>
//     )
// }

// export default Messages
