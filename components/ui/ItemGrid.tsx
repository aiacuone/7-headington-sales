'use client'

import { Item } from '@/app/items'
import { FC } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { ItemCard } from './ItemCard'

interface ItemGridProps {
  items: Item[]
}

export const ItemGrid: FC<ItemGridProps> = ({ items }) => {
  const { isOpen: open, toggle, onOpen } = useDisclosure()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
        {items.map((item, index) => {
          return (
            <ItemCard
              item={item}
              key={`item grid item ${index}`}
              onOpenDelayedSaleDialog={onOpen}
            />
          )
        })}
      </div>
      <DelayedSaleDialog open={open} toggle={toggle} />
    </>
  )
}
