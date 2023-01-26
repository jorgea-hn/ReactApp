import React from "react"

export default function Saludar(props){
    return (
        <div>
        <button onClick={()=>props.saludarfn(props.userInfo.nombre)}>Saludar</button>
        </div>
    );
}