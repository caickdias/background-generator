import React, { useState, useContext } from 'react'

import AppContext from '../context/AppContext';

import { HexagonalColorHue, HexagonalColorPicker } from "react-hexagon-color-picker";


const ColorPicker = () => {

    const { setBgColor, elements, setElements, selectedElementId, setSelectedElementId } = useContext(AppContext);

    const [hue, setHue] = useState(0);

    const handleColorChange = (color) => {
        if(selectedElementId == ''){
            setBgColor(color);
        }
        else {
            const index = elements.findIndex(element => element.id == selectedElementId)
            elements[index].fill = color;  
            setSelectedElementId('')
        }
    }

    return (
        <div style={{textAlign: "center", margin: 16}}>
            <div>
                <HexagonalColorPicker 
                    hue={hue}                    
                    onColorChange={handleColorChange}
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