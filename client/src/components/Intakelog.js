import { useState } from "react"
import Intake from "./pages/Intake";

function Intakelog(props) {
    const [Food, setFood] = useState({
        description: props.description,
        calories: props.calories,
        date: props.date,
    });

    const [Water, setWater] = useState({
        amount: props.amount,
        hour: props.hour,
        date: props.date,
    });

    function handleFoodInput(e) {
        const { name, value } = e.target
        setFood({ ...Food, [name]: value })
    }

    function handleWaterInput(e) {
        const { name, value } = e.target
        setWater({ ...Water, [name]: value })
    }
    return (
        <div>
            <form>
                <input name="description" type="text" value={Food.description} onChange={handleFoodInput} />
                <input name="calories" type="text" value={Food.calories} onChange={handleFoodInput} />
                <input name="date" type="text" value={Food.date} onChange={handleFoodInput} />
            </form>

            <form>
                <input name="amount" type="text" value={Water.amount} onChange={handleWaterInput} />
                <input name="hour" type="text" value={Water.hour} onChange={handleWaterInput} />
                <input name="date" type="text" value={Water.date} onChange={handleWaterInput} />
            </form>
        </div>
    )
}
export default Intakelog