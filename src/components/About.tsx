export default function About(){
    return (
        <section>
            <h2 className="font-bold">Jolene Kwan</h2>
            <p className="mb-3 text-sm italic text-gray-600">
                Software Engineering and Business Information Management student at UC Irvine
            </p>
            <p>
                Hello! I'm Jolene, a student at UC Irvine double majoring in Software Engineering and Business Information Management.
                I'm interested in how technology, people, and systems work together to solve real-world problems. 
                I enjoy learning new things, building projects, and turning ideas into meaningful solutions.
            </p>
            <p className="mt-3">
                Currently seeking Summer 2027 internship opportunities where I can continue learning and gain hands-on experience!
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                <p>jolenek198@gmail.com</p>
                <a href="https://www.linkedin.com/in/jolene-k/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline">
                    LinkedIn
                </a>
                <a href="https://github.com/jolene1115" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline">
                    GitHub
                </a>
                
            </div>
        </section>
    )
}