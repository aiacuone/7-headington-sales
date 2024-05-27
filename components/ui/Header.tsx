'use client'

import { QrCode } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'
import { QrCodeDialog } from './QrCodeDialog'
import { useDisclosure } from '@/lib/hooks'

export const Header = () => {
  const { toggle, isOpen: open, onOpen } = useDisclosure()
  return (
    <>
      <header className="bg-muted p-2 relative center h-[70px]">
        <div className="w-full max-w-screen-lg hstack">
          <div className="center">
            <p>7 Headington Rd</p>
          </div>
          <div className="flex-1 center gap-3"></div>
          <div className="hstack gap-3">
            <ModeToggle />
            <Button onClick={onOpen}>
              <QrCode />
            </Button>
          </div>
        </div>
      </header>
      <QrCodeDialog toggle={toggle} open={open} />
    </>
  )
}
