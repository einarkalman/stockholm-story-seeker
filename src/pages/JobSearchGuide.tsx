
import { ArrowLeft, Clock, Search, Users, FileText, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobSearchGuide = () => {
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
            <Search className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Job Search</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Search in Stockholm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Complete guide to finding employment in Stockholm, from job platforms to networking strategies.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            14 min read
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Job Platforms</h2>
            <p className="text-gray-600 mb-6">
              Stockholm's job market is competitive but offers excellent opportunities, especially in tech, 
              finance, and creative industries.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://arbetsformedlingen.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Arbetsförmedlingen
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Sweden's official employment agency with comprehensive job listings and career services.
                </p>
                <div className="text-sm text-gray-500">
                  Free services • CV help • Interview preparation • All industries
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Essential for professional networking and job applications in Stockholm.
                </p>
                <div className="text-sm text-gray-500">
                  Professional networking • Direct applications • Company research
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="https://www.thelocal.se/jobs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    The Local Jobs
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  English-language job board focusing on international opportunities.
                </p>
                <div className="text-sm text-gray-500">
                  English speakers • International companies • Expat-friendly roles
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry-Specific Platforms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💻 Tech & IT</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• <a href="https://stackoverflow.com/jobs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Stack Overflow Jobs</a></li>
                  <li>• <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Glassdoor</a></li>
                  <li>• <a href="https://angel.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AngelList</a> (startups)</li>
                  <li>• <a href="https://www.techsverige.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Tech Sverige</a></li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🏦 Finance & Consulting</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• <a href="https://www.efinancialcareers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">eFinancial Careers</a></li>
                  <li>• <a href="https://www.robertwalters.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Robert Walters</a></li>
                  <li>• <a href="https://www.michaelpage.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Michael Page</a></li>
                  <li>• <a href="https://www.hays.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Hays</a></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">CV & Application Tips</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <Briefcase className="h-8 w-8 text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Swedish CV Format</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Must Include:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Personal photo (optional but common)</li>
                    <li>• Personal number (if you have one)</li>
                    <li>• Contact information</li>
                    <li>• Education and work experience</li>
                    <li>• Language skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Application Process:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Write a personalized cover letter</li>
                    <li>• Include relevant certifications</li>
                    <li>• Mention work permit status</li>
                    <li>• Follow up professionally</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Networking & Professional Development</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Networks</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• <a href="https://www.stockholmbusinessregion.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Stockholm Business Region</a> - Business events</li>
                  <li>• <a href="https://www.meetup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Meetup Groups</a> - Industry meetups</li>
                  <li>• <a href="https://www.svenskahandelskammaren.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Swedish Chamber of Commerce</a></li>
                  <li>• Alumni networks from your university</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Events</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Tech conferences and hackathons</li>
                  <li>• Startup events and pitch competitions</li>
                  <li>• Professional association meetings</li>
                  <li>• Career fairs at universities</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Start Your Job Search</h3>
              <p className="text-gray-300 mb-4">
                Begin your career journey in Stockholm with these essential resources and strategies.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2">Job Platforms:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <a href="https://arbetsformedlingen.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Arbetsförmedlingen</a></li>
                    <li>• <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn</a></li>
                    <li>• <a href="https://www.monster.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Monster Sweden</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Career Support:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <a href="https://komvux.stockholm.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Komvux</a> - Skills development</li>
                    <li>• <a href="https://www.lararfortbildning.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Professional courses</a></li>
                    <li>• Language courses for career advancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchGuide;
