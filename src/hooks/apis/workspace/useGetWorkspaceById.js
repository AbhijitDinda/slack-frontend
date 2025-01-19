import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';


export const useGetWorkspaceById = (id) => {
    const { auth } = useAuth();
    // console.log("mytoken ",auth?.token)
    
    const { isFetching,isLoading, isSuccess, error, data: workspace } = useQuery({
        queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
        queryKey: [`fetchWorkspaceById-${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isLoading,
        isSuccess,
        error,
        workspace
    };
};