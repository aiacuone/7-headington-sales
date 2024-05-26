import { Item } from '@/app/items'
import Image from 'next/image'
import { FC } from 'react'

interface ItemGridProps {
  items: Item[]
}

export const ItemGrid: FC<ItemGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-screen-lg">
      {items.map((item, index) => {
        return (
          <div
            key={`item grid item ${index}`}
            className="flex flex-col items-center">
            <p>{item.name}</p>
            <Image
              src={item.images[0]}
              alt={item.name}
              className="rounded-sm"
              width={300}
              height={300}
            />
            <p>{item.price}</p>
          </div>
        )
      })}
    </div>
  )
}
