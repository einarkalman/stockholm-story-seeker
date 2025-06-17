
import { ArrowLeft, Clock, DollarSign, ShoppingCart, Home, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const CostOfLivingGuide = () => {
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
            <DollarSign className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Cost of Living</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cost of Living in Stockholm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive breakdown of living expenses in Stockholm, from housing to daily necessities.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Budget Overview</h2>
            <p className="text-gray-600 mb-6">
              Stockholm is among Europe's more expensive cities, but salaries are generally high to compensate. 
              Here's what you can expect to spend monthly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Home className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Housing Costs</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• <strong>1-room apartment:</strong> 8,000-15,000 SEK</li>
                  <li>• <strong>2-room apartment:</strong> 12,000-22,000 SEK</li>
                  <li>• <strong>3-room apartment:</strong> 18,000-35,000 SEK</li>
                  <li>• <strong>House rental:</strong> 25,000-50,000+ SEK</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <ShoppingCart className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-3">Groceries & Food</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• <strong>Single person:</strong> 2,500-3,500 SEK/month</li>
                  <li>• <strong>Couple:</strong> 4,000-6,000 SEK/month</li>
                  <li>• <strong>Family of 4:</strong> 6,000-8,500 SEK/month</li>
                  <li>• <strong>Restaurant meal:</strong> 120-300 SEK</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transportation Costs</h2>
            
            <div className="border border-gray-200 p-6 rounded-lg mb-8">
              <Car className="h-8 w-8 text-purple-600 mb-4" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Public Transport (SL)</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Monthly card (Zone A): 930 SEK</li>
                    <li>• Monthly card (A+B): 1,230 SEK</li>
                    <li>• Single ticket: 39 SEK</li>
                    <li>• Annual card: 8,800 SEK (save 1,800 SEK)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Car Ownership</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fuel: 16-18 SEK/liter</li>
                    <li>• Parking (city center): 25-40 SEK/hour</li>
                    <li>• Insurance: 3,000-8,000 SEK/year</li>
                    <li>• Vehicle tax: 360-5,000+ SEK/year</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilities & Services</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Monthly Utilities</h3>
                <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Apartment (2-room):</h4>
                    <ul className="space-y-1">
                      <li>• Electricity: 400-800 SEK</li>
                      <li>• Heating: Often included in rent</li>
                      <li>• Internet: 200-400 SEK</li>
                      <li>• Phone: 200-400 SEK</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Services:</h4>
                    <ul className="space-y-1">
                      <li>• TV license: 0 SEK (abolished)</li>
                      <li>• Home insurance: 150-300 SEK</li>
                      <li>• Gym membership: 300-600 SEK</li>
                      <li>• Streaming services: 100-200 SEK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Entertainment & Lifestyle</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dining Out</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Coffee: 35-45 SEK</li>
                  <li>• Fast food: 80-120 SEK</li>
                  <li>• Casual dinner: 150-250 SEK</li>
                  <li>• Fine dining: 400-800+ SEK</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Entertainment</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cinema ticket: 120-150 SEK</li>
                  <li>• Theater ticket: 200-500 SEK</li>
                  <li>• Museum entry: 100-150 SEK</li>
                  <li>• Concert: 300-1,000+ SEK</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Care</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Haircut: 400-800 SEK</li>
                  <li>• Dental cleaning: 800-1,200 SEK</li>
                  <li>• Gym: 300-600 SEK/month</li>
                  <li>• Massage: 600-1,000 SEK</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Money-Saving Tips</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Shop at discount grocery chains like <a href="https://www.willys.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Willys</a> or <a href="https://www.lidl.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Lidl</a></li>
                <li>• Take advantage of lunch specials at restaurants (Dagens lunch)</li>
                <li>• Use <a href="https://toogoodtogo.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Too Good To Go</a> app for discounted food</li>
                <li>• Many museums are free on certain days</li>
                <li>• Enjoy free outdoor activities and nature</li>
                <li>• Buy annual transport pass if you use public transport regularly</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cost Comparison Tools</h3>
              <p className="text-gray-300 mb-4">
                Use these resources to compare prices and plan your budget effectively.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.numbeo.com/cost-of-living/city_result.jsp?country=Sweden&city=Stockholm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Numbeo - Cost of Living Comparison
                </a>
                <a 
                  href="https://www.expatistan.com/cost-of-living/stockholm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Expatistan - Living Cost Calculator
                </a>
                <a 
                  href="https://www.prisjakt.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Prisjakt - Price Comparison
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfLivingGuide;
