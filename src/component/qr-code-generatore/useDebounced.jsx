import { useState , useEffect } from "react";

export default function UseDebounce(value , delay){
    const [debouncedValue , setDebouncedValue] = useState (value)

    useEffect ( ()=> {
        const timeoutId = setTimeout (()=> setDebouncedValue(value) ,delay)
        return ()=> clearTimeout (timeoutId)
    }
    , [delay , value])
    return debouncedValue
} 