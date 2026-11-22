type WindowProps = {
  title: string
  onClose: () => void
}

function Window({ title, onClose }: WindowProps) {
  return (
     <div className="w-[500px] max-w-[90vw] overflow-hidden rounded-2xl border-2 border-blue-300 shadow-xl">

      {/* Title bar */}
      <div className="flex items-center gap-4 bg-blue-200 p-4">
        
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