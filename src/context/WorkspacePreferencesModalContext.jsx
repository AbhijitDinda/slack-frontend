import { useState } from "react";
import { createContext } from "react";
const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({children}) => {
    const [openPreferences,setOpenPreferences] = useState(false);
    const [initalValue ,setInitialvalue] = useState("Edit Workspace");
    const [workspace,setWorkspace] = useState(null)
 


    return(
        <WorkspacePreferencesModalContext.Provider value={{ openPreferences, setOpenPreferences,initalValue,setInitialvalue,workspace,setWorkspace }}>
            {children}
        </WorkspacePreferencesModalContext.Provider>
    )
}
export default WorkspacePreferencesModalContext;