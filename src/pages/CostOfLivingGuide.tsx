
import { ArrowLeft, Clock, Calculator, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CostOfLivingGuide = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [results, setResults] = useState<any>(null);

  const calculateTaxes = (grossIncome: number) => {
    const annualIncome = grossIncome * 12;
    
    // Swedish tax rates for 2024 (approximate)
    const municipalTax = 0.32; // Average municipal tax rate
    const stateTax = annualIncome > 598500 ? 0.20 : 0; // State tax threshold
    const pensionContribution = 0.07; // Pension contribution
    
    const monthlyMunicipalTax = grossIncome * municipalTax;
    const monthlyStateTax = grossIncome * stateTax;
    const monthlyPension = grossIncome * pensionContribution;
    
    const totalTaxes = monthlyMunicipalTax + monthlyStateTax + monthlyPension;
    const netIncome = grossIncome - totalTaxes;
    
    return {
      grossIncome,
      municipalTax: monthlyMunicipalTax,
      stateTax: monthlyStateTax,
      pensionContribution: monthlyPension,
      totalTaxes,
      netIncome,
      taxRate: (totalTaxes / grossIncome) * 100
    };
  };

  const handleCalculate = () => {
    const income = parseFloat(monthlyIncome);
    if (income > 0) {
      setResults(calculateTaxes(income));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
            <Calculator className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Salary Calculator</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stockholm Salary Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Calculate your net income after taxes in Stockholm. Enter your monthly gross salary to see detailed tax breakdown.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-1" />
            3 min calculation
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Enter Your Monthly Salary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Gross Income (SEK)
                </label>
                <Input
                  id="income"
                  type="number"
                  placeholder="e.g., 45000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button 
                onClick={handleCalculate} 
                className="w-full"
                disabled={!monthlyIncome || parseFloat(monthlyIncome) <= 0}
              >
                Calculate Net Income
              </Button>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Tax Information:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Municipal tax: ~32% (varies by municipality)</li>
                      <li>• State tax: 20% (on income above 598,500 SEK/year)</li>
                      <li>• Pension contribution: 7%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Tax Breakdown & Net Income</CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-green-700 mb-1">Net Monthly Income</p>
                      <p className="text-3xl font-bold text-green-800">
                        {formatCurrency(results.netIncome)}
                      </p>
                      <p className="text-sm text-green-600">
                        Effective tax rate: {results.taxRate.toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gross Income:</span>
                      <span className="font-semibold">{formatCurrency(results.grossIncome)}</span>
                    </div>
                    
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between items-center text-red-600">
                        <span>Municipal Tax (32%):</span>
                        <span>-{formatCurrency(results.municipalTax)}</span>
                      </div>
                      
                      {results.stateTax > 0 && (
                        <div className="flex justify-between items-center text-red-600">
                          <span>State Tax (20%):</span>
                          <span>-{formatCurrency(results.stateTax)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center text-orange-600">
                        <span>Pension Contribution (7%):</span>
                        <span>-{formatCurrency(results.pensionContribution)}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center font-semibold text-red-700">
                        <span>Total Deductions:</span>
                        <span>-{formatCurrency(results.totalTaxes)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your monthly income to see the tax breakdown</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Understanding Swedish Taxes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Municipal Tax:</strong> Varies by municipality (29-35%), funds local services</p>
              <p><strong>State Tax:</strong> Only applies to higher incomes (above ~50k SEK/month)</p>
              <p><strong>Pension:</strong> 7% goes to your future pension, 2.5% you can invest yourself</p>
              <p className="text-blue-600">
                <a href="https://www.skatteverket.se" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Visit Skatteverket for official tax information
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cost of Living Context</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Average rent (1br):</strong> 12,000-20,000 SEK/month</p>
              <p><strong>Groceries:</strong> 2,500-3,500 SEK/month (single person)</p>
              <p><strong>Transport:</strong> 930 SEK/month (SL card)</p>
              <p><strong>Good net income:</strong> 30,000+ SEK/month for comfortable living</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostOfLivingGuide;
