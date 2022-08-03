import { useState, useEffect } from "react"
import Intakelog from "../Intakelog"

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
function Intake(props) {
    const [savedIntakes, setsavedIntakes] = useState(tempdata)
    //Delete line above and uncomment bottom once backend has food route
    // const [savedExercises, setsavedExercises] = useState(getExercises())

    useEffect(() => {
    setsavedIntakes(getIntakes())
        
    }, [])


    async function getIntakes() {
        const Intakes = await fetch("/intake")
        console.log(Intakes)
        return Intakes
    }
    return (
        <div id="Intake" className="intro">
            <h1 className="">Intake Log</h1>
            {savedIntakes.length && savedIntakes.map((ex, i) => <Intakelog key={ex.description + i} description={ex.description} calories={ex.calories} date={ex.date} />)}
        </div>

    )
}

export default Intake
