
import { ArrowLeft, Clock, Palette, Calendar, Music, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const CultureGuide = () => {
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
            <Palette className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Culture</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm's Cultural Scene
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover Stockholm's rich cultural heritage through museums, galleries, festivals, and local traditions that make the city unique.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            22 min read
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Stockholm's cultural landmarks and museums" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Museums & Galleries</h2>
            <p className="text-gray-600 mb-6">
              Stockholm boasts world-class museums and galleries that showcase everything from Viking history 
              to contemporary art. Many offer free admission on certain days or for students and seniors.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏛️ Must-Visit Museums</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• <strong>Vasa Museum:</strong> Historic 17th-century warship</li>
                  <li>• <strong>ABBA Museum:</strong> Interactive music experience</li>
                  <li>• <strong>Moderna Museet:</strong> Modern and contemporary art</li>
                  <li>• <strong>Skansen:</strong> Open-air museum and zoo</li>
                  <li>• <strong>Nobel Prize Museum:</strong> Celebrating laureates</li>
                  <li>• <strong>Nordic Museum:</strong> Swedish cultural history</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🎨 Art Galleries</h3>
                <ul className="text-purple-800 text-sm space-y-2">
                  <li>• <strong>Fotografiska:</strong> Contemporary photography</li>
                  <li>• <strong>Magasin III:</strong> Experimental contemporary art</li>
                  <li>• <strong>Bonniers Konsthall:</strong> Cutting-edge exhibitions</li>
                  <li>• <strong>Färgfabriken:</strong> Interdisciplinary art center</li>
                  <li>• <strong>Gallery Steinsland Berliner:</strong> Emerging artists</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Festivals & Events</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Summer Festivals</h3>
                <p className="text-gray-600 mb-3">
                  Stockholm comes alive in summer with outdoor concerts, cultural festivals, and Midsummer celebrations.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Key Events:</strong> Stockholm Music & Arts, Summerburst, Midsummer at Skansen
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Festivals</h3>
                <p className="text-gray-600 mb-3">
                  Year-round cultural events celebrate everything from film to literature to design.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Highlights:</strong> Stockholm International Film Festival, Culture Night, Design Week
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Music & Nightlife</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-8">
              <Music className="h-8 w-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-semibold text-pink-900 mb-3">Live Music Scene</h3>
              <p className="text-pink-800 mb-4">
                Stockholm has a thriving music scene from intimate jazz clubs to major concert venues.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-pink-900 mb-2">Venues:</h4>
                  <ul className="text-pink-800 space-y-1">
                    <li>• Berns Salonger (historic venue)</li>
                    <li>• Göta Källare (rock & indie)</li>
                    <li>• Fasching (jazz club)</li>
                    <li>• Debaser (alternative music)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-900 mb-2">Districts:</h4>
                  <ul className="text-pink-800 space-y-1">
                    <li>• Södermalm (trendy bars)</li>
                    <li>• Östermalm (upscale venues)</li>
                    <li>• Gamla Stan (historic pubs)</li>
                    <li>• Norrmalm (mainstream clubs)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Swedish Traditions</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <Calendar className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Seasonal Celebrations</h3>
                <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                  <div>
                    <h4 className="font-semibold mb-2">Winter & Spring:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Lucia (December 13)</li>
                      <li>• Valborg (April 30)</li>
                      <li>• Easter traditions</li>
                      <li>• Fettisdagen (Fat Tuesday)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Summer & Fall:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Midsummer (June)</li>
                      <li>• Crayfish parties (August)</li>
                      <li>• Nobel Day (December 10)</li>
                      <li>• All Saints Day</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cultural Resources</h3>
              <p className="text-gray-300 mb-4">
                Stay updated on Stockholm's cultural events and discover new experiences throughout the year.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://visitstockholm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Visit Stockholm (Official Tourism Site)
                </a>
                <a 
                  href="https://www.stockholm.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200"
                >
                  • Stockholm City (Events Calendar)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureGuide;
