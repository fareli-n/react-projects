import {useState} from 'react'
export default function Tab ({tabs}){
    const [currentIndex, setCurrentIndex] =useState(0)
    function handleClick (getIndex){
        setCurrentIndex(prev=> getIndex)
    }
    return (
    <div>
        {
            (tabs && tabs.length) ?
            <div>
                <div className="tab__heading">
                    {
                        tabs.map ((tabItem, index) =>
                        <div className ={ `tab__label ${index===currentIndex ? "active" : ""}`}
                        key={index}
                        onClick= {()=> handleClick (index)}>
                        {tabItem.label}
                        </div> )
                
                    }</div>
                    <div className="tab__content" >{tabs[currentIndex] && tabs[currentIndex].content}</div>
            </div>
            :null
        }
    </div>
    )

}