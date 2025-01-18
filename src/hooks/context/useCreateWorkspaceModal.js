import { useContext } from "react";
import CreateWorkspaceContext from "@/context/CreateaWorkspaceaContext";

export const useCreateWorkspaceModal = () =>{
    return useContext(CreateWorkspaceContext);
}