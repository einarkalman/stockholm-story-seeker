
import { ArrowLeft, MapPin, Clock, Users, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ApartmentGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Housing
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finding an Apartment in Stockholm
          </h1>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Updated December 2024</span>
            </div>
          </div>
        </div>

        {/* Alert Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Important Note</h3>
              <p className="text-amber-700 text-sm">
                Stockholm's housing market is extremely competitive. Start your search early and be prepared for a lengthy process.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Navigate Stockholm's competitive housing market with our comprehensive guide to rental queues, viewings, and contracts. 
            This guide covers everything from understanding the queue system to signing your first rental contract.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Stockholm's Housing Market</h2>
          <p className="mb-6">
            Stockholm's rental market is unique and can be challenging for newcomers. The majority of rental apartments are controlled 
            by municipal housing companies and require you to join a queue system called "bostadskö."
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">The Queue System (Bostadskö)</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> Register for the housing queue immediately upon arriving in Stockholm. 
                  The longer you're in the queue, the better your chances of getting an apartment.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Guide</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Register for Housing Queues</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Stockholmshem</strong> - The largest municipal housing company</li>
            <li><strong>Svenska Bostäder</strong> - Another major municipal option</li>
            <li><strong>Familjebostäder</strong> - Focuses on family housing</li>
            <li><strong>Micasa Fastigheter</strong> - Private housing company</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Alternative Housing Options</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Second-hand Rentals</h4>
              <p className="text-gray-600 text-sm">
                Subletting from current tenants. Faster but often more expensive and temporary.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Private Rentals</h4>
              <p className="text-gray-600 text-sm">
                Direct rentals from private landlords. Check Hemnet, Blocket, and Facebook groups.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3. What You'll Need</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Valid ID or passport</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Personnummer (if available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Income verification</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Employment contract</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Bank statements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">References (if requested)</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Neighborhoods</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Central Areas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Södermalm - Trendy and central</li>
                <li>• Östermalm - Upscale neighborhood</li>
                <li>• Vasastan - Mix of students and professionals</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Suburban Areas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bromma - Family-friendly</li>
                <li>• Nacka - Good transport links</li>
                <li>• Täby - Quiet residential area</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Costs to Expect</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Studio Apartment</h4>
                <p className="text-2xl font-bold text-blue-600">8,000-12,000 SEK</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1-Bedroom</h4>
                <p className="text-2xl font-bold text-blue-600">12,000-18,000 SEK</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2-Bedroom</h4>
                <p className="text-2xl font-bold text-blue-600">15,000-25,000 SEK</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Tips</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be prepared to provide 2-3 months' rent as deposit</li>
            <li>Understand the difference between "hyresrätt" (rental) and "bostadsrätt" (cooperative)</li>
            <li>Consider temporary housing while searching for a permanent solution</li>
            <li>Join Facebook groups and online communities for housing tips and opportunities</li>
            <li>Be wary of scams - never send money before viewing the apartment</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApartmentGuide;
