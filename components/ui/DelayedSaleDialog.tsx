import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Clock } from 'lucide-react'
import { FC } from 'react'
import { Button } from './button'

interface DelayedSaleDialogProps {
  open: boolean
  toggle: () => void
  onConfirm?: () => void
}

export const DelayedSaleDialog: FC<DelayedSaleDialogProps> = ({
  open,
  toggle,
  onConfirm,
}) => {
  const showConfirmButton = !!onConfirm
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>
            <div className="hstack gap-2">
              <Clock className="text-blue-500" />
              <p className="flex items-center">Delayed Sale</p>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="stack gap-5">
            <p>
              This is a delayed sale. This means that you can purchase/reserve
              this item, but it will be available July 1st
            </p>
            <div className="center">
              {showConfirmButton && (
                <Button className="self-start" onClick={onConfirm}>
                  I understand
                </Button>
              )}
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
