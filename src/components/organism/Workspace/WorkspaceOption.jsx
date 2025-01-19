import { useGetWorkspaceById } from "@/hooks/apis/workspace/useGetWorkspaceById";
import { useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button";
// import { Loader2 as LucideLoader2 } from 'lucide-react';
export const WorkspaceOption = () => {
    const { workspaceId } = useParams();
    const { isLoading, workspace } = useGetWorkspaceById(workspaceId);

    if (isLoading) {
        return <p>loading</p>
    }

    return (
        <nav className="flex items-center justify-center h-10 p-1.5 bg-slack-dark">
        <h1>{workspace}</h1>
        
        </nav>
    );
};
