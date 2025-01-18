import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOutIcon, PencilIcon, SettingsIcon } from 'lucide-react';
import { useAuth } from "@/hooks/context/useAuth"
import { useNavigate } from 'react-router-dom';
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";

export const UserButton=()=> {
    const navigate = useNavigate();

    const {auth,logout } = useAuth();
    console.log(auth);

    const {openCreateWorkspaceModal,setOpenCreateWorkspaceModal}= useCreateWorkspaceModal()
    function handleWorkspace (){
        setOpenCreateWorkspaceModal(true);
    }

    async function handleLogout() {
        await logout();
        
        navigate('/auth/signin');

    }
  return (
    <DropdownMenu>
            <DropdownMenuTrigger className='outline-none relative'>
                <Avatar className='size-10 hover:opacity-65 transition'>
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleWorkspace}>
                    <PencilIcon className='size-4 mr-2 h-10' />
                    Create Workspace
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className='size-4 mr-2 h-10' />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon className='size-4 mr-2 h-10' />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
  )
}
