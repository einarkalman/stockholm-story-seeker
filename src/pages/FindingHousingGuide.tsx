
import { ArrowLeft, Clock, Home, Search, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FindingHousingGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Housing</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finding Housing in Stockholm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Complete guide to finding apartments and housing in Stockholm, from rental queues to viewing tips.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            15 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Housing Market Overview</h2>
            <p className="text-gray-600 mb-6">
              Stockholm's housing market is competitive and highly regulated. Understanding the rental queue system 
              and different housing options is crucial for finding a place to live.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏢 First-Hand Contracts</h3>
                <p className="text-blue-800 text-sm">
                  Direct rental contracts from housing companies. Most secure but require long queue times.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">🔄 Second-Hand Contracts</h3>
                <p className="text-yellow-800 text-sm">
                  Subletting from someone with a first-hand contract. More available but less security.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Major Housing Platforms</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://bostad.stockholm.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Bostadsförmedlingen Stockholm
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Official housing queue for Stockholm. Register immediately to start accumulating queue days.
                </p>
                <div className="text-sm text-gray-500">
                  Cost: 220 SEK/year • Queue time: 5-20+ years for central areas
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://www.blocket.se/bostad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Blocket Bostad
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Sweden's largest marketplace for second-hand rentals and sales.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://qasa.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Qasa
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Modern platform for short and long-term rentals with verified listings.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Pro Tips</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Register for the housing queue immediately upon arrival</li>
                <li>• Be prepared to move quickly - good apartments go fast</li>
                <li>• Have all documents ready: ID, income proof, references</li>
                <li>• Consider temporary housing while searching</li>
                <li>• Network through colleagues and social media groups</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Start Your Housing Search</h3>
              <p className="text-gray-300 mb-4">
                Begin your housing journey with these essential platforms and resources.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://bostad.stockholm.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors mr-4"
                >
                  Join Housing Queue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindingHousingGuide;
