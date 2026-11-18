function App() {
  return (
    <div className="relative min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-pink-400">
          jolene's desktop
        </h1>
        <p className="mt-4 text-gray-500">
          welcome to my little corner of the internet!
        </p>
      </div>
      
      <div className="absolute right-6 top-6 flex flex-col gap-6">
        <span className="text-5xl">📁</span>
        <p className = "text-sm text-gray-700">Projects</p>
      </div>
    </div>
  )
}

export default App