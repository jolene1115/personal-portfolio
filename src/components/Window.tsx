type WindowProps = {
  title: string
  onClose: () => void
}

function Window({ title, onClose }: WindowProps) {
  return (
     <div className="w-[500px] max-w-[90vw] overflow-hidden rounded-2xl border-2 border-blue-300 shadow-xl">

      {/* Title bar */}
      <div className="flex items-center gap-4 bg-blue-200 p-4">
        <button
        type="button"
        onClick={onClose}
        className="h-4 w-4 rounded-full bg-pink-300 cursor-pointer"
        aria-label="Close window"
        />

        <p>{title}</p>
      </div>

      {/* Window contents */}
      <div className="bg-white p-6">
        <p>Folder contents coming soon...</p>
      </div>

    </div>
   

  )
}

export default Window