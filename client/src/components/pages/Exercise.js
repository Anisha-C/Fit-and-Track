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
        const exercises = await fetch("/api/user/exercise")
        console.log(exercises)
        return exercises
    }
    return (
        <div class="ui two column centered grid">
            <div>
                <h1>Exercise Log</h1>
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