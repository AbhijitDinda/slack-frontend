import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal"
import CreateWorkspaceModal from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal"
import { WorkspacesPreferencesModal } from "@/components/molecules/Workspace/WorkspacesPreferencesModal"

export const Modal = ()=> {
    return(
        <>
        <CreateWorkspaceModal/>
        <WorkspacesPreferencesModal/>
        <CreateChannelModal/>
        </>
    )
}