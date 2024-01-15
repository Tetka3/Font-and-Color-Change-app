import { useState } from "react";
import "./style.scss";

const Side = () => {
    const [pixet, setPixet] = useState();
    const [color, setColor] = useState("")

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handlePixet = (e) => {
        setPixet(e.target.value);
    }

  return (
    <div className="side">
        <input type="text" value={pixet} onChange={handlePixet}/>
        <input type="text" value={color} onChange={handleColor}/>
        <button>Submit</button>
    </div>
  )
}

export default Side