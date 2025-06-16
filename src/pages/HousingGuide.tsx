
import { ArrowLeft, Clock, Home, Search, FileText, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const HousingGuide = () => {
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
            Complete Housing Guide for Stockholm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Everything you need to know about finding, renting, and living in Stockholm housing - from rental queues to tenant rights.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            25 min read
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Stockholm apartment buildings and housing" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Stockholm's Housing Market</h2>
            <p className="text-gray-600 mb-6">
              Stockholm has one of Europe's most challenging housing markets, characterized by high demand, 
              limited supply, and unique rental systems. Success requires patience, strategy, and understanding 
              the local system.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Key Challenges</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Extremely competitive rental market</li>
                <li>• Long waiting times for rental queues (often 5-20+ years)</li>
                <li>• High purchase prices (among Europe's most expensive)</li>
                <li>• Limited availability of short-term rentals</li>
                <li>• Complex regulations and requirements</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Housing</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rental Apartments (Hyresrätt)</h3>
                <p className="text-gray-600 mb-4">
                  Rent-controlled apartments managed by municipal housing companies. 
                  These offer the best value but require long waiting times through housing queues.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Regulated rent prices</li>
                      <li>• Strong tenant protection</li>
                      <li>• No down payment required</li>
                      <li>• Right to sublease</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Very long waiting times</li>
                      <li>• Limited availability</li>
                      <li>• Queue priority system</li>
                      <li>• Hard to get centrally located</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cooperative Apartments (Bostadsrätt)</h3>
                <p className="text-gray-600 mb-4">
                  Purchase the right to live in the apartment. You own shares in the housing cooperative 
                  and pay monthly fees for maintenance and shared costs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Build equity over time</li>
                      <li>• More control over living space</li>
                      <li>• Can renovate and personalize</li>
                      <li>• Potentially resell for profit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• High purchase prices</li>
                      <li>• Need significant down payment</li>
                      <li>• Monthly fees (avgift)</li>
                      <li>• Market risk</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Second-Hand Rentals</h3>
                <p className="text-gray-600 mb-4">
                  Subletting from tenants who have rental apartments. More available but at higher prices 
                  and with less security.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• More immediate availability</li>
                      <li>• No queue waiting required</li>
                      <li>• Often furnished options</li>
                      <li>• Flexible lease terms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Higher than regulated rents</li>
                      <li>• Less tenant protection</li>
                      <li>• Risk of illegal subletting</li>
                      <li>• Temporary arrangements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Queue System</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <Search className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Major Housing Queues</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Municipal Companies:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Stockholmshem:</strong> City-owned, longest queues</li>
                    <li>• <strong>Familjebostäder:</strong> Family-focused housing</li>
                    <li>• <strong>Svenska Bostäder:</strong> Large municipal company</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Private Companies:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Akelius:</strong> Private rental company</li>
                    <li>• <strong>Wallenstam:</strong> Mix of rental and cooperative</li>
                    <li>• <strong>Heimstaden:</strong> Growing rental portfolio</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Queue Strategy</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Join multiple queues immediately upon arrival</li>
                  <li>• Expect to pay queue fees (usually 200-500 SEK/year)</li>
                  <li>• Queue time determines apartment access</li>
                  <li>• Some companies offer youth queues (under 25)</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alternative Strategies</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Look in suburban areas with shorter queues</li>
                  <li>• Consider student housing if eligible</li>
                  <li>• Explore corporate housing through employers</li>
                  <li>• Network within international communities</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding Housing Now</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🔍 Search Platforms</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Rental Platforms:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Blocket Bostad - Major classified site</li>
                    <li>• Qasa - Furnished rentals</li>
                    <li>• Samtrygg - Secure rental platform</li>
                    <li>• Facebook groups - International housing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Purchase Platforms:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Hemnet - Primary real estate site</li>
                    <li>• Booli - Property search and analysis</li>
                    <li>• SkandiaMäklarna - Real estate agency</li>
                    <li>• Svensk Fastighetsförmedling</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal & Financial Considerations</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <FileText className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                  <div>
                    <h4 className="font-semibold mb-2">For Rentals:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Income statements (3 months)</li>
                      <li>• Employment contract</li>
                      <li>• Credit report (UC)</li>
                      <li>• Bank statements</li>
                      <li>• References from previous landlords</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Purchases:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Loan pre-approval</li>
                      <li>• Income verification</li>
                      <li>• Down payment proof (minimum 15%)</li>
                      <li>• Swedish personnummer</li>
                      <li>• Bank account in Sweden</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <Calculator className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Cost Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-4 text-purple-800">
                  <div>
                    <h4 className="font-semibold mb-2">Monthly Costs (Rental):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rent: 10,000-25,000+ SEK</li>
                      <li>• Utilities: 500-1,500 SEK</li>
                      <li>• Internet: 300-500 SEK</li>
                      <li>• Insurance: 200-400 SEK</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Purchase Costs:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Down payment: 15% minimum</li>
                      <li>• Stamp duty: 1.5% of price</li>
                      <li>• Legal fees: 10,000-20,000 SEK</li>
                      <li>• Monthly avgift: 2,000-8,000+ SEK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Housing Resources & Support</h3>
              <p className="text-gray-300 mb-4">
                Get help navigating Stockholm's complex housing market with these official resources.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.hyresgastforeningen.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Hyresgästföreningen (Tenant Union)
                </a>
                <a 
                  href="https://www.boverket.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Boverket (National Housing Board)
                </a>
                <a 
                  href="https://www.konsumentverket.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Konsumentverket (Consumer Protection)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingGuide;
