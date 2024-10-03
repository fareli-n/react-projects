import { useState } from "react";
import { FaMinus , FaPlus } from "react-icons/fa";
import MenuList from "./MenuList";

export default function MenuItem(props) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleDisplayChildren (getCurrentLabel){
        setDisplayCurrentChildren (prev => ({...prev , [getCurrentLabel] : !prev[getCurrentLabel]}))
    }

	return (

		<li>
			<div onClick={()=> handleDisplayChildren(props.items.label) }
                className ="menu__items">
				<p className="menu__label">{props.items.label}</p>
				{props.items.children && props.items.children.length ? (
					<span >
                        { displayCurrentChildren [props.items.label] ?
                        <FaMinus className="fa" />: <FaPlus className="fa" /> }
                        </span>
				) : null}
			</div>
			{props.items.children && props.items.children.length && displayCurrentChildren [props.items.label] ? (
				<MenuList list={props.items.children} />
			) : null}
		</li>
	);
}
