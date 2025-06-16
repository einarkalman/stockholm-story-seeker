
import { ArrowLeft, Clock, Utensils, Coffee, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoodGuide = () => {
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
            <Utensils className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Food & Dining</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm Food & Dining Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore Stockholm's culinary scene from traditional Swedish cuisine to international flavors, plus grocery shopping and food culture tips.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            16 min read
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Stockholm restaurant and Swedish cuisine" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Swedish Cuisine Essentials</h2>
            <p className="text-gray-600 mb-6">
              Swedish cuisine emphasizes fresh, seasonal ingredients with a focus on fish, meat, potatoes, and dairy. 
              The food culture values simplicity, quality, and sustainability.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🥘 Must-Try Dishes</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>• <strong>Meatballs (Köttbullar):</strong> Sweden's national dish</li>
                  <li>• <strong>Gravlax:</strong> Cured salmon with dill</li>
                  <li>• <strong>Janssons Frestelse:</strong> Potato and anchovy casserole</li>
                  <li>• <strong>Surströmming:</strong> Fermented herring (adventurous eaters)</li>
                  <li>• <strong>Princess Cake:</strong> Green marzipan layer cake</li>
                  <li>• <strong>Kanelbullar:</strong> Cinnamon buns</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">☕ Food Culture</h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• <strong>Fika:</strong> Coffee break with pastries (sacred tradition)</li>
                  <li>• <strong>Smörgåsbord:</strong> Buffet-style dining</li>
                  <li>• <strong>Lagom:</strong> Philosophy of "just the right amount"</li>
                  <li>• <strong>Allemansrätten:</strong> Right to forage in nature</li>
                  <li>• <strong>Sustainable eating:</strong> Focus on local, seasonal food</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Recommendations</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Fine Dining</h3>
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Michelin-Starred:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <a href="https://www.restaurantfrantzen.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Frantzén (3 stars)</a> - Modern Nordic</li>
                      <li>• <a href="https://oaxenkrog.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Oaxen Krog (2 stars)</a> - Island dining</li>
                      <li>• <a href="https://gastrologik.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Gastrologik (1 star)</a> - Sustainable cuisine</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Upscale Dining:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <a href="https://www.mdghs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Mathias Dahlgren</a> - Waterfront views</li>
                      <li>• <a href="https://adamalbin.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Adam/Albin</a> - Contemporary Swedish</li>
                      <li>• <a href="https://restaurangag.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AG</a> - Steakhouse excellence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Casual Favorites</h3>
                  <Coffee className="h-6 w-6 text-brown-500" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Traditional Swedish:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <a href="https://meatballs.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Meatballs for the People</a> - Modern take on classics</li>
                      <li>• <a href="https://pelikan.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Pelikan</a> - Historic beer hall</li>
                      <li>• <a href="https://gyldenefreden.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Den Gyldene Freden</a> - Old Stockholm atmosphere</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">International:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <a href="https://tacobar.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Tacobar</a> - Gourmet tacos</li>
                      <li>• <a href="https://ramenyebisu.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Ramen Yebisu</a> - Authentic Japanese</li>
                      <li>• <a href="https://punkroyale.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Punk Royale</a> - Asian fusion with attitude</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Grocery Shopping</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">🛒 Major Supermarket Chains</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Premium Options:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• <strong><a href="https://www.ica.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">ICA Maxi</a>:</strong> Large stores, wide selection</li>
                    <li>• <strong><a href="https://www.coop.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Coop Konsum</a>:</strong> Quality focus, organic options</li>
                    <li>• <strong><a href="https://www.hemkop.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Hemköp</a>:</strong> Fresh produce specialist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Budget-Friendly:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• <strong><a href="https://www.willys.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Willys</a>:</strong> Discount prices</li>
                    <li>• <strong><a href="https://www.lidl.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Lidl</a>:</strong> German chain, good deals</li>
                    <li>• <strong><a href="https://netto.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Netto</a>:</strong> Basic needs at low prices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shopping Tips</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Bring a coin for shopping carts (10 SEK usually)</li>
                  <li>• Bring your own bags or buy reusable ones</li>
                  <li>• Check opening hours - many close early on Sundays</li>
                  <li>• Look for "Närproducerat" labels for local products</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialty Stores</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• <a href="https://ostermalmshallen.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Östermalms Saluhall</a> - Gourmet food market</li>
                  <li>• <a href="https://hotorgshallen.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Hötorgshallen</a> - Traditional market hall</li>
                  <li>• <a href="https://www.systembolaget.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Systembolaget</a> - Government liquor stores (only place for alcohol &gt; 3.5%)</li>
                  <li>• Local fishmongers and butchers for premium quality</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Food by Neighborhood</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <MapPin className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Södermalm</h3>
                <p className="text-purple-800 text-sm mb-3">
                  Trendy area with innovative restaurants, craft cocktail bars, and hipster cafes.
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Nytorget - Restaurant square</li>
                  <li>• SoFo district - Young and creative</li>
                  <li>• Craft beer and cocktail scene</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <MapPin className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Östermalm</h3>
                <p className="text-orange-800 text-sm mb-3">
                  Upscale dining with fine restaurants, wine bars, and gourmet food shops.
                </p>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Stureplan - High-end dining</li>
                  <li>• Östermalms Saluhall - Food market</li>
                  <li>• Wine bars and champagne lounges</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Food Apps & Resources</h3>
              <p className="text-gray-300 mb-4">
                Discover Stockholm's food scene and get the best deals with these helpful resources.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2">Apps:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <a href="https://www.foodora.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Foodora</a>/<a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Uber Eats</a> - Food delivery</li>
                    <li>• <a href="https://toogoodtogo.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Too Good To Go</a> - Reduce food waste</li>
                    <li>• <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">OpenTable</a> - Restaurant reservations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Resources:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <a href="https://whiteguide.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">White Guide</a> - Restaurant reviews</li>
                    <li>• <a href="https://www.timeout.com/stockholm" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Time Out Stockholm</a> - Food guides</li>
                    <li>• <a href="https://www.yelp.se" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Yelp Stockholm</a> - User reviews</li>
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

export default FoodGuide;
