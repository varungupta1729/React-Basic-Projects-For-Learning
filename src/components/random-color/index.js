import { useEffect, useState } from "react";

export default function RandomColor() {

  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [disco , setDisco] = useState(false);

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }


  function handleHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }


  function handleRgbColor() {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);
 
    setColor(`rgb(${r} ,${g} , ${b})`);
    console.log(color);
  }
 if(disco){
    setTimeout(() => {
        typeColor === "hex" ? handleHexColor() : handleRgbColor();
    }, 200);
 }
  function handleDisco(){
    setDisco(disco?false:true);
  }

  useEffect(()=>{
    if(typeColor === "hex"){
       handleHexColor();
    }
    else{
        handleRgbColor();   
    }
  } , [typeColor])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={()=>setTypeColor("hex")}>HEX Color</button>
      <button onClick={()=>setTypeColor("rgb")}>RGB Color</button>
      <button onClick={typeColor === "hex" ? handleHexColor : handleRgbColor}>
        Random Color
      </button>
      <button onClick={handleDisco}>Disco</button>
      <div style={{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        color:"#fff",
        fontSize:"60px",
        marginTop:"50px",
        fontWeight:"bolder"
      }}>{disco?"I Am A Disco Dancer":color}</div>
    </div>
  );
}
