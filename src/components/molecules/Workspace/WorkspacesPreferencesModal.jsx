
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspace/useDeleteWorkspace';
import { useUpdateWorkspace } from '@/hooks/apis/workspace/useUpdateWorkspace';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { toast } from '@/hooks/use-toast';
import { useConfirm } from '@/hooks/useConfirm';
import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const WorkspacesPreferencesModal = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const [workspaceId, setWorkspaceId] = useState(null);


    const { openPreferences, initalValue, setOpenPreferences, workspace } = useWorkspacePreferencesModal();

    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);


    const [renameValue, setRenameValue] = useState(workspace?.name)

    const { isPending, isSuccess, error, updateWorkspaceMutation } = useUpdateWorkspace(workspaceId);
    const {ConfirmDialog, confirmation} =useConfirm({title:"Do you want to Delete workspace",message:'This Action can not be Undone'})



    function handcleClose() {
        setOpenPreferences(false)
    }


    async function handleDelete() {
        try {
            const ok = await confirmation();
            if(!ok){
                return;
            }
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPreferences(false);
        } catch (error) {
            console.log("Error in delete Workspace", error)
        }

    }

    useEffect(() => {
        setWorkspaceId(workspace?._id);
        setRenameValue(workspace?.name)
    }, [workspace])

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            await updateWorkspaceMutation(renameValue)
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPreferences(false);
            toast({
                title:'workspace updated successfully'
            })

        } catch (error) {
            console.log(error)
            toast({
                title:'Error in updating workspace'
            })
        }
    }


    return (
        <>

        <ConfirmDialog/>
        <Dialog open={openPreferences} onOpenChange={handcleClose}>
            <DialogContent>
                <DialogHeader className="p-0 bg-grey-50 overflow-hidden">
                    <DialogTitle className="p-4 border-b bg-white">
                        {initalValue}
                    </DialogTitle>
                </DialogHeader>

                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <Dialog>
                        <DialogTrigger>

                            <div className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-green-50'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-sm'> Workspace Name

                                    </p>
                                    <p className='text-sm font-semibold hover:underline'>Edit

                                    </p>
                                </div>
                                <p className='text-sm'>
                                    {initalValue}
                                </p>
                            </div>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Rename Workspace
                                </DialogTitle>
                            </DialogHeader>
                            <form className='space-y-4' onSubmit={handleFormSubmit}>
                                <Input value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    required
                                    autoFocus
                                    minLength={3}
                                    maxLength={50}
                                    disabled={isPending}
                                    placeholder="Workspace Name"
                                />

                                <DialogFooter>
                                    <DialogClose>
                                        <Button varriant="outline"
                                            disabled={isPending}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="Submit" disabled={isPending}>Save

                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>


                <Button onClick={handleDelete}>
                    <TrashIcon className='size-5' />
                    <p>Delete Workspace</p>
                </Button>

            </DialogContent>
        </Dialog>
        </>
    )

}