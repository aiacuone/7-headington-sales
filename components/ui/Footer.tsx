'use client'

import { Home, Menu } from 'lucide-react'
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

export const Footer = () => {
  const { isOpen, onClose, toggle } = useDisclosure()

  return (
    <>
      <div className="p-2 bg-muted center h-[70px]">
        <div className="w-full center max-w-screen-lg">
          <Button onClick={toggle} className="h-10">
            <Menu />
          </Button>
        </div>
      </div>
      <FooterDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}

interface FooterDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const FooterDrawer: FC<FooterDrawerProps> = ({ isOpen, onClose }) => {
  const { push } = useRouter()

  const onClickLink = (href: string) => {
    onClose()
    push(href)
  }
  return (
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
          <DrawerClose>
            <div className="hstack gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button variant="outline" onClick={() => onClickLink('/')}>
                <Home />
              </Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
