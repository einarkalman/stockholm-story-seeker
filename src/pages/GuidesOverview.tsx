import { ArrowLeft, FileText, Users, Briefcase, MapPin, CreditCard, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuidesOverview = () => {
  const guides = [
    {
      title: "Finding an Apartment in Stockholm",
      description: "Navigate Stockholm's competitive housing market with our comprehensive guide to rental queues, viewings, and contracts.",
      category: "Housing",
      readTime: "15 min read",
      icon: <MapPin className="h-6 w-6" />,
      link: "/guides/apartment-stockholm",
      featured: true
    },
    {
      title: "Getting Your Personnummer",
      description: "Everything you need to know about Sweden's personal identification number and why it's essential for life in Stockholm.",
      category: "Bureaucracy",
      readTime: "8 min read",
      icon: <FileText className="h-6 w-6" />,
      link: "/guides/bureaucracy",
      featured: true
    },
    {
      title: "Stockholm Public Transport Guide",
      description: "Master the SL system, understand zone pricing, and discover the best travel cards for getting around the city.",
      category: "Transport",
      readTime: "12 min read",
      icon: <Users className="h-6 w-6" />,
      link: "/guides/transport",
      featured: true
    },
    {
      title: "Working in Stockholm",
      description: "From job hunting to workplace culture, learn what you need to know about building a career in Stockholm.",
      category: "Working",
      readTime: "20 min read",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/guides/working"
    },
    {
      title: "Stockholm's Best Neighborhoods",
      description: "Discover the character and charm of Stockholm's different districts, from trendy Södermalm to family-friendly suburbs.",
      category: "Living",
      readTime: "18 min read",
      icon: <MapPin className="h-6 w-6" />,
      link: "/guides/living"
    },
    {
      title: "Banking and Finance in Sweden",
      description: "Open a Swedish bank account, understand digital payments, and navigate the country's cashless society.",
      category: "Money",
      readTime: "10 min read",
      icon: <CreditCard className="h-6 w-6" />,
      link: "/guides/money"
    }
  ];

  const featuredGuides = guides.filter(guide => guide.featured);
  const otherGuides = guides.filter(guide => !guide.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Stockholm Living Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you navigate life in Stockholm. From finding housing to understanding 
              Swedish workplace culture, we've got everything you need to settle in successfully.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Guides</h2>
          <p className="text-gray-600 mb-8">
            Start with these essential guides that cover the most important aspects of moving to Stockholm.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.link}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {guide.category}
                    </span>
                    <div className="text-blue-600">
                      {guide.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center">
                      Read guide
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <p className="text-gray-600 mb-8">
            Dive deeper into specific aspects of Stockholm life with these detailed guides.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {otherGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.link}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    {guide.category}
                  </span>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    {guide.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {guide.readTime}
                  </div>
                  <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 flex items-center">
                    Read more
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Housing & Living</h3>
              <p className="text-gray-600 text-sm">Find your perfect home and neighborhood in Stockholm</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bureaucracy</h3>
              <p className="text-gray-600 text-sm">Navigate Swedish administrative processes and documentation</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Working</h3>
              <p className="text-gray-600 text-sm">Build your career and understand workplace culture</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Transport</h3>
              <p className="text-gray-600 text-sm">Get around Stockholm efficiently and affordably</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <CreditCard className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Finance</h3>
              <p className="text-gray-600 text-sm">Manage money and banking in Sweden's cashless society</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="h-12 w-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600 font-bold">+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">More Coming Soon</h3>
              <p className="text-gray-600 text-sm">We're constantly adding new guides and resources</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Stockholm Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get personalized guidance with our step-by-step immigration checklist. 
            We'll help you prioritize the most important tasks for your situation.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started Checklist
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidesOverview;
