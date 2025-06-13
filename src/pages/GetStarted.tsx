
import { CheckCircle, Clock, FileText, Home, CreditCard, Users, Globe, Shield } from 'lucide-react';
import { useState } from 'react';

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState<'eu' | 'non-eu'>('eu');

  const euChecklist = [
    {
      id: 1,
      title: "Register your move to Sweden",
      description: "Contact the Swedish Migration Agency (Migrationsverket) within 3 months",
      timeframe: "Within 3 months",
      priority: "high",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Get your Personal Identity Number (Personnummer)",
      description: "Register with Skatteverket (Swedish Tax Agency) to get your personnummer",
      timeframe: "As soon as possible",
      priority: "high",
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Find temporary accommodation",
      description: "Book short-term housing while you search for permanent residence",
      timeframe: "Before arrival",
      priority: "high",
      icon: <Home className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Open a Swedish bank account",
      description: "Visit banks like Handelsbanken, SEB, or Nordea with your personnummer",
      timeframe: "After getting personnummer",
      priority: "medium",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Get an SL card for public transport",
      description: "Purchase a monthly travel card for Stockholm's public transportation",
      timeframe: "First week",
      priority: "medium",
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Register with a healthcare center",
      description: "Choose and register with a local vårdcentral for healthcare",
      timeframe: "Within first month",
      priority: "medium",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const nonEuChecklist = [
    {
      id: 1,
      title: "Obtain residence permit",
      description: "Apply for and receive your residence permit from Migrationsverket",
      timeframe: "Before arrival",
      priority: "high",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Get your Personal Identity Number (Personnummer)",
      description: "Register with Skatteverket after arriving with your residence permit",
      timeframe: "Within first week",
      priority: "high",
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Find temporary accommodation",
      description: "Secure short-term housing before your arrival in Stockholm",
      timeframe: "Before arrival",
      priority: "high",
      icon: <Home className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Register with Migration Agency",
      description: "Report your arrival and confirm your address with Migrationsverket",
      timeframe: "Within 1 week",
      priority: "high",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Open a Swedish bank account",
      description: "Visit banks with your personnummer and residence permit documentation",
      timeframe: "After getting personnummer",
      priority: "medium",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Get an SL card for public transport",
      description: "Purchase a monthly travel card for Stockholm's public transportation",
      timeframe: "First week",
      priority: "medium",
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Register with a healthcare center",
      description: "Choose and register with a local vårdcentral for healthcare access",
      timeframe: "Within first month",
      priority: "medium",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  const currentChecklist = activeTab === 'eu' ? euChecklist : nonEuChecklist;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in Stockholm
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive guide to immigrating to Sweden and starting your new life in Stockholm. 
              Follow our step-by-step checklist to make your transition as smooth as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-1 max-w-md mx-auto mb-8">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab('eu')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'eu'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              EU/EEA Citizens
            </button>
            <button
              onClick={() => setActiveTab('non-eu')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'non-eu'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Non-EU/EEA Citizens
            </button>
          </div>
        </div>

        {/* Information Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {activeTab === 'eu' ? 'EU/EEA Citizens' : 'Non-EU/EEA Citizens'}: Immigration Requirements
              </h2>
              
              {activeTab === 'eu' ? (
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    As an EU/EEA citizen, you have the right to live and work in Sweden without a residence permit. 
                    However, you still need to register your move and obtain important documents for daily life.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Key Rights & Freedoms:</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Right to live and work in Sweden</li>
                      <li>• Access to healthcare after registration</li>
                      <li>• No need for work permits</li>
                      <li>• Can stay up to 3 months without registration</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">
                    For detailed information, visit: <a href="https://www.migrationsverket.se/en/you-want-to-apply/citizens-of-the-eu-eea-or-nordic-countries/eu-eea-citizens.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Migrationsverket EU/EEA Citizens Guide</a>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    As a non-EU/EEA citizen, you'll need a residence permit to live in Sweden. This must be obtained 
                    before your arrival, and the process can take several months.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-900 mb-2">Important Requirements:</h3>
                    <ul className="text-amber-800 space-y-1">
                      <li>• Valid residence permit required</li>
                      <li>• Must apply from your home country</li>
                      <li>• Work permit often needed for employment</li>
                      <li>• Processing time: 2-15 months</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">
                    Start your application at: <a href="https://www.migrationsverket.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Migrationsverket.se</a>
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Links</h3>
              <div className="space-y-3">
                <a href="https://www.migrationsverket.se" target="_blank" rel="noopener noreferrer" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Migrationsverket</div>
                  <div className="text-sm text-gray-600">Swedish Migration Agency</div>
                </a>
                <a href="https://www.skatteverket.se" target="_blank" rel="noopener noreferrer" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Skatteverket</div>
                  <div className="text-sm text-gray-600">Swedish Tax Agency</div>
                </a>
                <a href="https://sl.se" target="_blank" rel="noopener noreferrer" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">SL</div>
                  <div className="text-sm text-gray-600">Stockholm Public Transport</div>
                </a>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">💡 Pro Tip</h3>
              <p className="text-green-800 text-sm">
                Getting your personnummer is crucial for everything in Sweden - from opening a bank account to signing up for services. Make this your top priority!
              </p>
            </div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your {activeTab === 'eu' ? 'EU/EEA' : 'Non-EU/EEA'} Immigration Checklist
            </h2>
            <div className="text-sm text-gray-500">
              {currentChecklist.length} essential steps
            </div>
          </div>

          <div className="space-y-4">
            {currentChecklist.map((item, index) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.timeframe}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                            {item.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <CheckCircle className="h-6 w-6 text-gray-300 hover:text-green-500 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-gray-900 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Popular Guides</h3>
              <ul className="space-y-2">
                <li><a href="/guides/apartment-stockholm" className="text-blue-300 hover:text-blue-200 transition-colors">Finding an Apartment in Stockholm</a></li>
                <li><a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">Getting Your Personnummer</a></li>
                <li><a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">Stockholm Public Transport Guide</a></li>
                <li><a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">Banking and Finance in Sweden</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Get Support</h3>
              <p className="text-gray-300 mb-4">
                Join our community of expats in Stockholm for tips, advice, and local insights.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
