import { WorkspaceNavbar } from '@/components/organism/Workspace/WorkspaceNavbar';
import { WorkspacePanel } from '@/components/organism/Workspace/WorkspacePanel';
import { WorkspaceSidebar } from '@/components/organism/Workspace/WorkspaceSidebar';
import { ResizablePanel, ResizablePanelGroup,ResizableHandle } from '@/components/ui/resizable';


export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar/>
            <div className="flex h-[calc(100vh-40px)]">
            <WorkspaceSidebar />
            <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                <ResizablePanel defaultSize={20} minSize={11} className='bg-slack-medium'>
                    <WorkspacePanel/>
                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel minSize={20}>
                {children}
                </ResizablePanel>

            </ResizablePanelGroup>
            
            </div>
        </div>
    );
};