import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
const sideBarItemVariants = cva(
    'flex items-center justify-start gap-1.5 font-normal h-7 px-[20px] text-sm overflow-hidden p-5',
    {
        variants: {
            variant: {
                default: 'text-[#f9edffcc]',
                active: 'text-[#481350] bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: 'default'
    }
);


export const SideBarItem = ({label,id,icon:Icon, variant}) =>{
    const {workspaceId} = useParams();
    return(
        <Button
            variant="transparent"
            size="sm"
            className={cn(sideBarItemVariants({variant}))}
        >
        <Link to={`/workspace/${workspaceId}/channels/${id}`}>
            <Icon className="size-3.5 mr-1"/>
            <span className="text-sm">{label}</span>
        </Link>

        </Button>
    )
}