import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { useParams } from 'react-router-dom';
import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from 'lucide-react';
import {WorkspacePanelHeader} from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { SideBarItem } from '@/components/atoms/SideBarItem/SideBarItem';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';


export const WorkspacePanel = () => {

    const { workspaceId } = useParams();
    const {isFetching,isLoading, isSuccess, error,workspace} = useGetWorkspaceById(workspaceId);

    if(isFetching) {

        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <Loader className='animate-spin size-6 text-white' />
            </div>
        );
    }

    if(!isSuccess) {
        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <AlertTriangleIcon className='size-6 text-white' />
                Something went wrong
            </div>
        );
    }

    return(
        <div className="flex flex-col h-full bg-slack-medium">
            <WorkspacePanelHeader workspace={workspace} />
            <div className='flex flex-col px-2 mt-3'>
                <SideBarItem label="Threds" icon={MessageSquareTextIcon}
                    id="Threds" variant="active" />

                <WorkspacePanelSection>

                    {workspace?.channels?.map((channel) => {
                        return <SideBarItem key={channel._id} label={channel.name} icon={HashIcon} id={channel._id} variant="active" />
                    })}

                </WorkspacePanelSection>
            



            </div>
        </div>
    )
}