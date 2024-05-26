'use client'

import { ModeToggle } from '../ModeToggle'

export const Header = () => {
  return (
    <header className="bg-muted p-2 relative center h-[70px]">
      <div className="w-full max-w-screen-lg hstack">
        <div className="center">
          <p>7 Headington Rd</p>
        </div>
        <div className="flex-1 center gap-3"></div>
        <ModeToggle />
      </div>
    </header>
  )
}
