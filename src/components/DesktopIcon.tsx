type DesktopIconProps = {
  name: string
}

function DesktopIcon({ name }: DesktopIconProps) {
  return (
   
    <button 
        type="button"
        onClick ={() => console.log(name)}
        className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110">
        <img
          src="/icons/folder.svg"
          alt={`${name} folder`}
          className="w-16 h-16"
          />
        <p className = "text-sm text-gray-700">{name}</p>
    </button>
  )
}

export default DesktopIcon