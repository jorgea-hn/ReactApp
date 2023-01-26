import React from "react"

export default function Saludar(props){
    return (
        <div>
        <h2>Hola {props.userInfo.nombre},
        tienes {props.userInfo.edad} años y su color favorito es el {props.userInfo.color}</h2>
        </div>
    );
}