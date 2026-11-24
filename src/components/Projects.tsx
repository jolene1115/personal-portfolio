export default function Projects() {
  return (
    <div className="divide-y divide-sky-200">
    <section className="py-6 first:pt-0 last:pb-0">
      
        <div className= "grid gap-4 sm:grid-cols-2 sm:items-start">
            <div>
                <h2 className="font-bold">CircleBack (ZotHacks 2026 - 2nd Place)</h2>
                <p className="mb-3 text-sm italic text-gray-600">
                    React · JavaScript · Python · FastAPI · Gemini API
                 </p>
                  <p>An AI-powered web application that helps users practice for interviews and public speaking through personalized, actionable feedback. 
            Integrated the Google Gemini API to generate role-specific interview questions and personalized feedback based on user responses. 
            Developed features supporting resume-based interview preparation, feedback on speaking pace, filler words, and key points covered.
            </p>
            </div>
           

            <div className="space-y-2 sm: pt-10">
                <img
                src="/images/circleback.jpg"
                alt="CircleBack main screen"
                className="aspect-video w-full rounded-lg bg-slate-100 object-contai"
                />
                <div className ="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                    <a href="https://github.com/jolene1115/circleback" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">
                    View project on GitHub
                    <span aria-hidden="true" className="ml-1">↗</span>
                    </a>

                    <a href="https://circleback-zh26.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">
                    Try CircleBack
                    <span aria-hidden="true" className="ml-1">↗</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="py-6 first:pt-0 last:pb-0">
         <h2 className="font-bold">Airport Database Backend</h2>
        <p className="mb-3 text-sm italic text-gray-600">
        Python · SQL · SQLite
        </p>
        <p>
    Built a SQLite backend for a Tkinter application that handles 15 event
    types across three related tables. Used parameterized queries and turned
    database constraint errors into feedback the interface could display.
  </p>
    </section>


<section className="py-6 first:pt-0 last:pb-0">
         <h2 className="font-bold">Direct Messaging Client</h2>
        <p className="mb-3 text-sm italic text-gray-600">
        Python · Tkinter · unittest
        </p>
        <p>
    A messaging application designed to allow users to communicate 
    through a client interface. Developed as a software engineering project focused on implementing messaging functionality and exploring client-server communication.
  </p>
    </section>


    <section className="py-6 first:pt-0 last:pb-0">
        <div className= "grid gap-4 sm:grid-cols-2 sm:items-start">
            <div>
                <h2 className="font-bold">InkQuest</h2>
                <p className="mb-3 text-sm italic text-gray-600">
                    Figma · UI/UX Design · User Research
                </p>

                <p> A Figma prototype for a gamified fine-motor skills app designed for 
                    elementary-aged children. Conducted user research and usability testing with children and 
                    educators to guide iterative UI/UX improvements across onboarding, learning exercises, and navigation.
                </p>
            </div>
        
            <div className="space-y-2 sm: pt-2">
                <img
                src="/images/InkQuestNew.png"
                alt="InkQuest logo"
                className="aspect-video w-full rounded-lg bg-slate-100 object-contain"
                />
                <div className ="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                    <a href="https://www.figma.com/deck/N8vZmuV9HrM9mXu0VUMUeS/Case-Study-Presentation?node-id=235-2785&t=ut7rZTNy1tvipRsP-1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">
                    View Case Study
                    <span aria-hidden="true" className="ml-1">↗</span>
                    </a>
                    <a href="https://www.figma.com/proto/3N7p6KtTfxe6zNbXxE6VIZ/Design-Process?node-id=32-2&t=B9x6km1KDFkER2vC-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">
                    View Prototype
                    <span aria-hidden="true" className="ml-1">↗</span>
                    </a>
                </div>
            </div>
        </div>
        
    </section>


     <section className="py-6 first:pt-0 last:pb-0">
         <h2 className="font-bold">Jolene's Desktop</h2>
        <p className="mb-3 text-sm italic text-gray-600">
        React · TypeScript · Tailwind CSS
        </p>
        <p>
    You're looking at this website right now!
  </p>
    </section>
    </div>
  )
}