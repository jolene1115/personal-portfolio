import type  { ReactNode } from 'react'

type WindowProps = {
  title: string
  onClose: () => void
  children?: ReactNode
}

function Window({ title, onClose, children, compact = false }: WindowProps) {
  return (
     <div className="`${compact ? 'w-[400px]' : 'w-[800px]'} max-w-[90vw] overflow-hidden rounded-2xl border-2 border-blue-300 shadow-xl">

      {/* Title bar */}
      <div className="flex items-center gap-4 border-b border-sky-400 bg-linear-to-b from-white via-sky-100 to-sky-300 p-4 relative">
        
        <div className="flex items-center gap-2">
        <button
        type="button"
        onClick={onClose}
        className="h-4 w-4 rounded-full bg-[#FF605C] cursor-pointer"
        aria-label="Close window"
        />
        <span className="h-4 w-4 rounded-full bg-[#FFBD44]" aria-hidden="true"/>
        <span className="h-4 w-4 rounded-full bg-[#00CA4E]" aria-hidden="true" />
        </div>


        <p className="absolute left-1/2 -translate-x-1/2">{title}</p>
      </div>

      {/* Window contents */}
      <div className="bg-white p-6">
       {children?? <p>Folder contents coming soon...</p>}
      </div>

    </div>
   

  )
}

export default Window