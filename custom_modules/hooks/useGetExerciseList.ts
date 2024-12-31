import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios"
import { Exercise } from "../types/Exercise";


const useGetExerciseList=()=>{

    const getExerciseList=async()=>{
        try{
        const {data}=await axios.get<Exercise[]>("https://exercisedb.p.rapidapi.com/exercises?limit=20&offset=0",{
            headers:{
                Accept:"application/json",
                    "x-rapidapi-ua": "RapidAPI-Playground",
                    "x-rapidapi-key": "ca0786b167msh4af9b5c81b30228p12cfe5jsnca942f971877",
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            }
        })
        console.log(data);
        return data;
        }catch(e){
            if(e instanceof AxiosError){
                const error=e.response?.data || "Request failed"
                throw new Error(error)
                        }
            console.log(e)
                throw new Error("Un expected error occured")
        }
    }

    return useQuery<Exercise[],Error>({
        queryKey:["exerciseList"],
        queryFn:getExerciseList
    })

}

export default useGetExerciseList;