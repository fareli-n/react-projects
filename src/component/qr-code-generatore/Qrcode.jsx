import { useMemo, useState, useEffect } from "react";
import UseDebounce from "./useDebounced";
import QRCode from "react-qr-code";
import "./qrcode.css"

// npm i react-qr-code

export default function QrCode() {
	const [input, setInput] = useState("");
    const [qrCode , setQrCode]= useState("")
    
    const debouncedInput = UseDebounce (input, 500)
   
    useEffect (()=> {
        setQrCode(debouncedInput)
    }, [debouncedInput])

	return (
		<div className="qrcode">
			<h1>QR Code Generator</h1>
				<input type="search" 
                value={input} 
                onChange={(e)=> setInput (e.target.value)}
                placeholder="Enter the text"
                 />
            <div className="qrcode__img">
                <QRCode value={qrCode} size={400} />
            </div>
		</div>
	);
}
