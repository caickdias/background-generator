import React, { useState, useRef } from 'react';

import AppContext from './AppContext';
import { Rect } from 'react-konva';

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');
    const [elements, setElements] = useState([<Rect width={50} height={50} fill="red" draggable/>]);
    const selectedElement = useRef(elements[0]);

    return(
        <AppContext.Provider value={{ bgColor, setBgColor, elements, setElements, selectedElement }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};