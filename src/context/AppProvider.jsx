import React, { useState, useRef } from 'react';

import AppContext from './AppContext';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 300;

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');
    const [elements, setElements] = useState([]);
    const [selectedElementId, setSelectedElementId] = useState('');
    const [canvasSize, setCanvasSize] = useState({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
    const [currentSize, setCurrentSize] = useState({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
    
    const [age, setAge] = useState(10);

    return(
        <AppContext.Provider value={{ 
            bgColor, 
            setBgColor, 
            elements, 
            setElements, 
            selectedElementId, 
            setSelectedElementId,
            canvasSize,
            setCanvasSize,
            currentSize, 
            setCurrentSize,            
        }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};