'use client'

import { Item } from '@/app/items'
import { FC } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { ItemCard } from './ItemCard'

interface ItemGridProps {
  items: Item[]
  showSoldItems?: boolean
}

export const ItemGrid: FC<ItemGridProps> = ({ items, showSoldItems }) => {
  const { isOpen: open, toggle, onOpen } = useDisclosure()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
        {items.map((item, index) => {
          if (item.isSold && !showSoldItems) return null
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
