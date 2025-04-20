import './App.css'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between items-center h-20 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 17v-7h2v7H7zm4 0v-9h2v9h-2zm4 0v-5h2v5h-2z"/>
          </svg>
          <span className="text-xl font-semibold text-gray-900">SVG Chart Library</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Features</a>
          <a href="#examples" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Examples</a>
          <a href="#why-choose-us" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Why Choose Us</a>
          <a href="#docs" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Documentation</a>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
            Install
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center text-center py-24 space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          SVG Dynamic Chart Library
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl">
          A lightweight, pure SVG charting library for creating dynamic and 
          interactive charts with real-time updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black transition-colors">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 12l-4-4h3V3h2v5h3L8 12z"/>
              <path fill="currentColor" d="M14 13v1H2v-1h12z"/>
            </svg>
            npm install svg-chart-maker
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-900 font-medium rounded-md hover:border-gray-900 transition-colors">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16">
              <path fill="currentColor" d="M4 1h8v2H4V1zm0 3h8v1H4V4zm0 2h8v1H4V6zm0 2h4v1H4V8z"/>
              <path fill="currentColor" d="M2 0v16h12V0H2zm11 15H3V1h10v14z"/>
            </svg>
            View Documentation
          </button>
        </div>
      </main>
    </div>
  )
}

export default App 