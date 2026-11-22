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
    <div className="relative min-h-screen bg-linear-to-br from-white to-sky-200 flex items-center justify-center">
     
      {showWelcome && (
        <div className="md:absolute md:left-6 md:top-6">
          <Window title="Welcome" onClose={() => setShowWelcome(false)}>
            <div className="p-4 text-center">
              <h1 className="text-3xl font-bold text-gray-800">jolene's desktop</h1>
              <p className="mt-3 text-gray-500">
                welcome to my little corner of the internet!
              </p>
            </div>
          </Window>
         </div>
      )}
     

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