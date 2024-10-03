import React from "react"
import { useState } from "react"

export default function Randomcolor (){
    const [typeOfColor , setTypeOfColor] =useState ("hex")
    const [color,setColor] = useState("#000000")
  
    function generateRandom(){
        if (typeOfColor === "hex") {
            // #465A07
            const hexArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
            let hexColor="#"
            for (let i=0; i< 6; i++){
                hexColor+= hexArray[createRandomNumber(0,16)]
        } 
        setColor(hexColor)

    }else {
        // RGB(0-256,0-256, 0-256)
        let rgbColor= `rgb(${createRandomNumber(0,255)},${createRandomNumber(0,255)},${createRandomNumber(0,255)})`
        setColor(rgbColor)
    }
    
}
function createRandomNumber (min, max) {
    return  Math.floor(Math.random() * (max - min )) + min
}

React.useEffect(generateRandom,[typeOfColor])
    return (
        <div style ={{
            minHeight :"100vh",
            backgroundColor: color,
            display:"grid",
            gridTemplate: '1fr',
            alignItems: "start",
            justifyContent: "center"

        }}>
            <div >
                <button className="btn" onClick={()=> setTypeOfColor ("hex")}>Create Hex </button>
                <button className="btn" onClick={()=> setTypeOfColor("rgb")}>Create RGB </button>
                <button className="btn" onClick={generateRandom}>Generate random color </button>
            </div>
                <h1 style={{textAlign: "center", fontSize:"3rem"}}>{`${typeOfColor} Color`}</h1>
                <h2 style={{textAlign: "center", fontSize:"4rem"}}>{color}</h2>
        </div>
    )
}