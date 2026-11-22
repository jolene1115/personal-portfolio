export default function Experience(){
    return (
        <div className="space-y-6 border-l-2 border-sky-200 pl-5">
            <section className="relative">
                <span
                    aria-hidden="true"
                    className="absolute -left-[21px] top-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 
                    rounded-full border-2 border-white bg-sky-500"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h2 className="font-bold">IT Operations Monitoring Assistant</h2>
                    <p className="mt-1 text-sm italic text-gray-600">
                    Aug 2026 - Present
                    </p>
                </div>

                <p className="mt-1 text-sm italic text-gray-600">
                    UC Irvine Office of Information Technology
                </p>

                <p className="mt-2 text-sm text-gray-700">
                    Monitor enterprise applications and 
                    infrastructure, troubleshoot incidents, 
                    and coordinate escalations in UCI's Network Operations Center
                </p>
                    
    
            </section>

            <section className="relative">
                <span
                    aria-hidden="true"
                    className="absolute -left-[21px] top-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 
                    rounded-full border-2 border-white bg-sky-500"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h2 className="font-bold">Project Management Intern</h2>
                    <p className="mt-1 text-sm italic text-gray-600">
                    Jun - Aug 2025
                    </p>
                </div>
                <p className="mt-1 text-sm italic text-gray-600">
                    Asian American Economic Development Enterprise (AAEDE)
                </p>

               <p className="mt-2 text-sm text-gray-700">
                    Coordinated planning and logistics for 
                    AAEDE's 14th Annual Job and Career Fair, 
                    serving 750+ job seekers and 120+ employers
                </p>
            </section>
        </div>
    )
}