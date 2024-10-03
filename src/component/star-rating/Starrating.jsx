import React from 'react'
import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import "./star-rating.css"


export default function StarRating ({numberOfStars = 5}){
    const [hover,setHover] = useState(0)
    const [rating,setRating] = useState(0)

    const star = [...Array(numberOfStars)].map( (_, index)=> {
        index+= 1
            return <FaStar className={`fa-2x ${index <=(hover || rating) ? "active" : "inactive"}`} 
                            key = {index} 
                            onClick = {()=>handleOnClick(index)} 
                            onMouseMove ={()=>handleOnMouseMove(index)}
                            onMouseLeave={()=> handleOnMpuseLeave(index)}
                    />
        })

        function handleOnClick(getCurrentIndex){
            setRating(getCurrentIndex)    
        }
        function handleOnMouseMove(getCurrentIndex){
            setHover(getCurrentIndex)
        }
        function handleOnMpuseLeave (getCurrentIndex){
            setHover(rating)
        }

    return (
        <div className="star-rating" >
            {star}
        </div>
    )
} 