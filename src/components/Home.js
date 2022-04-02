import { useState } from "react"
import Navbar from "./Navbar"

function Home() {
    const [angka, setAngka] = useState(1)
    // let angka = 1
    return(
        <div>
            ini angka {angka}
            <button onClick={() => setAngka(2)}>ubah angka</button>
        </div>
    )
}

export default Home