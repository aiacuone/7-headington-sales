import { items } from '@/app/items'
import { useDisclosure } from '@/lib/hooks'
import { FC } from 'react'
import { DelayedSaleDialog } from './DelayedSaleDialog'

interface ItemColumnsProps {}

export const ItemColumns: FC<ItemColumnsProps> = () => {
  const { isOpen: isDelayedSaleDialogOpen, toggle: toggleDelayedSaleDialog } =
    useDisclosure()

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
    [totalPricedItemsNotSold, totalPricedItems, '£ Priced Items Remaining'],
  ]

  return (
    <>
      <div className="hstack w-full gap-2 text-sm">
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
      <DelayedSaleDialog
        open={isDelayedSaleDialogOpen}
        toggle={toggleDelayedSaleDialog}
      />
    </>
  )
}
