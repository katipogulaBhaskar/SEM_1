import React from 'react';

const PricingTable = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="pricing-card p-6 border border-gray-200 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Basic</h3>
          <p className="text-4xl font-bold mb-4">$19<span className="text-lg">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-600">5 Projects</li>
            <li className="text-gray-600">10GB Storage</li>
            <li className="text-gray-600">Basic Support</li>
          </ul>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">Choose Plan</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card p-6 border border-gray-200 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Pro</h3>
          <p className="text-4xl font-bold mb-4">$49<span className="text-lg">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-600">50 Projects</li>
            <li className="text-gray-600">100GB Storage</li>
            <li className="text-gray-600">Priority Support</li>
          </ul>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">Choose Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card p-6 border border-gray-200 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Premium</h3>
          <p className="text-4xl font-bold mb-4">$99<span className="text-lg">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-600">Unlimited Projects</li>
            <li className="text-gray-600">1TB Storage</li>
            <li className="text-gray-600">24/7 Support</li>
          </ul>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
