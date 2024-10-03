import MenuItem from "./MenuItem"

export default function MenuList(props) {
    return (
    <ul>
        {
            props.list && props.list.length ? 
                props.list.map ( listElement => 
                <MenuItem items={listElement} />
                ):null
        }
        
    </ul>
        )
    
}