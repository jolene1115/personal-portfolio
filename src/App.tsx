import DesktopIcon from './components/DesktopIcon'
import Window from './components/Window'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import {useState} from 'react'


function App() {
  const [openFolder, setOpenFolder] = useState<string | null>(null)
  const [showWelcome, setShowWelcome] = useState(true)
  return (
    <div className="relative min-h-screen
          bg-[radial-gradient(ellipse_at_center,#ffffff_0%,#dbeafe_50%,#93c5fd_100%)]
          flex flex-col items-center justify-center gap-6 py-6">
     
      {showWelcome && (
       
          <Window title="Welcome" compact onClose={() => setShowWelcome(false)}>
            <div className="p-4 text-center">
              <h1 className="text-3xl font-bold text-gray-800">jolene's desktop</h1>
              <p className="mt-3 text-gray-500">
                welcome to my little corner of the internet!
              </p>
            </div>
          </Window>

      )}
     

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:absolute md:right-6 md:top-6 md:grid-cols-1 md:gap-6">
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
                {openFolder === 'Projects' ? (
                  <Projects /> 
                ) : openFolder === 'About' ? (
                  <About />
                ) : openFolder === 'Experience' ? ( 
                  <Experience />
                ) : null}
                </Window>
            </div>
         </div>
      )}
    </div>
  )
}

export default App