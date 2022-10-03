import React, { useState, useRef } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');
    const [elements, setElements] = useState([]);
    const [selectedElementId, setSelectedElementId] = useState('');
    const [refresh, setRefresh] = useState(true);

    return(
        <AppContext.Provider value={{ 
            bgColor, 
            setBgColor, 
            elements, 
            setElements, 
            selectedElementId, 
            setSelectedElementId 
        }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};