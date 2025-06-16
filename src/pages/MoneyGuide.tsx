
import { ArrowLeft, Clock, CreditCard, DollarSign, Building2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoneyGuide = () => {
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
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Money</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Banking and Finance in Sweden
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Open a Swedish bank account, understand digital payments, and navigate the country's cashless society.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            10 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sweden's Cashless Society</h2>
            <p className="text-gray-600 mb-6">
              Sweden is one of the world's most cashless societies. Most transactions are done electronically, 
              and many businesses no longer accept cash. Having a Swedish bank account and understanding 
              digital payment systems is essential for daily life.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💳 Payment Methods in Sweden</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Swish:</strong> Mobile payment app (most popular)</li>
                <li>• <strong>Contactless cards:</strong> Tap to pay everywhere</li>
                <li>• <strong>BankID:</strong> Digital identification for online services</li>
                <li>• <strong>Apple Pay/Google Pay:</strong> Widely accepted</li>
                <li>• <strong>Cash:</strong> Limited acceptance, mainly tourist areas</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opening a Swedish Bank Account</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">📋 Requirements</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Valid passport or EU ID</li>
                <li>• Personnummer (personal identity number)</li>
                <li>• Proof of address in Sweden</li>
                <li>• Employment contract or income proof</li>
                <li>• Some banks require a minimum deposit</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Swedish Banks</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Handelsbanken</h3>
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  Known for personal service and local decision-making. Popular with expats and 
                  offers English-speaking customer service.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Excellent customer service</li>
                      <li>• English support available</li>
                      <li>• No monthly fees for basic accounts</li>
                      <li>• Strong mobile app</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Stricter lending criteria</li>
                      <li>• Fewer locations than some competitors</li>
                      <li>• May require higher income proof</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">SEB (Skandinaviska Enskilda Banken)</h3>
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  Large international bank with comprehensive services. Good for those who need 
                  international banking features.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• International presence</li>
                      <li>• Comprehensive services</li>
                      <li>• Good for business banking</li>
                      <li>• Strong digital platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Can have monthly fees</li>
                      <li>• More bureaucratic</li>
                      <li>• Less personal service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Nordea</h3>
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  Nordic region's largest bank. Good option for those planning to work 
                  across Nordic countries.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Nordic-wide presence</li>
                      <li>• Many ATM locations</li>
                      <li>• Good for students</li>
                      <li>• Competitive rates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Monthly account fees</li>
                      <li>• Customer service can be slow</li>
                      <li>• Complex fee structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Swedish Financial Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Smartphone className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-3">Swish - Mobile Payments</h3>
                <p className="text-green-800 text-sm mb-3">
                  Sweden's ubiquitous mobile payment app. Essential for daily life.
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Split bills with friends</li>
                  <li>• Pay for small purchases</li>
                  <li>• Send money instantly</li>
                  <li>• Pay at farmers markets, cafes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <CreditCard className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-3">BankID - Digital Identity</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Digital identification system used for online services.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Sign contracts digitally</li>
                  <li>• Access government services</li>
                  <li>• Online banking authentication</li>
                  <li>• Tax returns and applications</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Opening Process</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Choose Your Bank</h3>
                <p className="text-gray-600">
                  Research banks based on your needs: fees, services, locations, and language support.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Book an Appointment</h3>
                <p className="text-gray-600">
                  Most banks require appointments for new accounts. Book online or call customer service.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Bring Required Documents</h3>
                <p className="text-gray-600">
                  Passport, personnummer certificate, proof of address, and income documentation.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Set Up Digital Services</h3>
                <p className="text-gray-600">
                  Download the bank's app, set up Swish, and configure BankID for online access.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💰 Typical Banking Costs</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Account fees:</strong> 0-50 SEK/month (many basic accounts are free)</li>
                <li>• <strong>Debit card:</strong> Usually free with account</li>
                <li>• <strong>International transfers:</strong> 50-200 SEK per transfer</li>
                <li>• <strong>ATM withdrawals:</strong> Free at own bank, 25-35 SEK at others</li>
                <li>• <strong>Currency exchange:</strong> 1-3% markup typically</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Tips for New Residents</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Money-Saving Tips</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Choose a bank with free basic accounts</li>
                <li>• Use Swish for peer-to-peer payments (no fees)</li>
                <li>• Set up automatic payments to avoid late fees</li>
                <li>• Use your bank's ATMs to avoid withdrawal fees</li>
                <li>• Consider credit cards with no foreign transaction fees</li>
                <li>• Take advantage of student discounts if applicable</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Start Your Banking Journey</h3>
              <p className="text-gray-300 mb-4">
                Opening a Swedish bank account is one of your first priorities. Start the process as soon 
                as you have your personnummer.
              </p>
              <div className="space-y-2">
                <div className="text-blue-300">💡 Pro tip: Some banks allow you to start the application process online before your appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyGuide;
