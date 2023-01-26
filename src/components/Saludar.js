import React from "react"

export default function Saludar(props){
    const {userInfo,saludarfn}= props
    const {nombre} = userInfo
    console.log(props)
    console.log(userInfo)
    return (
        <div>
        <button onClick={()=>saludarfn(nombre)}>Saludar</button>
        </div>
    );
}