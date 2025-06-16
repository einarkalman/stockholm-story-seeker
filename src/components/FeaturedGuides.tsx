
import { Clock, Users, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedGuides = () => {
  const guides = [
    {
      title: "Finding an Apartment in Stockholm",
      description: "Navigate Stockholm's competitive housing market with our comprehensive guide to rental queues, viewings, and contracts.",
      category: "Housing",
      readTime: "15 min read",
      icon: <MapPin className="h-6 w-6" />,
      featured: true,
      link: "/guides/apartment-stockholm"
    },
    {
      title: "Getting Your Personnummer",
      description: "Everything you need to know about Sweden's personal identification number and why it's essential for life in Stockholm.",
      category: "Bureaucracy",
      readTime: "8 min read",
      icon: <FileText className="h-6 w-6" />,
      featured: true,
      link: "/guides/bureaucracy"
    },
    {
      title: "Stockholm Public Transport Guide",
      description: "Master the SL system, understand zone pricing, and discover the best travel cards for getting around the city.",
      category: "Transport",
      readTime: "12 min read",
      icon: <Users className="h-6 w-6" />,
      featured: true,
      link: "/guides/transport"
    },
    {
      title: "Working in Stockholm",
      description: "From job hunting to workplace culture, learn what you need to know about building a career in Stockholm.",
      category: "Working",
      readTime: "20 min read",
      icon: <Clock className="h-6 w-6" />,
      featured: false,
      link: "/guides/working"
    },
    {
      title: "Stockholm's Best Neighborhoods",
      description: "Discover the character and charm of Stockholm's different districts, from trendy Södermalm to family-friendly suburbs.",
      category: "Living",
      readTime: "18 min read",
      icon: <MapPin className="h-6 w-6" />,
      featured: false,
      link: "/guides/living"
    },
    {
      title: "Banking and Finance in Sweden",
      description: "Open a Swedish bank account, understand digital payments, and navigate the country's cashless society.",
      category: "Money",
      readTime: "10 min read",
      icon: <FileText className="h-6 w-6" />,
      featured: false,
      link: "/guides/money"
    }
  ];

  const featuredGuides = guides.filter(guide => guide.featured);
  const otherGuides = guides.filter(guide => !guide.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.link}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                    <span className="text-blue-600 font-medium hover:text-blue-700">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Popular Guides */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.link}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-white hover:shadow-md transition-all cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700">
                    {guide.category}
                  </span>
                  <div className="text-gray-400">
                    {guide.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                  <span className="text-blue-600 font-medium text-sm hover:text-blue-700">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
