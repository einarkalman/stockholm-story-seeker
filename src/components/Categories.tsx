
import { Home, Briefcase, Car, Utensils, Palette, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'Living',
      description: 'Housing, neighborhoods, and daily life essentials',
      icon: <Home className="h-8 w-8" />,
      color: 'bg-blue-500',
      articles: 42,
      link: '/guides/living'
    },
    {
      name: 'Working',
      description: 'Career opportunities, workplace culture, and job hunting',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'bg-green-500',
      articles: 28,
      link: '/guides/working'
    },
    {
      name: 'Transport',
      description: 'Public transport, cycling, and getting around the city',
      icon: <Car className="h-8 w-8" />,
      color: 'bg-purple-500',
      articles: 15,
      link: '/guides/transport'
    },
    {
      name: 'Food & Dining',
      description: 'Restaurants, grocery shopping, and Swedish cuisine',
      icon: <Utensils className="h-8 w-8" />,
      color: 'bg-orange-500',
      articles: 35,
      link: '/guides/food'
    },
    {
      name: 'Culture',
      description: 'Museums, events, festivals, and local traditions',
      icon: <Palette className="h-8 w-8" />,
      color: 'bg-pink-500',
      articles: 24,
      link: '/guides/culture'
    },
    {
      name: 'Community',
      description: 'Meeting people, social groups, and networking',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-indigo-500',
      articles: 19,
      link: '/guides/living'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for with our organized guide categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className={`${category.color} text-white p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-gray-500 font-medium">
                    {category.articles} articles
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
