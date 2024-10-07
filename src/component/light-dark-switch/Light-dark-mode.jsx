import useLocalStroage from "./useLocalStorage"
import "./light-dark-mode.css"

export default function LightDarkMode (){
    const [theme , setTheme ] = useLocalStroage ('theme', 'dark')

    function handleClick (){
        setTheme (prev => {
            return prev==="dark" ? "light" : "dark"
        })
    }
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <p>{theme} Mode</p>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    )

}