'use client'

import { Info, Menu, QrCode } from 'lucide-react'
import { Button } from './button'
import { useDisclosure } from '@/lib/hooks'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { capitalizeFirstLetter } from '@/lib/utils'
import { Category, items } from '@/app/items'
import { QrCodeDialog } from './QrCodeDialog'
import { IntroDialog } from './IntroDialog'

export const Footer = () => {
  const { isOpen, onClose, toggle } = useDisclosure()
  const {
    toggle: toggledQrDialog,
    isOpen: isQrDialogOpen,
    onOpen: onOpenQrDialog,
  } = useDisclosure()
  const totalNumberOfItems = items.length
  const numberOfItemsSold = items.filter((item) => item.isSold).length
  const itemsRemaining = totalNumberOfItems - numberOfItemsSold

  return (
    <>
      <div className="p-2 bg-muted center h-[70px]">
        <div className="w-full center max-w-screen-lg">
          <div className="flex-1"></div>
          <Button onClick={toggle} className="h-10">
            <Menu />
          </Button>
          <div className="flex-1 justify-end flex">
            <b>{itemsRemaining}</b>/{totalNumberOfItems} Remaining
          </div>
        </div>
      </div>
      <FooterDrawer
        isOpen={isOpen}
        onClose={onClose}
        onOpenQrDialog={onOpenQrDialog}
      />
      <QrCodeDialog toggle={toggledQrDialog} open={isQrDialogOpen} />
    </>
  )
}

interface FooterDrawerProps {
  isOpen: boolean
  onClose: () => void
  onOpenQrDialog: () => void
}

const FooterDrawer: FC<FooterDrawerProps> = ({
  isOpen,
  onClose,
  onOpenQrDialog,
}) => {
  const { push } = useRouter()
  const {
    toggle: toggleIntroDialog,
    isOpen: isIntroDialogOpen,
    onOpen: onOpenIntroDialog,
  } = useDisclosure()

  const onClickLink = (href: string) => {
    onClose()
    push(href)
  }

  const onClickHome = () => {
    onClose()
    onOpenIntroDialog()
  }
  return (
    <>
      <Drawer open={isOpen}>
        <DrawerContent onBlur={onClose}>
          <DrawerHeader className="center">
            <div className="w-full max-w-screen-lg">
              <DrawerTitle>Select an option</DrawerTitle>
              <DrawerDescription>
                Navigate the app by selecting an option
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <DrawerFooter className="center">
            {Object.values(Category).map((category) => (
              <Button
                key={category}
                onClick={() => onClickLink(`/#${category}`)}
                className="w-[200px]">
                {capitalizeFirstLetter(category)}
              </Button>
            ))}
            <DrawerClose>
              <div className="hstack gap-3">
                <Button onClick={onOpenQrDialog} variant="outline">
                  <QrCode />
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button variant="outline" onClick={onClickHome}>
                  <Info />
                </Button>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <IntroDialog open={isIntroDialogOpen} toggle={toggleIntroDialog} />
    </>
  )
}
