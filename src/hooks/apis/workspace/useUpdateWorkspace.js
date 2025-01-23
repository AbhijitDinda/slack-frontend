
import { useMutation } from '@tanstack/react-query';

import { updateWorkspaceRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useUpdateWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const { isPending,isSuccess,error,mutateAsync:updateWorkspaceMutation  } = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({workspaceId,name, token: auth?.token }),
        onSuccess:()=>{
            console.log("Workspace Update successfully")
        },
        onError:()=>{
            console.log("Error in update workspace")
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation
    };
};