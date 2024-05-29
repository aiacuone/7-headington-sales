'use client'

import { ItemGrid } from '@/components/ui/ItemGrid'
import { Category, items } from './items'
import { capitalizeFirstLetter } from '@/lib/utils'
import { useEffect } from 'react'
import { useDisclosure } from '@/lib/hooks'
import { InfoDialog } from '@/components/ui/InfoDialog'

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

  return (
    <>
      <div className="stack gap-10">
        {Object.values(Category).map((category) => {
          return (
            <div key={category} className="stack gap-5">
              <p className="text-2xl font-bold" id={category}>
                {capitalizeFirstLetter(category)}
              </p>
              <ItemGrid
                items={items.filter((item) => item.category === category)}
              />
            </div>
          )
        })}
      </div>
      <InfoDialog open={open} toggle={_toggle} />
    </>
  )
}
