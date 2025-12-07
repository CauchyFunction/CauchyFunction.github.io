export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-opacity-95">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome! 👋
            </h1>
            <p className="text-xl text-gray-600">
              Your journey starts here
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              This is a beautifully crafted welcome page built with Next.js and Tailwind CSS. 
              Perfect for your GitHub Pages deployment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast</h3>
                <p className="text-gray-600 text-sm">Built with Next.js for optimal performance</p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Beautiful</h3>
                <p className="text-gray-600 text-sm">Styled with Tailwind CSS utilities</p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive</h3>
                <p className="text-gray-600 text-sm">Works perfectly on all devices</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border-2 border-indigo-600 transition-colors">
              Learn More
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              Made with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}