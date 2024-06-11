import {useState} from "react";
import QRCode from "react-qr-code";
import "./style.css"
export default function QrGenerator(){

const[qrCode , setQrcode] = useState("");
const[input , setInput] = useState("");

function changeHandler(event){
    setInput(event.target.value);
    console.log(event.target.value);
}

function setHandler(){
setQrcode(input);
setInput('');
}

return (

    <div className="qr">
        <h1>QR Generator</h1>
       
        <div> 
        <input onChange={changeHandler} value={input}/ >
        <button   disabled={input && input.trim() !== "" ? false : true } onClick={setHandler}>Generate</button>
        </div>

        <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
        
    </div>
)

}