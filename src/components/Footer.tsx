
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Living in Stockholm",
      links: [
        { name: "Finding Housing", path: "/finding-housing" },
        { name: "Neighborhoods Guide", path: "/neighborhoods" }, 
        { name: "Cost of Living", path: "/cost-of-living" },
        { name: "Healthcare System", path: "/guides/living" },
        { name: "Education", path: "/guides/living" }
      ]
    },
    {
      title: "Working & Business",
      links: [
        { name: "Job Search", path: "/job-search" },
        { name: "Work Permits", path: "/guides/bureaucracy" },
        { name: "Taxes", path: "/guides/money" },
        { name: "Starting a Business", path: "/guides/working" },
        { name: "Workplace Culture", path: "/guides/working" }
      ]
    },
    {
      title: "Essential Services",
      links: [
        { name: "Banking", path: "/guides/money" },
        { name: "Phone & Internet", path: "/guides/living" },
        { name: "Transportation", path: "/guides/transport" },
        { name: "Government Services", path: "/guides/bureaucracy" },
        { name: "Emergency Numbers", path: "/guides/living" }
      ]
    },
    {
      title: "Culture & Lifestyle",
      links: [
        { name: "Swedish Language", path: "/guides/culture" },
        { name: "Local Events", path: "/guides/culture" },
        { name: "Food & Dining", path: "/guides/food" },
        { name: "Sports & Recreation", path: "/guides/culture" },
        { name: "Travel Tips", path: "/guides/culture" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              All About Stockholm
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Your comprehensive guide to living, working, and thriving in Sweden's beautiful capital city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 All About Stockholm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
