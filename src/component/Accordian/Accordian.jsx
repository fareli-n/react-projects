
import {useState} from "react"
import data from "./data.js"
// import '../style.css'

export default function Accordian (){
    const [selected, setSelected] = useState(null)
    const [multipleSelected, setMultipleSelected] = useState([])
    const [multipleSelection, setMultipleSelection] = useState(false)


// Single Selection
    function handleSingleSelection (getCurrentId){
        setSelected (getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultipleSelection (getCurrentId){
        setMultipleSelected(prev => {
            const newArray = [...prev]
            const index= prev.indexOf(getCurrentId)
            if (index === -1) {
                return [...prev, getCurrentId]
            }else {
                newArray.splice(index, 1)
                return newArray
            }
        })
    }
    function handleEnableMultipleButton (){
        setMultipleSelection (prev => {
            if (prev) {
                setMultipleSelected ([])
            }else {
                setSelected(null)
            }
            return !prev
        })
    }
    return (
       <div className="wrapper">
           <button  onClick={()=> handleEnableMultipleButton ()} className = "btn">Enable Multiple Selection</button>
          
            { data.length > 0 || data ? 
                <div className="accordian">
                   {data.map ((obj) => (
                        <div className="box" key={obj.id}>
                            <div onClick={ multipleSelection ? 
                                            ()=> handleMultipleSelection(obj.id) :
                                            ()=> handleSingleSelection(obj.id) 
                                         } className="title">
                                <p className = "question" >{obj.question}</p>
                                <span>{selected === obj.id || multipleSelected.indexOf(obj.id) !== -1 ? 
                                                "-" : 
                                                "+"
                                        }
                                </span>
                            </div>
                            {/* {
                                selected === obj.id || multipleSelected.indexOf(obj.id) !== -1? 
                                <div className="answer">{obj.answer}</div> :
                                 null
                            } */}
                            {multipleSelection ?
                                multipleSelected.indexOf (obj.id) !== -1 &&  <div className="answer">{obj.answer}</div> :
                                selected === obj.id && <div className="answer">{obj.answer}</div>
                            }
                        </div>
                    ))}
                </div> :
            <div>No data found!</div>
            }
        </div>
    )
}