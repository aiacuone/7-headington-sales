'use client'
import { FC } from 'react'

interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div
      className="overflow-y-scroll hide-scrollbar flex items:start p-[10px] justify-center flex-1"
      id="main-container">
      {children}
    </div>
  )
}
