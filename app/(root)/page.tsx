'use client'

import Modal from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import { FC, useEffect } from 'react'

interface SetupPageProps {}

const SetupPage: FC<SetupPageProps> = ({}) => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])
  
  return <div className="p-4">Root Page</div>
}

export default SetupPage
