
import { UserButton } from '@/components/atoms/userButtons/userButton'
import { useFetchWorkspace } from '@/hooks/apis/workspace/useFatchWorkspace'

export default function Home() {
  const { isFetching,isSuccess,error,workspaces } = useFetchWorkspace();
  return (
    <>
      <h1>Home</h1>
      <UserButton />
    </>
  )
}
