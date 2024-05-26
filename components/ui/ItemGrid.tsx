'use client'

import { Item } from '@/app/items'
import Image from 'next/image'
import { FC } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/lib/utils'
import { useDisclosure } from '@/lib/hooks'
import { Button } from './button'

interface ItemGridProps {
  items: Item[]
}

export const ItemGrid: FC<ItemGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
      {items.map((item, index) => {
        return <ItemCard item={item} key={`item grid item ${index}`} />
      })}
    </div>
  )
}

const ItemCard: FC<{ item: Item }> = ({ item }) => {
  const { onOpen, isOpen, toggle } = useDisclosure()

  return (
    <>
      <button className="stack bg-muted p-3 gap-1" onClick={onOpen}>
        <p className="font-bold text-lg">{item.name}</p>
        <Image
          src={item.images[0]}
          alt={item.name}
          className="rounded-sm"
          width={300}
          height={300}
        />
        <ItemDetails item={item} />
        <Button className="w-full">View</Button>
      </button>
      <CardDialog open={isOpen} onOpenChange={toggle} item={item} />
    </>
  )
}

const ItemDetails: FC<{
  item: Item
}> = ({ item }) => {
  const { details, link, price } = item

  const mappingDetails = Object.fromEntries(
    Object.entries(item).filter(([key]) => {
      return ![
        'category',
        'images',
        'isSold',
        'isDelayedSale',
        'isInduction',
        'link',
        'name',
        'details',
      ].includes(key)
    })
  )

  return (
    <div className="stack gap-3 flex-1">
      <ul className="w-full">
        {Object.entries({ ...mappingDetails, price }).map(
          ([key, value], index) => {
            if (!value && key !== 'price') return

            const keySuffix = {
              price: (value: number) =>
                value ? (
                  `£${value}`
                ) : (
                  <p className="bg-blue-500 rounded-sm text-secondary px-4">
                    Free
                  </p>
                ),
              width: (value: number) => `${value}mm`,
              height: (value: number) => `${value}mm`,
            }

            return (
              <li key={`item ${index}`}>
                <div className="hstack gap-2">
                  <p className="font-bold text-left">
                    {capitalizeFirstLetter(key)}:
                  </p>
                  <p className="text-left">
                    {/* @ts-ignore */}
                    {keySuffix[key] ? keySuffix[key](value) : value}
                  </p>
                </div>
              </li>
            )
          }
        )}
      </ul>
      {details && <p className="text-left">{details}</p>}
      {link && (
        <Link href={link} target="_blank" className="text-left">
          Link
        </Link>
      )}
    </div>
  )
}

interface CardDialogProps {
  open: boolean
  onOpenChange: () => void
  item: Item
}

const CardDialog: FC<CardDialogProps> = ({ open, onOpenChange, item }) => {
  const { images, name } = item
  const showCarousel = images.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {showCarousel ? (
              <Carousel>
                <CarouselContent>
                  {images.map((imageSource, index) => (
                    <CarouselItem
                      key={`carousel image ${index}`}
                      className="center">
                      <DialogImage src={imageSource} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <DialogImage src={images[0]} />
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <ItemDetails item={item} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const DialogImage: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="center">
      <Image src={src} alt={'House Item Image'} width={500} height={300} />
    </div>
  )
}
