import { useState } from "react"


function Toggle () {
    const [color, setColor] = useState('colorRed')
    return (
        <div>
            <h1 className={color}>Hello World</h1>
            <button onClick={() => setColor('colorBlue')}>color blue</button>
            <button onClick={() => setColor('colorRed')}>color blue</button>
        </div>
    )
}

export default Toggle