// Context API: Used to pass data through component tree without having to
// pass props down manually at every level
import React, { useState, createContext } from "react";

export const SchoolsContext = createContext();

// Wrapped around App so all Components have access to these states
export const SchoolsContextProvider = props => {
    const [schools, setSchools] = useState([]);

    return (
        <SchoolsContext.Provider
            value={{
                schools,
                setSchools,
            }}>
            {props.children}
        </SchoolsContext.Provider>
    );
};