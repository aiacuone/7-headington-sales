'use client'

import { Info, QrCode } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'
import { QrCodeDialog } from './QrCodeDialog'
import { useDisclosure } from '@/lib/hooks'
import { IntroDialog } from './IntroDialog'

export const Header = () => {
  const {
    toggle: toggleQrDialog,
    isOpen: isQrDialogOpen,
    onOpen: onOpenQrDialog,
  } = useDisclosure()
  const {
    toggle: toggleIntroDialog,
    isOpen: isIntroDialogOpen,
    onOpen: onOpenIntroDialog,
  } = useDisclosure()
  return (
    <>
      <header className="bg-muted p-3 relative center h-[70px]">
        <div className="w-full max-w-screen-lg hstack">
          <div className="center">
            <p>7 Headington Rd</p>
          </div>
          <div className="flex-1 center gap-3">
            <p className="font-bold w-full text-right sm:text-center">
              House Clearance Sale
            </p>
          </div>
          <div className="gap-3 hidden sm:flex">
            <Button onClick={onOpenIntroDialog}>
              <Info />
            </Button>
            <Button onClick={onOpenQrDialog}>
              <QrCode />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      <QrCodeDialog toggle={toggleQrDialog} open={isQrDialogOpen} />
      <IntroDialog open={isIntroDialogOpen} toggle={toggleIntroDialog} />
    </>
  )
}
