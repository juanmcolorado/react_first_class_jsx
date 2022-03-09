import { useState } from "react";
import Light from "../Light";

function Box (props) {
    const [lightStatus, setLightStatus] = useState('siga')
    return (
        <div className="box">
            <Light status={lightStatus} />
            <div className="d-flex">
                <input type="radio" name="light-selector" />
                <label htmlFor=''>Adelante</label>
                <input type="radio" name="light-selector" />
                <label htmlFor=''>Precaución</label>
                <input type="radio" name="light-selector" />
                <label htmlFor=''>Detente</label>
            </div>

        </div>
    )
}

export default Box