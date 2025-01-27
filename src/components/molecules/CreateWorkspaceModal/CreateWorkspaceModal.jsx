
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useCreateWorkspace } from "@/hooks/apis/workspace/useCreateWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal"
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
export default function CreateWorkspaceModal() {
  const queryClient = useQueryClient()
  const {openCreateWorkspaceModal,setOpenCreateWorkspaceModal} = useCreateWorkspaceModal()
  
  const { isPending,isSuccess,createWorkspaceMutation}= useCreateWorkspace()
  const [workspaceName,setWorkspaceName] = useState('')
  const navigate = useNavigate()

  function handleClose(){
    setOpenCreateWorkspaceModal(false);
  }


    async function handleFormSubmit(e) {
      e.preventDefault();

      try {
        const data = await createWorkspaceMutation({ name: workspaceName });
        console.log("hello",data?._id);
        navigate(`/workspace/${data?._id}`);
        queryClient.invalidateQueries('fetchWorkspaces')


      } catch (error) {
        console.log(error);
      } finally{
        setWorkspaceName('');
        setOpenCreateWorkspaceModal(false);
      }
    }



  return (
    <>
      <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose} >


      <DialogContent>
      <DialogHeader>Create a New Workspace</DialogHeader>
      <form onSubmit={handleFormSubmit}>
        <input className="w-full rounded-md p-2" disabled={isPending} required minLength={3} placeholder="Enter the workspace name" value={workspaceName} onChange={(e) =>setWorkspaceName(e.target.value)}/>

        <div className="flex justify-end mt-5">
          <Button disabled={isPending}>
            Create Workspace
          </Button>
        </div>
      </form>

      </DialogContent>

      </Dialog>
    </>
  )
}
