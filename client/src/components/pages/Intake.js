import { useState, useEffect } from "react"
import Intakelog from "../Intakelog"

//dummy data for viewing while backend is being set up

function Intake(props) {
    const [savedIntakes, setsavedIntakes] = useState(null)
    // const [savedWater, setsavedWater] = useState(null)
    //Delete line above and uncomment bottom once backend has food route
    // const [savedExercises, setsavedExercises] = useState(getExercises())
    const [newIntakes, setnewIntakes] = useState({
        description: "",
        calories: "",
        date: "",
        // amount: "",
        // hour: "",
        // day: "",
    })

    useEffect(() => {
        getIntakes();

    }, [])
    useEffect(() => {
        console.log(savedIntakes)

    }, [savedIntakes])

    function handleintakeInput(e) {
        const { name, value } = e.target
        setnewIntakes(prev => ({ ...prev, [name]: value }))
    }

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


        // fetch("http://localhost:3001/water", {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },

        // }).then(res => {
        //     return res.json()
        // }).then(res => {
        //     setsavedWater(res)
        // })


    }
    function saveIntake() {
        fetch("http://localhost:3001/intake/add", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newIntakes)
        }).then((res) => {
            console.log(res)
            setnewIntakes({
                description: "",
                calories: "",
                date: "",
                // amount: "",
                // hour: "",
                // day: "",
            })
        }).catch(err => {
            console.log(err)
        })
        //.then()
    }
    return (
        <div id="Intake" className="intro">
            <h1>Intake Log</h1>
            <div>
                <label for="description" >Description</label>
                <input id="description" type="text" onChange={handleintakeInput} value={newIntakes.description} name="description" />
                <label for="calories" >Calories</label>
                <input id="calories" type="text" onChange={handleintakeInput} value={newIntakes.calories} name="calories" />
                <label for="date" >Date</label>
                <input id="date" type="text" onChange={handleintakeInput} value={newIntakes.date} name="date" />
                {/* <label for="amount" >Amount</label>
                <input id="amount" type="text" onChange={handleintakeInput} value={newIntakes.amount} name="amount" />
                <label for="hour" >Hour</label>
                <input id="hour" type="text" onChange={handleintakeInput} value={newIntakes.hour} name="hour" />
                <label for="day" >Date</label>
                <input id="day" type="text" onChange={handleintakeInput} value={newIntakes.day} name="day" /> */}
                <button onClick={saveIntake}>Submit</button>
            </div>
            {savedIntakes && savedIntakes.map((ex, i) =>
                <Intakelog
                    key={ex.description + i}
                    description={ex.description}
                    calories={ex.calories}
                    date={ex.date}
                    // amount={savedWater[i].amount}
                    // hour={savedWater[i].hour}
                    // day={savedWater[i].day} 
                    />
            )}
        </div>

    )
}

export default Intake
