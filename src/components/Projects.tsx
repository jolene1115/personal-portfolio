export default function Projects() {
  return (
    <section>
        <h2 className="font-bold">CircleBack (ZotHacks 2026 - 2nd Place)</h2>
        <p className="mb-3 text-sm italic text-gray-600">
        React, JavaScript, Python, FastAPI, Google Gemini API
        </p>
        
        <div className= "grid gap-4 sm:grid-cols-2 sm:items-start">
            <p>An AI-powered web application that helps users practice for interviews and public speaking through personalized, actionable feedback. 
            Integrated the Google Gemini API to generate role-specific interview questions and personalized feedback based on user responses. 
            Developed features supporting resume-based interview preparation, feedback on speaking pace, filler words, and key points covered.
            </p>

            <div className="space-y-2">
                <img
                src="/images/circleback.jpg"
                alt="CircleBack main screen"
                className="w-full rounded-lg"
                />
                <div className ="flex flex-col items-start gap-1">
                    <a href="https://github.com/jolene1115/circleback" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline">
                    View project on GitHub
                    </a>

                    <a href="https://circleback-zh26.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline">
                    Try CircleBack
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}