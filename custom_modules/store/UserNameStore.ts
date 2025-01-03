import { create } from "zustand";


interface LoggedUserStore{
    loggedUserName:string,
    setUserName:(name:string)=>void
}

const useUserNameStore=create<LoggedUserStore>(set=>({
    loggedUserName:"",
    setUserName:(userName:string)=>set(()=>({loggedUserName:userName})),
}))

export default useUserNameStore;