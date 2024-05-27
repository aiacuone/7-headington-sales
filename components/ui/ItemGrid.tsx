'use client'

import { Item } from '@/app/items'
import Image from 'next/image'
import { FC } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { Clock } from 'lucide-react'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { CardDialog } from './CardDialog'
import { ItemDetails } from './ItemDetails'

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

const ItemCard: FC<{ item: Item; onOpenDelayedSaleDialog: () => void }> = ({
  item,
  onOpenDelayedSaleDialog,
}) => {
  const { onOpen, isOpen, toggle } = useDisclosure()
  const { name, price, images, isSold, isDelayedSale } = item

  return (
    <>
      <div
        className={`stack bg-muted p-3 gap-1 ${
          isSold ? 'opacity-30' : 'opacity-100'
        }`}>
        <p className="font-bold text-lg">{name}</p>
        {item.price ? (
          <p className="text-lg">{`£${price}`}</p>
        ) : (
          <p className="bg-blue-500 rounded-sm text-secondary px-4 self-start text-white">
            Free
          </p>
        )}
        <button onClick={onOpen} className="center relative">
          <Image
            src={images[0]}
            alt={name}
            className="rounded-sm"
            width={300}
            height={300}
          />
          <p
            className={`absolute bg-white text-4xl text-black rounded-sm p-3 font-bold ${
              isSold ? 'flex' : 'hidden'
            }`}>
            SOLD
          </p>
        </button>
        {isDelayedSale && (
          <button
            className="hstack gap-2 items-center text-sm"
            onClick={onOpenDelayedSaleDialog}>
            <Clock className="text-blue-500" />
            <p>Delayed Sale</p>
          </button>
        )}
        <ItemDetails item={item} onOpen={onOpen} />
      </div>
      <CardDialog open={isOpen} toggle={toggle} item={item} />
    </>
  )
}
