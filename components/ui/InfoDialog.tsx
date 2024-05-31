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
import { ItemColumns } from './ItemColumns'

interface IntroDialogProps {
  open: boolean
  toggle: () => void
}

export const InfoDialog: FC<IntroDialogProps> = ({ open, toggle }) => {
  return (
    <>
      <Dialog open={open} onOpenChange={toggle}>
        <DialogContent className="w-full sm:w-[800px]">
          <DialogHeader>
            <DialogTitle>Welcome!</DialogTitle>
            <DialogDescription>
              We are in DA101FZ, and are having a house clearance!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="stack gap-5 text-sm">
              <div className="stack gap-2">
                <p>
                  We are moving abroad and will be selling a variety of items
                  from our home.
                </p>
                <p>
                  Please feel free to browse the items and contact us if you are
                  interested in a purchase.
                </p>
                <p>
                  This house clearance will officially end on the{' '}
                  <b>June 25th</b>. We will be moving abroad and will not be
                  able to sell items after this date.
                </p>
                <p>
                  New items are likely to be added daily, so be sure to check
                  back
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-center sm:text-left">
                  Items
                </p>
                <ItemColumns />
              </div>
              <div className="center">
                <Button onClick={toggle}>Continue</Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
