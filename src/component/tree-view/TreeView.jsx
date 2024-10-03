import menus from './data.js'
import MenuList from "./MenuList.jsx"
import "./tree-view.css"

export default function TreeView (){
    
console.log (menus)
    return (
        <div className='menu'>
        {
            menus && menus.length ? 
                <MenuList  list={menus}/>
            :null
        }
        </div>
    )
}