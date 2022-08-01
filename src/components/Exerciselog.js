import { useState } from "react"

function Exerciselog(props) {
    const [exercise, setexercise] = useState({
        description: props.description,
        duration: props.duration,
        date: props.date,
    });

    function handleInput(e) {
        const { name, value } = e.target
        setexercise({ ...exercise, [name]: value })
    }
    return (
        <form>
            <input name="description" type="text" value={exercise.description} onChange={handleInput} />
            <input name="duration" type="text" value={exercise.duration} onChange={handleInput} />
            <input name="date" type="text" value={exercise.date} onChange={handleInput} />
        </form>
    )
}
export default Exerciselog