import nootnootAPI from '../config/api'

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