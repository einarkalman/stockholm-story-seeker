
import { ArrowLeft, Clock, Briefcase, Users, FileText, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkingGuide = () => {
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
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Working</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Working in Stockholm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            From job hunting to workplace culture, learn what you need to know about building a career in Stockholm.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            20 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Market Overview</h2>
            <p className="text-gray-600 mb-6">
              Stockholm is Sweden's economic hub and home to many international companies. The city has a thriving 
              tech scene, strong finance sector, and numerous multinational corporations. English is widely spoken 
              in the workplace, making it accessible for international professionals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💼 Key Industries</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Technology & Startups</li>
                  <li>• Finance & Banking</li>
                  <li>• Healthcare & Life Sciences</li>
                  <li>• Gaming & Entertainment</li>
                  <li>• Renewable Energy</li>
                  <li>• Consulting & Professional Services</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🌟 Major Employers</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Spotify</li>
                  <li>• Klarna</li>
                  <li>• Ericsson</li>
                  <li>• H&M</li>
                  <li>• SEB Bank</li>
                  <li>• King (Activision Blizzard)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Permits & Legal Requirements</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🇪🇺 EU/EEA Citizens</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• No work permit required</li>
                  <li>• Right to work immediately upon arrival</li>
                  <li>• Must register with Skatteverket for tax purposes</li>
                  <li>• Get personnummer for long-term employment</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">🌍 Non-EU/EEA Citizens</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Work permit required before starting employment</li>
                  <li>• Employer must offer job before permit application</li>
                  <li>• Processing time: 2-4 months typically</li>
                  <li>• Permit tied to specific employer initially</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Search Strategies</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Job Portals</h3>
                <p className="text-gray-600 mb-3">
                  LinkedIn, The Hub, Arbetsförmedlingen, StepStone, and company websites are primary sources.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Top Sites:</strong> LinkedIn, TheHub.se, Arbetsformedlingen.se, StepStone.se
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking & Events</h3>
                <p className="text-gray-600 mb-3">
                  Stockholm has an active professional networking scene with regular meetups and industry events.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Key Events:</strong> Meetup groups, Stockholm Tech Meetup, Business networking events
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recruitment Agencies</h3>
                <p className="text-gray-600 mb-3">
                  Many companies use recruitment agencies, especially for specialized and senior roles.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Major Agencies:</strong> Hays, ManpowerGroup, Academic Work, TNG
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Swedish Workplace Culture</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🤝 Key Cultural Aspects</h3>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Fika:</strong> Coffee breaks are social and important for team bonding</li>
                <li>• <strong>Flat hierarchy:</strong> Decision-making is often collaborative</li>
                <li>• <strong>Work-life balance:</strong> 6 weeks paid vacation, flexible hours common</li>
                <li>• <strong>Consensus building:</strong> Meetings aim for agreement rather than quick decisions</li>
                <li>• <strong>Punctuality:</strong> Being on time is highly valued</li>
                <li>• <strong>Direct communication:</strong> Swedes appreciate honest, straightforward feedback</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salary & Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-3">Typical Salaries (Monthly, Gross)</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Software Developer: 45,000-70,000 SEK</div>
                  <div>Marketing Manager: 40,000-60,000 SEK</div>
                  <div>Finance Analyst: 35,000-55,000 SEK</div>
                  <div>Senior Consultant: 50,000-80,000 SEK</div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-3">Standard Benefits</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 25 days paid vacation (minimum)</div>
                  <div>• Parental leave (480 days shared)</div>
                  <div>• Health insurance</div>
                  <div>• Pension contributions</div>
                  <div>• Friskvårdsbidrag (wellness allowance)</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💰 Understanding Swedish Taxes</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Income tax: ~30-35% for most salaries</li>
                <li>• Employer pays additional social contributions</li>
                <li>• Tax return (deklaration) filed annually in spring</li>
                <li>• Many services like healthcare are tax-funded</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">CV & Application Tips</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CV Format</h3>
                <p className="text-gray-600">
                  Keep it to 2 pages maximum. Include photo, personal details, education, experience, and skills. 
                  Swedish CVs are more personal than some other countries.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Letter (Personligt Brev)</h3>
                <p className="text-gray-600">
                  Often required alongside CV. Should be tailored to each position and explain why you're 
                  interested in the role and company.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Job Search Resources</h3>
              <p className="text-gray-300 mb-4">
                Explore these official resources to help with your job search and career development in Sweden.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://arbetsformedlingen.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Arbetsförmedlingen (Swedish Employment Agency)
                </a>
                <a 
                  href="https://thehub.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • The Hub (Job Portal)
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingGuide;
