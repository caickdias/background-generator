import React, { useState, useRef } from 'react';

import AppContext from './AppContext';
import Circle from '../components/elements/Circle';
import Rectangle from '../components/elements/Rectangle';

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');
    const [elements, setElements] = useState([]);
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