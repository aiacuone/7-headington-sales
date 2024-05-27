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

interface IntroDialogProps {
  open: boolean
  toggle: () => void
}

export const IntroDialog: FC<IntroDialogProps> = ({ open, toggle }) => {
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>Welcome!</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="stack gap-5">
            <p>
              We are moving abroad and will be selling a variety of items from
              our home. Please feel free to browse the items and contact us if
              you are interested in a purchase.
            </p>
            <div className="center">
              <Button onClick={toggle}>Continue</Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
