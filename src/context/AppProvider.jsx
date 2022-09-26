import React, { useState } from 'react';

import AppContext from './AppContext';
import Circle from '../components/elements/Circle';

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');
    const [elements, setElements] = useState([<Circle />]);

    return(
        <AppContext.Provider value={{ bgColor, setBgColor, elements, setElements }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};