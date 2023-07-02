'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
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

  return null
}

export default SetupPage
