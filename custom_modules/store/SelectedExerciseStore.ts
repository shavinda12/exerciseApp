import {create} from "zustand"
import { Exercise } from "../types/Exercise"

interface SelectedExerciseStore{
    selectedExercises:Exercise[],
    increment:(exercise:Exercise)=>void,
    decrement:(id:string)=>void
}

const useSelectedExerciseStore=create<SelectedExerciseStore>(set=>({
    selectedExercises:[],
    increment:(exercise:Exercise)=>set(store=>({selectedExercises:[...store.selectedExercises,exercise]})),
    decrement:(id:string)=>set(store=>({selectedExercises:store.selectedExercises.filter(exercise=>exercise.id !== id)}))
}))

export default useSelectedExerciseStore