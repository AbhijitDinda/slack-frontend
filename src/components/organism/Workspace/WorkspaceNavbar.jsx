import { useGetWorkspaceById } from "@/hooks/apis/workspace/useGetWorkspaceById";
import { useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { SearchIcon } from 'lucide-react';
export const WorkspaceNavbar = () => {
    const { workspaceId } = useParams();
    const { isLoading, workspace } = useGetWorkspaceById(workspaceId);
    console.log(workspace?.name);

    if (isLoading) {
        return <p>loading</p>
    }

    return (
        <nav className="flex items-center justify-center h-10 p-1.5 bg-slack-dark">
        <div>
            <Button size="sm" className="bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2 ">
            <SearchIcon className="size-5 text-white mr-2"/>
                <span className="text-white text-xs">
                    Search {workspace?.name || 'worksapce'}
                </span>
            </Button>
        </div>
        
        </nav>
    );
};
