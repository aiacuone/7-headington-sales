import { Item } from '@/app/items'
import { useDisclosure } from '@/lib/hooks'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { ItemDetails } from './ItemDetails'
import { ItemCardDialog } from './ItemCardDialog'

export const ItemCard: FC<{
  item: Item
  onOpenDelayedSaleDialog: () => void
}> = ({ item, onOpenDelayedSaleDialog }) => {
  const { onOpen, isOpen, toggle } = useDisclosure()
  const { name, price, images, isSold, isDelayedSale, reservations } = item

  return (
    <>
      <div
        className={`stack bg-muted p-3 gap-1 ${
          isSold ? 'opacity-20' : 'opacity-100'
        }`}>
        <p className="font-bold text-lg">{name}</p>
        {item.price ? (
          <p className="text-lg">{`£${price}`}</p>
        ) : (
          <p className="bg-blue-500 rounded-sm text-secondary px-4 self-start text-white">
            Free
          </p>
        )}
        <button onClick={onOpen} className="center relative" disabled={isSold}>
          <Image
            src={images[0]}
            alt={name}
            className="rounded-sm"
            width={300}
            height={300}
          />
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
      <ItemCardDialog open={isOpen} toggle={toggle} item={item} />
    </>
  )
}
