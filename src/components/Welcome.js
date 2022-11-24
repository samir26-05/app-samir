import React from "react";
import './Styles/Welcome.css'

function Welcome(props) {
    return (
        <div className=" container">
            <div className="Fitness-User-Info">
                <h1>Hola {props.userName}</h1>
                <p>Bienvenido a nuestra pagina</p>
            </div>
        </div>

    )
}

export default Welcome