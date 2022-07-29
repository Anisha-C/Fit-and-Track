import { useState } from "react"
import Exerciselog from "../Exerciselog"
//dummy data for viewing while backend is being set up
const tempdata = [
    {
        description: "d",
        duration: "g",
        date: "f"
    },
    {
        description: "a",
        duration: "b",
        date: "c"
    },
    {
        description: "l",
        duration: "m",
        date: "n"
    },
]
function Exercise(props) {
    const [savedExercises, setsavedExercises] = useState(tempdata)
    //Delete line above and uncomment bottom once backend has exercise route
    // const [savedExercises, setsavedExercises] = useState(getExercises())
    async function getExercises() {
        const exercises = await fetch("/api/user/exercise")
        console.log(exercises)
        return exercises
    }
    return (
        <div id="Exercise" className="intro">
            <h1 className="">Exercise Log</h1>
            {savedExercises.length && savedExercises.map((ex, i) => <Exerciselog key={ex.description + i} description={ex.description} duration={ex.duration} date={ex.date} />)}
        </div>

    )
}
export default Exercise