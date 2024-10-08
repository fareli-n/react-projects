import { useState } from "react";
import Modal from "./Modal"
import "./modal.css"
export default function ModalPopup() {
    const [showModal , setShowModal] = useState(false)
    function handleClick (){
        setShowModal( prev => !prev)
    }
    return(
        <div className="main">
            <button className="btn"
            onClick ={handleClick}>Open Modal</button>
            {
                showModal ? 
                <Modal header={<div>Header</div>}
                        body={<div>Body content of the modal</div>} 
                        footer={<div>Footer of the modal</div>}
                        onChange={handleClick}/> :
                null
            }
        </div>
    )
}