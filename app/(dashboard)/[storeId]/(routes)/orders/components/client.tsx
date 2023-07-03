'use client'

import { FC } from 'react'
import { OrderColumn, columns } from './columns'

import { DataTable } from '@/components/ui/data-table'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

interface OrderClientProps {
  data: OrderColumn[]
}

export const OrderClient: FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  )
}
