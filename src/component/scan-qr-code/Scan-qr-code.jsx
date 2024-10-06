import {useState} from "react"
import {QRCodeSVG} from 'qrcode.react';
// npm install qrcode.react

export default function ScanQrCode(){

    return (
        <div>
            <h1>Scan My QrCode</h1>
            <div>
            <QRCodeSVG value="https://elmirap.netlify.app/" size="256" />
            </div>
        </div>
    )
}