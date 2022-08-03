import { useState, useEffect } from "react"
import Intakelog from "../Intakelog"

//dummy data for viewing while backend is being set up

function Intake(props) {
    const [savedIntakes, setsavedIntakes] = useState(null)
    //Delete line above and uncomment bottom once backend has food route
    // const [savedExercises, setsavedExercises] = useState(getExercises())
    const [newIntakes, setnewIntakes] = useState({
        
    })
    useEffect(() => {
        getIntakes();

    }, [])
    useEffect(() => {
        console.log(savedIntakes)

    }, [savedIntakes])

    function getIntakes() {

        fetch("http://localhost:3001/intake", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        }).then(res => {
            return res.json()
        }).then(res => {
            setsavedIntakes(res)

        })


    }
    return (
        <div id="Intake" className="intro">
            <h1>Intake Log</h1>
            <div>
                <input type="text" value={""} name="" />
                <input type="text" value={""} name="" />
                <input type="text" value={""} name="" />
                <input type="text" value={""} name="" />
                <input type="text" value={""} name="" />
                <input type="text" value={""} name="" />

            </div>
            {savedIntakes && savedIntakes.map((ex, i) => <Intakelog key={ex.description + i} description={ex.description} calories={ex.calories} date={ex.date} />)}
        </div>

    )
}

export default Intake
