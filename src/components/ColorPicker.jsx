import React, { useState } from 'react'

import { HexagonalColorHue, HexagonalColorPicker } from "react-hexagon-color-picker";

const ColorPicker = () => {

    const [hue, setHue] = useState(0);

    return (
        <div style={{textAlign: "center", margin: 16}}>
            <div>
                <HexagonalColorPicker 
                    hue={hue}                    
                />                                
            </div>

            <div style={{ margin: 16}}>
                <HexagonalColorHue 
                    hue={hue}
                    onHueChange={setHue}
                />                
                
            </div>
        </div>
    )
}

export default ColorPicker