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
      <div className="stack bg-muted p-3 gap-1">
        <p className="font-bold text-lg">{item.name}</p>
        {item.price ? (
          <p className="text-lg">{`£${item.price}`}</p>
        ) : (
          <p className="bg-blue-500 rounded-sm text-secondary px-4 self-start">
            Free
          </p>
        )}
        <button onClick={onOpen}>
          <Image
            src={item.images[0]}
            alt={item.name}
            className="rounded-sm"
            width={300}
            height={300}
          />
        </button>
        <ItemDetails item={item} onOpen={onOpen} />
      </div>
      <CardDialog open={isOpen} onOpenChange={toggle} item={item} />
    </>
  )
}

const ItemDetails: FC<{
  item: Item
  onOpen?: () => void
}> = ({ item, onOpen }) => {
  const { details, link } = item
  const showMoreDetails = !!onOpen

  const mappingDetails = Object.fromEntries(
    Object.entries(item).filter(([key]) => {
      const excludeKeys = [
        'category',
        'images',
        'isSold',
        'isDelayedSale',
        'isInduction',
        'link',
        'name',
        'details',
        'price',
      ]

      return !excludeKeys.includes(key)
    })
  )

  return (
    <div className="stack gap-3 flex-1">
      <ul className="w-full flex-1">
        {Object.entries(mappingDetails).map(([key, value], index) => {
          const keySuffix = {
            width: (value: number) => `${value}mm`,
            height: (value: number) => `${value}mm`,
            watts: (value: number) => `${value}W`,
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
        })}
      </ul>
      <div className="flex-1 w-full" />
      {details && <p className="text-left text-sm">{details}</p>}
      {showMoreDetails && (
        <Button className="w-full" onClick={onOpen}>
          More Details
        </Button>
      )}
      {link && (
        <Link href={link} target="_blank" className="w-full">
          <Button className="w-full bg-muted-foreground">Link</Button>
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
