import {useState} from "react"

function Exercise(props){
    const [exercise, setexercise] = useState({
        username: props.username,
        description: props.description,
        duration: props.duration,
        date: props.date,
      }) ;

 return (
        <div id="Exercise" class="intro">
            <h1 class ="">Exercise</h1>
            <p></p>
        </div>

    )
}
export default Exercise