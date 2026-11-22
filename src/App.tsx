import DesktopIcon from './components/DesktopIcon'
import Window from './components/Window'
import Projects from './components/Projects'
import {useState} from 'react'


function App() {
  const [openFolder, setOpenFolder] = useState<string | null>(null)
  return (
    <div className="relative min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          jolene's desktop
        </h1>
        <p className="mt-4 text-gray-500">
          welcome to my little corner of the internet!
        </p>
      </div>
      
        <div className="absolute right-6 top-6 flex flex-col gap-6">
              <DesktopIcon name="About" onOpen={setOpenFolder}/>
              <DesktopIcon name="Projects" onOpen={setOpenFolder} />
              <DesktopIcon name="Experience" onOpen={setOpenFolder} />
              <DesktopIcon name="Extracurriculars" onOpen={setOpenFolder}/>
        </div>
      {openFolder !== null && (
        
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="pointer-events-auto">
              <Window
                title={openFolder}
                onClose={() => setOpenFolder(null)}
              >
                {openFolder === 'Projects' ? <Projects /> : null}
                </Window>
            </div>
         </div>
      )}
    </div>
  )
}

export default App