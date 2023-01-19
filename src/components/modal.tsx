import React from 'react'

interface ModalPrors {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalPrors) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 bottom-0 left-0"
        onClick={onClose}
      />
      <div className="min-w-[320px] h-auto rounded-2xl bg-white p-4 fixed top-24 left-1/2 -translate-x-1/2">
        <h2 className="text-xl text-center font-bold">{title}</h2>
        {children}
      </div>
    </>
  )
}
