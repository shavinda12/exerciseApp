import { Exercise } from "./Exercise";

export interface ExerciseCardProps{
    onCardPress:(exercise:Exercise)=>void
    exercise:Exercise
}