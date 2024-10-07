import {useState, useEffect} from "react"


export default function useLocalStroage (key , initialValue){
    const [localStorageValue , setLocalStorageValue] = useState(()=> getSavedValue (key, initialValue) )

    function getSavedValue (key , initialValue ) {
        const currrentValue  = JSON.parse(localStorage.getItem (key))
        if (currrentValue) return currrentValue
        if (initialValue instanceof Function) return initialValue()
        return initialValue
    }

    useEffect(()=> {
        localStorage.setItem (key , JSON.stringify (localStorageValue))
    }, [ localStorageValue ])

    return [localStorageValue, setLocalStorageValue]
}