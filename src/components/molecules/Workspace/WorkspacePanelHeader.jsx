import { Button } from "@/components/ui/button"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/context/useAuth"
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from 'lucide-react';

export const WorkspacePanelHeader = ({workspace}) => {
    console.log(workspace)
    const workspacemembers = workspace?.members;

    const {auth}= useAuth();

    const isLoggedInUserAdminOfWorkspace = workspacemembers?.find(member => member.memberId === auth?.user?._id && member.role === "admin");

    const {setOpenPreferences,setInitialvalue}= useWorkspacePreferencesModal();



    return (
        <div className=" flex items-center justify-between px-4 h-[50px] gap-0.5">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="default" className="font-semibold text-lg w-auto p-1.5 overflow-hidden">
                        <span className="truncate">
                            {workspace?.name}
                        </span>
                        <ChevronDownIcon className="size-5 ml-1" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' align='start' className='w-64'>
                <DropdownMenuItem>
                    <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]">
                        {workspace?.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="font-bold">{workspace?.name}</p>
                        <p className="text-xs text-muted-foreground">Active Workspace</p>
                    </div>
                </DropdownMenuItem>
                {isLoggedInUserAdminOfWorkspace && (
                    <>
                        <DropdownMenuItem className="cursor-pointer py-2" onClick={()=>{
                            setOpenPreferences(true);
                            setInitialvalue(workspace?.name)

                            }}>
                            Prefrerance
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem className="cursor-pointer py-2">
                        Invite Prople  to {workspace?.name}

                        </DropdownMenuItem>
                    </>
                )}

                </DropdownMenuContent>

            </DropdownMenu>

            <div
                className='flex items-center gap-0.5 text-white'
            >
                <Button
                    variant='transparent'
                    size='iconSm'
                >
                    <ListFilterIcon className='size-5' />
                </Button>

                <Button
                    variant='transparent'
                    size='iconSm'
                >
                    <SquarePenIcon className='size-5' />
                </Button>
            </div>

        </div>
    )
}