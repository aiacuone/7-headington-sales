'use client'

import { ItemGrid } from '@/components/ui/ItemGrid'
import { Category, Item, items } from './items'
import { capitalizeFirstLetter } from '@/lib/utils'
import { useEffect } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { InfoDialog } from '@/components/ui/InfoDialog'
import { ItemColumns } from '@/components/ui/ItemColumns'

export default function Home() {
  const { isOpen: open, toggle, onOpen } = useDisclosure()
  useEffect(() => {
    const hasSeenIntro = JSON.parse(localStorage.getItem('introSeen') as string)
    if (!hasSeenIntro) onOpen()
  })

  const _toggle = () => {
    const hasSeenIntro = JSON.parse(localStorage.getItem('introSeen') as string)
    if (!hasSeenIntro) localStorage.setItem('introSeen', 'true')
    toggle()
  }

  const areAllItemsSold = (items: Item[]) =>
    items.filter((item) => !item.isSold).length === 0

  const allItemsThatAreSold = items.filter((item) => item.isSold)

  return (
    <>
      <div className="stack gap-10">
        <div className="stack gap-1">
          <ItemColumns />
        </div>
        {Object.values(Category).map((category) => {
          const categoryItems = items.filter(
            (item) => item.category === category
          )

          if (areAllItemsSold(categoryItems)) return null

          return (
            <div key={category} className="stack gap-5">
              <p className="text-2xl font-bold" id={category}>
                {capitalizeFirstLetter(category)}
              </p>
              <ItemGrid items={categoryItems} />
            </div>
          )
        })}
        <div className="stack gap-5">
          <p className="text-2xl font-bold" id={'sold'}>
            Sold
          </p>
          <ItemGrid items={allItemsThatAreSold} showSoldItems />
        </div>
      </div>
      <InfoDialog open={open} toggle={_toggle} />
    </>
  )
}
