import { commonAPI } from "./commonApi";
import {ServerUrl} from "./serverUrl"


export const AddTaskApi = async (reqBody)=>{
    return await commonAPI('post' ,`${ServerUrl}/task`, reqBody)
}

export const viewtaskApi = async ()=>{
    return await commonAPI('get' ,`${ServerUrl}/task` ,{})
}
export const getTaskApi = async (id)=>{
    return await commonAPI('get' , `${ServerUrl}/task`, {})
}
export const deleteTaskApi= async (id) =>{
    return await commonAPI('delete' , `${ServerUrl}/task/${id}` ,{})
}