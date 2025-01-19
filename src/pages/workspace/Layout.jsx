import { WorkspaceOption } from '@/components/organism/Workspace/WorkspaceOption';
import { WorkspaceSidebar } from '@/components/organism/Workspace/WorkspaceSidebar';


export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <div className="flex h-[calc(100vh)]">
            <WorkspaceOption/>
            <WorkspaceSidebar />
            {children}
            </div>
        </div>
    );
};