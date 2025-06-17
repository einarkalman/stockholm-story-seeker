
import { ArrowLeft, Clock, MapPin, Users, Home, Train } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeighborhoodsGuide = () => {
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
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Neighborhoods</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm Neighborhoods Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the character, amenities, and lifestyle of Stockholm's diverse neighborhoods to find your perfect area.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            18 min read
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Stockholm neighborhoods and architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Central Stockholm</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏰 Gamla Stan (Old Town)</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Historic heart of Stockholm with cobblestone streets and medieval architecture.
                </p>
                <div className="text-xs text-blue-700">
                  <div>• Tourist area with high prices</div>
                  <div>• Limited dining and shopping for residents</div>
                  <div>• Beautiful but very touristy</div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🎭 Södermalm</h3>
                <p className="text-purple-800 text-sm mb-3">
                  Trendy, bohemian island with vibrant nightlife and creative scene.
                </p>
                <div className="text-xs text-purple-700">
                  <div>• Hip restaurants and bars</div>
                  <div>• Young professional crowd</div>
                  <div>• Great views and culture</div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🏢 Norrmalm</h3>
                <p className="text-green-800 text-sm mb-3">
                  Business district with shopping, Central Station, and modern amenities.
                </p>
                <div className="text-xs text-green-700">
                  <div>• Excellent transport connections</div>
                  <div>• Shopping and business hub</div>
                  <div>• More expensive but convenient</div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">💎 Östermalm</h3>
                <p className="text-orange-800 text-sm mb-3">
                  Upscale area with luxury shopping, fine dining, and elegant architecture.
                </p>
                <div className="text-xs text-orange-700">
                  <div>• High-end lifestyle</div>
                  <div>• Beautiful parks and waterfront</div>
                  <div>• Most expensive area</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Suburban Areas</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Vasastan</h3>
                  <Train className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-3">
                  Popular residential area with parks, cafes, and excellent transport links.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Great restaurants and cafes</li>
                      <li>• Beautiful Vasaparken</li>
                      <li>• Good public transport</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Best for:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Young professionals</li>
                      <li>• Families with children</li>
                      <li>• Active lifestyle enthusiasts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Kungsholmen</h3>
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-600 mb-3">
                  Island location with waterfront living and more affordable housing options.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Långholmen park and beaches</li>
                      <li>• Relatively affordable</li>
                      <li>• Good metro connections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Character:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Residential and quiet</li>
                      <li>• Growing food scene</li>
                      <li>• Mix of old and new buildings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outer Areas</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">🚇 Commuter Towns</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Solna:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Mall of Scandinavia</li>
                    <li>• Modern developments</li>
                    <li>• Good for families</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Täby:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Suburban lifestyle</li>
                    <li>• Excellent schools</li>
                    <li>• Shopping centers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Nacka:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Nature nearby</li>
                    <li>• Modern housing</li>
                    <li>• Growing tech hub</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Choose Your Neighborhood</h3>
              <p className="text-gray-300 mb-4">
                Consider your lifestyle, budget, and commute when selecting the perfect Stockholm neighborhood.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.hemnet.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Hemnet - Property prices and market data
                </a>
                <a 
                  href="https://www.hitta.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Hitta.se - Local services and amenities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodsGuide;
