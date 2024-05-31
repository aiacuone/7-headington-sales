import { capitalizeFirstLetter } from '@/lib/utils'
import { Button } from './button'
import Link from 'next/link'
import { Item, Reservation } from '@/app/items'
import { FC } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { useRouter } from 'next/navigation'

interface ItemDetailsProps {
  item: Item
  onOpen?: () => void
  toggleDialog?: () => void
}

export const ItemDetails: FC<ItemDetailsProps> = ({
  item,
  onOpen,
  toggleDialog,
}) => {
  const { details, link, isSold } = item
  const showMoreDetails = !!onOpen
  const {
    isOpen: open,
    toggle,
    onOpen: onOpenConfirmDelayedSale,
    onClose: onCloseConfirmDelayedSale,
  } = useDisclosure()
  const { push } = useRouter()

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

  const mailTo = () => {
    push(
      `mailto:aiacuone@gmail.com?subject=DA101FZ Sale: ${item.name}&body=Hello, I am interested in purchasing the item: ${item.name}`
    )
  }

  const onPurchase = () => {
    if (item.isDelayedSale) return onOpenConfirmDelayedSale()
    mailTo()
  }

  const onConfirmDelayedSale = () => {
    mailTo()
    onCloseConfirmDelayedSale()
  }

  const showCloseButton = !!toggleDialog

  return (
    <>
      <div className="stack gap-3 h-full w-full">
        <ul className="w-full">
          {Object.entries(mappingDetails).map(([key, value], index) => {
            const keySuffix = {
              width: (width: number) => `${width}mm`,
              height: (height: number) => `${height}mm`,
              depth: (height: number) => `${height}mm`,
              watts: (watts: number) => `${watts}W`,
              reservations: (reservations: Reservation[]) =>
                `${reservations.length}`,
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
        {details && <p className="text-left text-sm">{details}</p>}
        <div className="flex-1 w-full" />
        <div className="stack gap-1">
          <div className="hstack gap-1">
            {link && (
              <Link href={link} target="_blank" className="w-full">
                <Button className="w-full">Link</Button>
              </Link>
            )}
            {showMoreDetails && (
              <Button className="w-full" onClick={onOpen} disabled={isSold}>
                View
              </Button>
            )}
          </div>
          <div className="hstack gap-1">
            <Button
              className="bg-muted-foreground w-full"
              onClick={onPurchase}
              disabled={isSold}>
              Inquire
            </Button>
            {showCloseButton && (
              <Button onClick={toggleDialog} className="w-full">
                Close
              </Button>
            )}
          </div>
        </div>
      </div>
      <DelayedSaleDialog
        open={open}
        toggle={toggle}
        onConfirm={onConfirmDelayedSale}
      />
    </>
  )
}
