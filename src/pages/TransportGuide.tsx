
import { ArrowLeft, Clock, Users, CreditCard, MapPin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransportGuide = () => {
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
            <Users className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Transport</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm Public Transport Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master the SL system, understand zone pricing, and discover the best travel cards for getting around the city.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            12 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding SL (Storstockholms Lokaltrafik)</h2>
            <p className="text-gray-600 mb-6">
              SL operates Stockholm's comprehensive public transport network, including buses, metro (Tunnelbana), 
              commuter trains (Pendeltåg), trams, and boats. The system covers Stockholm County and is one of the 
              most efficient public transport networks in the world.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🚇 Metro (Tunnelbana)</h3>
                <p className="text-blue-800 text-sm">
                  Three main lines (Blue, Red, Green) with 100 stations. Runs from 5 AM to 1 AM on weekdays, 
                  24 hours on weekends.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🚌 Buses</h3>
                <p className="text-green-800 text-sm">
                  Extensive bus network covering all areas. Blue buses for city routes, 
                  red buses for longer distances.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🚆 Commuter Trains</h3>
                <p className="text-purple-800 text-sm">
                  Connect Stockholm to surrounding suburbs and cities. Essential for longer distances.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">⛵ Boats</h3>
                <p className="text-orange-800 text-sm">
                  Ferry services to the archipelago islands. Seasonal schedules apply.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zone System & Pricing</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">📍 Zone Structure</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Zone A:</strong> Central Stockholm (most tourist areas)</li>
                <li>• <strong>Zone B:</strong> Inner suburbs</li>
                <li>• <strong>Zone C:</strong> Outer suburbs and some airports</li>
                <li>• Most trips within Stockholm city are Zone A only</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">SL Cards & Tickets</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">SL Monthly Card</h3>
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-3">
                  Best value for regular commuters. Unlimited travel within chosen zones.
                </p>
                <div className="text-sm text-gray-500">
                  <div>Zone A: ~930 SEK/month</div>
                  <div>Zone A+B: ~1,230 SEK/month</div>
                  <div>Zone A+B+C: ~1,530 SEK/month</div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">SL Single Tickets</h3>
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-600 mb-3">
                  For occasional travel. Valid for 75 minutes from validation.
                </p>
                <div className="text-sm text-gray-500">
                  <div>Zone A: 39 SEK</div>
                  <div>Zone A+B: 59 SEK</div>
                  <div>Zone A+B+C: 79 SEK</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Money-Saving Tips</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Buy monthly cards if you travel more than 24 times per month</li>
                <li>• Use the SL app for convenient mobile tickets</li>
                <li>• Students get 50% discount with valid student ID</li>
                <li>• Seniors (65+) get reduced prices</li>
                <li>• Annual cards offer additional savings</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Your SL Card</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Visit SL Center or Station</h3>
                <p className="text-gray-600">
                  Go to T-Centralen, Sergels Torg, or any major station with SL service.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Bring ID and Photo</h3>
                <p className="text-gray-600">
                  You'll need valid identification and a passport photo for your card.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Choose Your Card Type</h3>
                <p className="text-gray-600">
                  Select the zones and duration that best fit your travel needs.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Plan Your Journey</h3>
              <p className="text-gray-300 mb-4">
                Use the official SL app or website to plan routes, check schedules, and buy tickets.
              </p>
              <a 
                href="https://sl.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Visit SL.se
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportGuide;
