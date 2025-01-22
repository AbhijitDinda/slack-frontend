import { useState } from "react";
import { createContext } from "react";
const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({children}) => {
    const [openPreferences,setOpenPreferences] = useState(false);
    const [initalValue ,setInitialvalue] = useState("Edit Workspace")



    return(
        <WorkspacePreferencesModalContext.Provider value={{ openPreferences, setOpenPreferences,initalValue,setInitialvalue }}>
            {children}
        </WorkspacePreferencesModalContext.Provider>
    )
}
export default WorkspacePreferencesModalContext;