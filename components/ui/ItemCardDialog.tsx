import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { FC } from 'react'
import { Item } from '@/app/items'
import { ItemDetails } from './ItemDetails'
import Image from 'next/image'

interface CardDialogProps {
  open: boolean
  toggle: () => void
  item: Item
}

export const ItemCardDialog: FC<CardDialogProps> = ({ open, toggle, item }) => {
  const { images, name } = item
  const showCarousel = images.length > 1

  return (
    <Dialog open={open} onOpenChange={toggle}>
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
          <ItemDetails item={item} toggleDialog={toggle} />
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
