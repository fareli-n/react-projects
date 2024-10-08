import Tab from "./tab"
import "./tab.css"

export default function TabMenu (){
    const tabs =[
        {
            label : "Tab1",
            content : <div> First Content</div>
        },
        {
            label : "Tab2",
            content : <div> Second Content</div>
        },
        {
            label : "Tab3",
            content : <RandomContent />
        },
    ]    
    function RandomContent (){
        return (
            <div>Some Random Content</div>
        )
    }
    
    return (
<div className="tab">
  <Tab tabs={tabs}/>
</div>
    )
}