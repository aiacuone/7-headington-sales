import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FC } from 'react'
import Image from 'next/image'

interface QrCodeDialogProps {
  open: boolean
  toggle: () => void
}

export const QrCodeDialog: FC<QrCodeDialogProps> = ({ open, toggle }) => {
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="center w-full stack">
            <Image
              src="https://7-headington-sales.s3.eu-west-2.amazonaws.com/qr-code2.png"
              alt="QR Code Image"
              height={300}
              width={300}
            />
            <p>https://house-clearance-da101fz.netlify.app/</p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
