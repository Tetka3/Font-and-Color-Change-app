import "./style.scss";
import { useState } from "react";

function App() {

  const [pixet, setPixet] = useState();
  const [color, setColor] = useState("")
  const [click, setClick] = useState(0)

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handlePixet = (e) => {
        setPixet(e.target.value);
    }

    const handleSubmit = () => {

    }

    const handleClick = () => {
      setClick((prev) => setClick(prev + 1))
    }

  return (
    <div className="app">
      <div className="top">
        <div className="navbar">
          This text is {pixet} pixels. <br/>
          The color is {color}.<br/>
          Number of likes: {click}.
        </div>
      </div>
      <div className="center">
        <div className="side">
          <input type="text" value={pixet} onChange={handlePixet}/>
          <input type="text" value={color} onChange={handleColor}/>
          <button onSubmit={handleSubmit} >Submit</button>
        </div>
        <div className="home" style={{fontSize: `${pixet}px`, color  }} >
    <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

</p>
    </div>
      </div>
      <div className="bottom">
      <div className="footer">
      Like the content.<br/>
      <button onClick={handleClick}>Like</button>
    </div>
      </div>           
    </div>
  )
}

export default App
