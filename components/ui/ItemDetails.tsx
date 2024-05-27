import { capitalizeFirstLetter } from '@/lib/utils'
import { Button } from './button'
import Link from 'next/link'
import { Item } from '@/app/items'
import { FC } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { DelayedSaleDialog } from './DelayedSaleDialog'
import { useRouter } from 'next/navigation'

interface ItemDetailsProps {
  item: Item
  onOpen?: () => void
}

export const ItemDetails: FC<ItemDetailsProps> = ({ item, onOpen }) => {
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
      `mailto:aiacuone@gmail.com?subject=7 Headington Sale: ${item.name}&body=Hello, I am interested in purchasing the item: ${item.name}`
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

  return (
    <>
      <div className="stack gap-3 h-full w-full">
        <ul className="w-full">
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
        {details && <p className="text-left text-sm">{details}</p>}
        <div className="flex-1 w-full" />
        <div className="stack gap-1">
          <div className="hstack gap-1">
            {showMoreDetails && (
              <Button className="w-full" onClick={onOpen} disabled={isSold}>
                View
              </Button>
            )}
            {link && (
              <Link href={link} target="_blank" className="w-full">
                <Button className="w-full">Link</Button>
              </Link>
            )}
          </div>
          <Button className="bg-muted-foreground" onClick={onPurchase}>
            Contact
          </Button>
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
