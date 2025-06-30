
import { ArrowLeft, Clock, MapPin, Users, Home, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const NeighborhoodsGuide = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      id: 0,
      question: "What's your budget for monthly rent?",
      options: [
        { id: 'budget_low', label: 'Under 12,000 SEK', value: 'budget_low' },
        { id: 'budget_mid', label: '12,000 - 20,000 SEK', value: 'budget_mid' },
        { id: 'budget_high', label: '20,000+ SEK', value: 'budget_high' }
      ]
    },
    {
      id: 1,
      question: "What's your lifestyle preference?",
      options: [
        { id: 'lifestyle_quiet', label: 'Quiet and residential', value: 'lifestyle_quiet' },
        { id: 'lifestyle_vibrant', label: 'Vibrant nightlife and culture', value: 'lifestyle_vibrant' },
        { id: 'lifestyle_family', label: 'Family-friendly with parks', value: 'lifestyle_family' }
      ]
    },
    {
      id: 2,
      question: "How important is proximity to city center?",
      options: [
        { id: 'proximity_very', label: 'Very important - walking distance', value: 'proximity_very' },
        { id: 'proximity_some', label: 'Somewhat - short commute is fine', value: 'proximity_some' },
        { id: 'proximity_not', label: 'Not important - I prefer suburbs', value: 'proximity_not' }
      ]
    },
    {
      id: 3,
      question: "What's your age group?",
      options: [
        { id: 'age_student', label: 'Student (18-25)', value: 'age_student' },
        { id: 'age_young', label: 'Young professional (25-35)', value: 'age_young' },
        { id: 'age_family', label: 'Family with children (35+)', value: 'age_family' }
      ]
    },
    {
      id: 4,
      question: "What type of housing do you prefer?",
      options: [
        { id: 'housing_modern', label: 'Modern apartment building', value: 'housing_modern' },
        { id: 'housing_historic', label: 'Historic building with character', value: 'housing_historic' },
        { id: 'housing_house', label: 'House with garden', value: 'housing_house' }
      ]
    }
  ];

  const getRecommendation = () => {
    const profile = {
      budget: answers[0],
      lifestyle: answers[1],
      proximity: answers[2],
      age: answers[3],
      housing: answers[4]
    };

    // Logic to determine best neighborhood
    if (profile.lifestyle === 'lifestyle_vibrant' && profile.proximity === 'proximity_very') {
      return {
        neighborhood: 'Södermalm',
        description: 'Perfect for your vibrant lifestyle! This trendy island offers amazing nightlife, creative culture, and you\'ll be in the heart of Stockholm.',
        pros: ['Vibrant nightlife', 'Creative scene', 'Great restaurants', 'Walking distance to everything'],
        cons: ['Higher rent prices', 'Can be noisy', 'Very competitive housing market'],
        rentRange: '15,000-22,000 SEK/month',
        match: 95
      };
    }
    
    if (profile.budget === 'budget_high' && profile.housing === 'housing_historic') {
      return {
        neighborhood: 'Östermalm',
        description: 'Luxury living at its finest! This upscale area offers elegant historic buildings, high-end shopping, and sophisticated dining.',
        pros: ['Beautiful architecture', 'Luxury shopping', 'Safe and well-maintained', 'Great restaurants'],
        cons: ['Very expensive', 'Can feel formal', 'Less diverse nightlife'],
        rentRange: '18,000-25,000+ SEK/month',
        match: 92
      };
    }
    
    if (profile.age === 'age_family' || profile.lifestyle === 'lifestyle_family') {
      return {
        neighborhood: 'Hammarby Sjöstad',
        description: 'An eco-friendly modern district perfect for families! Great schools, parks, and a strong community feel.',
        pros: ['Family-friendly', 'Modern eco-buildings', 'Great parks', 'Good schools'],
        cons: ['Further from city center', 'Less nightlife', 'Newer area with less character'],
        rentRange: '12,000-18,000 SEK/month',
        match: 88
      };
    }
    
    if (profile.budget === 'budget_low' || profile.proximity === 'proximity_not') {
      return {
        neighborhood: 'Vällingby',
        description: 'A multicultural suburb with great value! Perfect for those seeking affordability while staying connected to the city.',
        pros: ['Affordable housing', 'Multicultural community', 'Good transport links', 'Growing cultural scene'],
        cons: ['Further from center', 'Less prestigious', 'Fewer high-end amenities'],
        rentRange: '8,000-14,000 SEK/month',
        match: 85
      };
    }
    
    // Default recommendation
    return {
      neighborhood: 'Vasastan',
      description: 'A great all-around choice! Popular with young professionals, offering a good balance of city life and residential comfort.',
      pros: ['Great transport links', 'Mix of quiet and lively areas', 'Good restaurants', 'Parks nearby'],
      cons: ['Can be busy', 'Increasing gentrification', 'Limited character in some areas'],
      rentRange: '13,000-19,000 SEK/month',
      match: 78
    };
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [currentQuestion]: selectedAnswer }));
      setSelectedAnswer('');
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setSelectedAnswer('');
  };

  const recommendation = showResult ? getRecommendation() : null;

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
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Neighborhood Quiz</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stockholm Neighborhood
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Take our interactive quiz to discover which Stockholm neighborhood matches your lifestyle and preferences.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            5 min quiz
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showResult ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {questions[currentQuestion].question}
              </h2>
              
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.id} />
                      <label 
                        htmlFor={option.id} 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              
              <Button 
                onClick={handleNext} 
                className="w-full"
                disabled={!selectedAnswer}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Get My Recommendation'}
              </Button>
            </CardContent>
          </Card>
        ) : (
          // Results
          <div className="space-y-8">
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Your Perfect Match!</CardTitle>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold inline-block">
                  {recommendation?.match}% Match
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">
                    {recommendation?.neighborhood}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {recommendation?.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Why It's Great For You
                    </h3>
                    <ul className="space-y-1 text-green-800 text-sm">
                      {recommendation?.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-3 flex items-center">
                      <XCircle className="h-5 w-5 mr-2" />
                      Things to Consider
                    </h3>
                    <ul className="space-y-1 text-yellow-800 text-sm">
                      {recommendation?.cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-blue-900 mb-2">Expected Rent Range</h3>
                  <p className="text-xl font-bold text-blue-800">{recommendation?.rentRange}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleRestart} variant="outline" className="flex-1">
                    Take Quiz Again
                  </Button>
                  <Button asChild className="flex-1">
                    <Link to="/finding-housing">Find Housing</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Research the Area</h4>
                    <p className="text-sm text-gray-600">Visit the neighborhood at different times, check local amenities, and talk to potential neighbors.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Start Your Housing Search</h4>
                    <p className="text-sm text-gray-600">Use Hemnet, Blocket, and Facebook groups to find available apartments in your chosen area.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeighborhoodsGuide;
