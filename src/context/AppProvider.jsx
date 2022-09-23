import React, { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [bgColor, setBgColor] = useState('#fff');

    return(
        <AppContext.Provider value={{ bgColor, setBgColor }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};