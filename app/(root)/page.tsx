import { UserButton } from '@clerk/nextjs'
import { FC } from 'react'

interface SetupPageProps {}

const SetupPage: FC<SetupPageProps> = ({}) => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage
