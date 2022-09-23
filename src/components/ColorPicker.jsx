import React, { useState, useContext } from 'react'

import AppContext from '../context/AppContext';

import { HexagonalColorHue, HexagonalColorPicker } from "react-hexagon-color-picker";


const ColorPicker = () => {

    const { setBgColor } = useContext(AppContext);

    const [hue, setHue] = useState(0);

    return (
        <div style={{textAlign: "center", margin: 16}}>
            <div>
                <HexagonalColorPicker 
                    hue={hue}                    
                    onColorChange={setBgColor}
                />                                
            </div>

            <div style={{ margin: 16}}>
                <HexagonalColorHue                     
                    onHueChange={setHue}
                />                
                
            </div>
        </div>
    )
}

export default ColorPicker