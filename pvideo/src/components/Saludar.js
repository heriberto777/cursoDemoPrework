import React from 'react';


export default function Saludar(props) {

    const {userInfo, saludarFn} = props;
    return (
        <>
            <button onClick={() => saludarFn(userInfo.nombre, userInfo.edad, userInfo.color)}>Saludar</button>
        </>
    )
}