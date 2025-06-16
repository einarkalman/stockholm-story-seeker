
import { ArrowLeft, Clock, MapPin, Home, Coffee, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const LivingGuide = () => {
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
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Living</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm's Best Neighborhoods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the character and charm of Stockholm's different districts, from trendy Södermalm to family-friendly suburbs.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            18 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Stockholm's Layout</h2>
            <p className="text-gray-600 mb-6">
              Stockholm is built on 14 islands connected by bridges, giving the city its unique character. 
              The city is divided into several distinct areas, each with its own personality, amenities, and price points. 
              Understanding these neighborhoods will help you choose the best area for your lifestyle and budget.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🗺️ Main Areas Overview</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Gamla Stan:</strong> Historic old town with cobblestone streets</li>
                <li>• <strong>Norrmalm:</strong> City center with shopping and business district</li>
                <li>• <strong>Södermalm:</strong> Trendy, bohemian island south of the center</li>
                <li>• <strong>Östermalm:</strong> Upscale area with luxury shopping and dining</li>
                <li>• <strong>Vasastan:</strong> Young professionals and students area</li>
                <li>• <strong>Kungsholmen:</strong> Quiet residential island with parks</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Central Neighborhoods</h2>
            
            <div className="space-y-8 mb-10">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Södermalm (Söder)</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Trendy</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Stockholm's creative heart, known for vintage shops, independent cafes, and vibrant nightlife. 
                  Popular with young professionals and artists.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Vibrant cultural scene</li>
                      <li>• Great restaurants and bars</li>
                      <li>• Beautiful views</li>
                      <li>• Walking distance to center</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Higher rental prices</li>
                      <li>• Can be noisy at night</li>
                      <li>• Limited parking</li>
                      <li>• Very competitive housing market</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Östermalm</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Upscale</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Stockholm's most prestigious neighborhood with elegant architecture, luxury shopping, 
                  and fine dining. Home to many diplomats and wealthy professionals.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Beautiful historic buildings</li>
                      <li>• Excellent shopping and dining</li>
                      <li>• Great public transport</li>
                      <li>• Safe and well-maintained</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Very expensive</li>
                      <li>• Can feel formal/stuffy</li>
                      <li>• Limited nightlife</li>
                      <li>• Less diverse community</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Vasastan</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Student-Friendly</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Popular with students and young professionals. Mix of residential streets and lively areas 
                  like Odenplan and St. Eriksplan.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• More affordable options</li>
                      <li>• Good student atmosphere</li>
                      <li>• Close to universities</li>
                      <li>• Excellent transport links</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Can be busy/crowded</li>
                      <li>• Some areas lack character</li>
                      <li>• Limited green spaces</li>
                      <li>• Increasing gentrification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Suburban & Family Areas</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Trees className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-3">Family-Friendly Suburbs</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• <strong>Täby:</strong> Excellent schools, family homes</li>
                  <li>• <strong>Danderyd:</strong> Affluent area, great for families</li>
                  <li>• <strong>Nacka:</strong> Nature access, modern housing</li>
                  <li>• <strong>Lidingö:</strong> Island living, family-oriented</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Home className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Up-and-Coming Areas</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• <strong>Hammarby Sjöstad:</strong> Modern eco-district</li>
                  <li>• <strong>Vällingby:</strong> Multicultural, affordable</li>
                  <li>• <strong>Farsta:</strong> Growing cultural scene</li>
                  <li>• <strong>Rinkeby:</strong> Diverse, budget-friendly</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Living by Area</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💰 Average Monthly Rent (1-bedroom)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                <div>
                  <div className="text-sm space-y-1">
                    <div>Östermalm: 18,000-25,000 SEK</div>
                    <div>Södermalm: 15,000-22,000 SEK</div>
                    <div>Gamla Stan: 16,000-23,000 SEK</div>
                    <div>Vasastan: 13,000-19,000 SEK</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm space-y-1">
                    <div>Kungsholmen: 14,000-20,000 SEK</div>
                    <div>Hammarby Sjöstad: 12,000-17,000 SEK</div>
                    <div>Suburban areas: 8,000-15,000 SEK</div>
                    <div>Student housing: 6,000-12,000 SEK</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Life Essentials</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Grocery Shopping</h3>
                <p className="text-gray-600 mb-3">
                  ICA, Coop, and Hemköp are major chains. Willys and Lidl for budget options. 
                  Many neighborhoods have local markets.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-3">
                  Each area has local vårdcentral (health centers). Choose one near your home 
                  for non-emergency care.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recreation</h3>
                <p className="text-gray-600 mb-3">
                  Stockholm has excellent parks, museums, and outdoor activities. Many neighborhoods 
                  have their own community centers and sports facilities.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🌟 Choosing Your Neighborhood</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Consider your commute to work/school</li>
                <li>• Think about your lifestyle preferences (nightlife vs. quiet)</li>
                <li>• Factor in your budget for rent and daily expenses</li>
                <li>• Visit neighborhoods at different times to get a feel</li>
                <li>• Check public transport connections</li>
                <li>• Consider proximity to amenities you value</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Explore Stockholm</h3>
              <p className="text-gray-300 mb-4">
                Take time to explore different neighborhoods before making your decision. 
                Each area has its own unique character and community.
              </p>
              <div className="space-y-2">
                <div className="text-blue-300">💡 Pro tip: Use the SL app to check transport times from potential neighborhoods to your workplace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingGuide;
