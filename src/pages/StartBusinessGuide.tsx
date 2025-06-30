
import { ArrowLeft, Building2, FileText, Users, Shield, CreditCard, Clock, ExternalLink, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StartBusinessGuide = () => {
  const companyForms = [
    {
      name: "Enskild firma (Sole Proprietorship)",
      minCapital: "0 SEK",
      liability: "Unlimited personal liability",
      taxation: "Income tax on personal tax return",
      bestFor: "Small businesses, freelancers, consultants",
      pros: ["Simple to start", "Low administrative burden", "No minimum capital required"],
      cons: ["Personal liability for debts", "Limited growth potential", "Harder to attract investors"],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Handelsbolag (Partnership)",
      minCapital: "0 SEK",
      liability: "Unlimited personal liability for all partners",
      taxation: "Partners taxed individually",
      bestFor: "Small businesses with 2+ partners",
      pros: ["Shared responsibility", "No minimum capital", "Simple structure"],
      cons: ["Joint and several liability", "Partners responsible for each other's actions", "Limited growth potential"],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Kommanditbolag (Limited Partnership)",
      minCapital: "0 SEK",
      liability: "Mixed - general partners unlimited, limited partners limited",
      taxation: "Pass-through taxation",
      bestFor: "Businesses with active and passive investors",
      pros: ["Limited liability for some partners", "Flexible profit sharing", "Tax advantages"],
      cons: ["Complex structure", "At least one general partner with unlimited liability"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Aktiebolag (Limited Company)",
      minCapital: "25,000 SEK",
      liability: "Limited to company assets",
      taxation: "Corporate tax (20.6%) + dividend tax",
      bestFor: "Growth companies, companies seeking investment",
      pros: ["Limited liability", "Professional image", "Easier to raise capital", "Perpetual existence"],
      cons: ["Higher administrative burden", "Minimum capital requirement", "Double taxation on dividends"],
      icon: <Building2 className="h-6 w-6" />
    }
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Choose Company Form",
      description: "Decide on the most suitable company structure based on your business needs",
      timeframe: "1-2 days",
      cost: "Free"
    },
    {
      step: 2,
      title: "Reserve Company Name",
      description: "Check name availability and reserve it through Bolagsverket",
      timeframe: "Same day",
      cost: "330 SEK"
    },
    {
      step: 3,
      title: "Prepare Articles of Association",
      description: "Draft company bylaws (for Aktiebolag) or partnership agreement",
      timeframe: "1-3 days",
      cost: "0-5,000 SEK (legal help)"
    },
    {
      step: 4,
      title: "Open Bank Account & Deposit Capital",
      description: "Open corporate bank account and deposit minimum share capital",
      timeframe: "1-2 weeks",
      cost: "25,000 SEK (for AB)"
    },
    {
      step: 5,
      title: "Register with Bolagsverket",
      description: "Submit registration application with all required documents",
      timeframe: "2-4 weeks",
      cost: "1,400 SEK (AB), 700 SEK (others)"
    },
    {
      step: 6,
      title: "Register for VAT & Employer Taxes",
      description: "Register with Skatteverket for tax obligations",
      timeframe: "Same day",
      cost: "Free"
    },
    {
      step: 7,
      title: "Get Business Insurance",
      description: "Obtain necessary business insurance coverage",
      timeframe: "1-2 days",
      cost: "Varies"
    }
  ];

  const governmentInstitutions = [
    {
      name: "Bolagsverket",
      role: "Company registration and corporate governance",
      services: ["Company registration", "Name reservation", "Annual reports", "Corporate changes"],
      website: "https://bolagsverket.se",
      contact: "0771-670 670"
    },
    {
      name: "Skatteverket",
      role: "Tax registration and administration",
      services: ["VAT registration", "Employer registration", "Tax returns", "Tax advice"],
      website: "https://skatteverket.se",
      contact: "0771-567 567"
    },
    {
      name: "Tillväxtverket",
      role: "Business development and support",
      services: ["Business advice", "Grants and funding", "Export support", "Regional development"],
      website: "https://tillvaxtverket.se",
      contact: "08-681 91 00"
    },
    {
      name: "Arbetsförmedlingen",
      role: "Employment services",
      services: ["Job matching", "Recruitment support", "Training programs", "Employment subsidies"],
      website: "https://arbetsformedlingen.se",
      contact: "0771-60 00 00"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/guides" className="inline-flex items-center text-green-100 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guides
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Starting a Business in Sweden
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Complete guide to company formation, registration processes, and government institutions. 
              Learn about different company structures and choose the right one for your business.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Company Forms Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Forms in Sweden</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sweden offers several company structures, each with different requirements, benefits, and limitations. 
            Choose the one that best fits your business goals and circumstances.
          </p>
          
          <div className="grid gap-8">
            {companyForms.map((form, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-green-600">
                        {form.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{form.name}</h3>
                    </div>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Min. Capital: {form.minCapital}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Liability</h4>
                      <p className="text-gray-600 text-sm">{form.liability}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Taxation</h4>
                      <p className="text-gray-600 text-sm">{form.taxation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                      <p className="text-gray-600 text-sm">{form.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {form.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                        Disadvantages
                      </h4>
                      <ul className="space-y-1">
                        {form.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Registration Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow these steps to register your company in Sweden. The process varies slightly depending on your chosen company form.
          </p>
          
          <div className="space-y-6">
            {registrationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{step.timeframe}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <CreditCard className="h-4 w-4 mr-1" />
                        <span>{step.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Government Institutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Government Institutions</h2>
          <p className="text-lg text-gray-600 mb-8">
            These government agencies will be your main points of contact when starting and running your business in Sweden.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {governmentInstitutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{institution.name}</h3>
                <p className="text-gray-600 mb-4">{institution.role}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <ul className="space-y-1">
                    {institution.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Visit website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  <div className="text-gray-600 text-sm">
                    Phone: {institution.contact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Considerations */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 text-blue-600 mr-3" />
              Important Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Before You Start</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ensure you have a valid personnummer or coordination number
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Consider getting professional advice from a lawyer or accountant
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Check if your business requires special permits or licenses
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Understand your tax obligations from day one
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">After Registration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Keep detailed records of all business transactions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    File annual reports and tax returns on time
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Maintain minimum share capital (for Aktiebolag)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Consider joining relevant industry associations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Advisors</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.verksamt.se" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 flex items-center">
                    Verksamt.se
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-gray-600 text-sm">Government business portal</p>
                </li>
                <li>
                  <a href="https://www.almi.se" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 flex items-center">
                    Almi
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-gray-600 text-sm">Business loans and advice</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.advokatsamfundet.se" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 flex items-center">
                    Swedish Bar Association
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-gray-600 text-sm">Find qualified lawyers</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Accounting</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.far.se" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 flex items-center">
                    FAR (Accountants)
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-gray-600 text-sm">Find certified accountants</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Business?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Get professional guidance to ensure your business registration goes smoothly. 
            Consider consulting with legal and accounting professionals before you begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.verksamt.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Visit Verksamt.se
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
            <Link
              to="/guides/working"
              className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              Working in Stockholm Guide
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StartBusinessGuide;
