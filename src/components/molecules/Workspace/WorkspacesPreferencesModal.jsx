
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

export const WorkspacesPreferencesModal = ()=>{
    const {openPreferences,initalValue,setOpenPreferences} = useWorkspacePreferencesModal()
    
    return(
        <Dialog open={openPreferences} onOpenChange={setOpenPreferences}>
            <DialogContent>
                <DialogHeader className="p-0 bg-grey-50 overflow-hidden">
                    <DialogTitle className="p-4 border-b bg-white">
                        {initalValue}
                    </DialogTitle>
                    <div className='px-4 pb-4 flex flex-col gap-y-2'>
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

                    </div>
                    <Button>
                    <TrashIcon className='size-5'/>
                        <p>Delete Workspace</p>
                    </Button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}