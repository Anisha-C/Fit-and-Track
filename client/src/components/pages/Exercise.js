import { useState, useEffect } from "react";
import Exerciselog from "../Exerciselog";
// import '../../semantic/dist/components/grid.css';
// import '../../semantic/dist/components/list.css';


function Exercise(props) {
    const [savedExercises, setsavedExercises] = useState(null)
    const [newExercise, setnewExercise] = useState({
        description: "",
        duration: "",
        date: "",
    })
    useEffect(() => {
        fetch("http://localhost:3001/exercise").then(res => {
            return res.json()
        }).then((data) => setsavedExercises(data))
    }, [])

    // useEffect(() => {
    //     getExercise();
    //     console.log(getExercise())
    // }, [])

    useEffect(() => {
        console.log(savedExercises)

    }, [savedExercises])

    function handleexerciseInput(e) {
        const { name, value } = e.target
        setnewExercise(prev => ({ ...prev, [name]: value }))
    }

    async function getExercise() {
        const exercises = await fetch("/exercise")
        console.log(exercises)
        return exercises
    }
    function saveExercise() {

        fetch("http://localhost:3001/exercise/add", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExercise)
        }).then((res) => {
            console.log(res)
            setnewExercise({
                description: "",
                duration: "",
                date: "",
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div class="ui two column centered grid">
            <div>
                <h1>Exercise Log</h1>
                <div>
                    <label for="description" >Description</label>
                    <input id="description" type="text" onChange={handleexerciseInput} value={newExercise.description} name="description" />
                    <label for="duration" >Duration</label>
                    <input id="duration" type="text" onChange={handleexerciseInput} value={newExercise.duration} name="duration" />
                    <label for="date" >Date</label>
                    <input id="date" type="text" onChange={handleexerciseInput} value={newExercise.date} name="date" />
                    <button onClick={saveExercise}>Submit</button>
                </div>
                <div className="ui list">
                    <div class="item">
                        {savedExercises && savedExercises.map((ex, i) =>
                            <Exerciselog
                                key={ex.description + i}
                                description={ex.description}
                                duration={ex.duration}
                                date={ex.date} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Exercise