
import { ArrowLeft, Clock, FileText, Shield, Building2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const BureaucracyGuide = () => {
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
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bureaucracy</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Your Personnummer in Sweden
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Everything you need to know about Sweden's personal identification number and why it's essential for life in Stockholm.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            8 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a Personnummer?</h2>
            <p className="text-gray-600 mb-6">
              A personnummer (personal identity number) is a unique 10-digit number assigned to everyone registered as living in Sweden. 
              It's essential for almost everything in Swedish society - from opening bank accounts to signing rental contracts, 
              getting a mobile phone plan, or accessing healthcare.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Requirements to Get a Personnummer</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Be registered as living in Sweden for at least 12 months</li>
                <li>• Have a valid residence permit (for non-EU/EEA citizens)</li>
                <li>• Have a permanent address in Sweden</li>
                <li>• Demonstrate intent to stay long-term</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Process</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Register Your Move to Sweden</h3>
                <p className="text-gray-600">
                  Visit Skatteverket (Swedish Tax Agency) either in person or online to register your move. 
                  You'll need to provide proof of identity, residence permit (if applicable), and housing documentation.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Provide Required Documents</h3>
                <p className="text-gray-600">
                  Bring your passport, residence permit, rental contract or housing documentation, 
                  and any employment contracts or student enrollment certificates.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Wait for Processing</h3>
                <p className="text-gray-600">
                  Processing typically takes 2-4 weeks. You'll receive your personnummer by mail once approved.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Notes</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• You cannot get a personnummer as a tourist or on a short-term visit</li>
                <li>• Students typically need to be enrolled for at least one academic year</li>
                <li>• Workers need employment contracts showing intent to stay long-term</li>
                <li>• EU/EEA citizens have an easier process but still need to demonstrate residence</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can You Do With a Personnummer?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-green-900 mb-2">Essential Services</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Open bank accounts</li>
                  <li>• Sign rental contracts</li>
                  <li>• Access healthcare</li>
                  <li>• Get mobile phone plans</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <Building2 className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-purple-900 mb-2">Government Services</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• File tax returns</li>
                  <li>• Apply for social benefits</li>
                  <li>• Register for voting</li>
                  <li>• Access digital services</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                For detailed information about getting your personnummer, visit the official Skatteverket website.
              </p>
              <a 
                href="https://www.skatteverket.se/servicelankar/otherlanguages/inenglishengelska/individualsandemployees/livinginsweden/personalidentitynumbers.4.2cf1b5cd163796a5c8b4295.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Visit Skatteverket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BureaucracyGuide;
