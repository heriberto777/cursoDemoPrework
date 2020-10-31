import React from 'react';


export default function HolaMundo(props) {
   
   return (
       <div>
           <h1> Hola Mundo</h1>
   <h2>Hola  {props.nombre} tu edad es {props.edad}</h2>
       </div>
   )
}


export function AdiosMundo() {
    return (
        <div>
            <h1>No ventas</h1>
            <h2>No me quedo mas</h2>
        </div>
    )
}