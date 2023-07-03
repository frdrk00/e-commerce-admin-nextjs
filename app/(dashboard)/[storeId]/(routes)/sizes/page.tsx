import { FC } from 'react'
import { format } from 'date-fns'
import { SizesClient } from './components/client'
import prismadb from '@/lib/prisma.db'
import { SizeColumn } from './components/columns'

interface SizesPageProps {
  params: { storeId: string }
}

const SizesPage: FC<SizesPageProps> = async ({ params }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  )
}

export default SizesPage