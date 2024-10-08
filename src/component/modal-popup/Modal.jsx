import { useState } from "react";
import {FaTimes} from "react-icons/fa"

export default function Modal({ header, body, footer, onChange }) {
	const [isActive, setIsActive] = useState(true);
	function handleCloseModal() {
		setIsActive(false);
		onChange();
	}
	return (
		<div className={`modal ${isActive ? "active" : ""}`}>
			{/* <span class="close" onClick={handleCloseModal}>&times;</span> */}
			{/* <span class="close" onClick={handleCloseModal}> */}
                <FaTimes onClick={handleCloseModal} class="fa-close" />
            {/* </span> */}
			<div className="modal__content">
				<div className="modal__header">{header ? header : "Header"}</div>
				<div className="modal__body">
					{body ? body : "content of the modal"}
				</div>
				<div className="modal__footer">{footer ? footer : "footer"}</div>
			</div>
		</div>
	);
}
