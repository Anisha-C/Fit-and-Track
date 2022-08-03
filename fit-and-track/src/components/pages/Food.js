import { useState } from "react"
import Exerciselog from "../Intakelog"

import '../../semantic/dist/components/grid.css';
import '../../semantic/dist/components/header.css';
//dummy data for viewing while backend is being set up
const tempdata = [
    {
        description: "d",
        calories: "g",
        date: "f"
    },
    {
        description: "a",
        calories: "b",
        date: "c"
    },
    {
        description: "l",
        calories: "m",
        date: "n"
    },
]
function Food(props) {
    const [savedFoods, setsavedFoods] = useState(tempdata)
    //Delete line above and uncomment bottom once backend has food route
    // const [savedExercises, setsavedExercises] = useState(getExercises())
    async function getExercises() {
        const Foods = await fetch("/api/user/food")
        console.log(Foods)
        return Foods
    }
    return (
        <div class="ui two column centered grid">
            <div class="center aligned column">
                <h1>Food Log</h1>
            </div>
            <div class="four column centered row">
                {savedFoods.length && savedFoods.map((ex, i) => <intakelog key={ex.description + i} description={ex.description} duration={ex.duration} date={ex.date} />)}
            </div>
        </div>

    )
}



// function Food(){

//     return (
//         <div>
//             <h1>Food</h1>
//         </div>

//     )
// }
export default Food