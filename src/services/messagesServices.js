import nootnootAPI from "../config/api";



export async function getMessages(){
   const response = await nootnootAPI.get("/api/messages")
   console.log(response)
     return response.data
}

export async function createMessage(data){
    const response = await nootnootAPI.post("/api/messages",data)
    console.log(response)
        return response.data

}
export async function getMyMessages(){
  const response = await nootnootAPI.get("/api/messages/user")
  return response.data
}
export async function getMessagesByUser(username){
    
  const response = await nootnootAPI.get(`/api/messages/?username=${username}`)
  console.log(response)
      return response.data
  }
  export async function getMessageById(id){
    
    const response = await nootnootAPI.get(`/api/messages/${id}`)
    console.log(response)
        return response.data
}
export async function deleteMessage(id){
  const response = await nootnootAPI.delete(`/api/messages/${id}`)
  console.log(response.data)
      return response.data

  }
  export async function updateMessage(data){
    const response = await nootnootAPI.put(`/api/messages/${data.id}`, data)
    return response.data
}