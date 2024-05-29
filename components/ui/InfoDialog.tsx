'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FC } from 'react'
import { Button } from './button'
import { items } from '@/app/items'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { useDisclosure } from '@/lib/hooks'
import { Clock } from 'lucide-react'

interface IntroDialogProps {
  open: boolean
  toggle: () => void
}

export const InfoDialog: FC<IntroDialogProps> = ({ open, toggle }) => {
  const { isOpen: isDelayedSaleDialogOpen, toggle: toggleDelayedSaleDialog } =
    useDisclosure()

  const onClickDelayedSaleButton = () => {
    toggle()
    toggleDelayedSaleDialog()
  }
  return (
    <>
      <Dialog open={open} onOpenChange={toggle}>
        <DialogContent className="w-full sm:w-[800px]">
          <DialogHeader>
            <DialogTitle>Welcome!</DialogTitle>
            <DialogDescription>
              7 Headington Rd is having a house clearance!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="stack gap-5 text-sm">
              <div className="stack gap-2">
                <p>
                  We are moving abroad and will be selling a variety of items
                  from our home.
                </p>
                <p>
                  Please feel free to browse the items and contact us if you are
                  interested in a purchase.
                </p>
                <p>
                  This house clearance will officially end on the{' '}
                  <b>June 25th</b>. We will be moving abroad and will not be
                  able to sell items after this date.
                </p>
                <p>
                  New items are likely to be added daily, so be sure to check
                  back
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-center">Items</p>
                <ItemColumns
                  onClickDelayedSaleButton={onClickDelayedSaleButton}
                />
              </div>
              <div className="center">
                <Button onClick={toggle}>Continue</Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DelayedSaleDialog
        open={isDelayedSaleDialogOpen}
        toggle={toggleDelayedSaleDialog}
      />
    </>
  )
}

interface ItemColumnsProps {
  onClickDelayedSaleButton: () => void
}

const ItemColumns: FC<ItemColumnsProps> = ({ onClickDelayedSaleButton }) => {
  const numberOfDelayedSaleItemsNotReserved = items.filter(
    (item) => !item.reservations && item.isDelayedSale
  ).length
  const numberOfDelayedSaleItems = items.filter(
    (item) => item.isDelayedSale
  ).length

  const DelayedSaleNode = (
    <div className="hstack gap-1" key="">
      <button
        className="hstack gap-2 items-center text-sm"
        onClick={onClickDelayedSaleButton}>
        <Clock className="text-blue-500" size="20px" />
      </button>
      <p>Delayed Sales without Reservation</p>
    </div>
  )

  const numberOfFreeItems = items.filter((item) => !item.price).length
  const numberOfFreeItemsThatAreNotSold = items.filter(
    (item) => !item.price && !item.isSold
  ).length

  const totalPricedItems = items.filter((item) => item.price).length
  const totalPricedItemsNotSold = items.filter(
    (item) => item.price && !item.isSold
  ).length

  const FreeItemsNode = (
    <div className="hstack gap-1">
      <p className="bg-blue-500 text-white px-2 rounded-sm">Free Items</p>
      <p>Remaining</p>
    </div>
  )

  const itemColumnValues = [
    [numberOfFreeItemsThatAreNotSold, numberOfFreeItems, FreeItemsNode],
    [
      numberOfDelayedSaleItemsNotReserved,
      numberOfDelayedSaleItems,
      DelayedSaleNode,
    ],
    [totalPricedItemsNotSold, totalPricedItems, 'Priced Items Remaining'],
  ]

  return (
    <div className="hstack w-full gap-2">
      <div className="stack text-right gap-1">
        {itemColumnValues.map((value, index) => {
          return (
            <div key={index}>
              <p>
                <b>{value[0]}</b>/{value[1]}:
              </p>
            </div>
          )
        })}
      </div>
      <div className="stack gap-1">
        {itemColumnValues.map((value, index) => {
          return (
            <div key={index}>
              <div className="hstack gap-1">{value[2]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
