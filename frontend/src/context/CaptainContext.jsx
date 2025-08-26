import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();



 const CaptainContext= ({ children })=> {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (data) => {
        setCaptain(data);
    };

    // Function to handle captain logout
    const logoutCaptain = () => {
        setCaptain(null);
        setError(null);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
        logoutCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
}

export default CaptainContext;