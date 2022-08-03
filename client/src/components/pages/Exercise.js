import { useState, useEffect } from "react";
import Exerciselog from "../Exerciselog";
import '../../semantic/dist/components/grid.css';
import '../../semantic/dist/components/list.css';
//dummy data for viewing while backend is being set up
const tempdata = [
    {
        description: "Cardio",
        duration: "30",
        date:""
    },
    {
        description: "Bench Press",
        duration: "15",
        date: ""
    },
    {
        description: "Legs",
        duration: "45",
        date: ""
    },
]
// const [newExercise, setnewExercise] = useState({
//     description: "",
//     duration: "",
//     date: "",
// })

// function saveExercise() {
//     fetch("http://localhost:3001/exercise/add", {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newExercise)
//     }).then((res) => {
//         console.log(res)
//         setnewExercise({
//             description: "",
//             duration: "",
//             date: "",
//         })
//     }).catch(err => {
//         console.log(err)
//     })}

// function handleexerciseInput(e) {
//     const { name, value } = e.target
//     setnewExercise(prev => ({ ...prev, [name]: value }))
// }

function Exercise(props) {
    const [savedExercises, setsavedExercises] = useState(tempdata)

    useEffect(() => {
        fetch("/exercise").then(res => {
            setsavedExercises(res)
        })
    }, [])
    //Delete line above and uncomment bottom once backend has exercise route
    // const [savedExercises, setsavedExercises] = useState(getExercises())
    async function getExercises() {
        const exercises = await fetch("/exercise")
        console.log(exercises)
        return exercises
    }
    return (
        <div class="ui two column centered grid">
            <div>
                <h1>Exercise Log</h1>
                {/* <div>
                <label for="description" >Description</label>
                <input id="description" type="text" onChange={handleexerciseInput} value={newExercise.description} name="description" />
                <label for="duration" >Duration</label>
                <input id="duration" type="text" onChange={handleexerciseInput} value={newExercise.duration} name="duration" />
                <label for="date" >Date</label>
                <input id="date" type="text" onChange={handleexerciseInput} value={newExercise.date} name="date" />
                <button onClick={saveExercise}>Submit</button>
            </div> */}
                <div className="ui list">
                    <div class="item">
                        {savedExercises.length && savedExercises.map((ex, i) => <Exerciselog key={ex.description + i} description={ex.description} duration={ex.duration} date={ex.date} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Exercise