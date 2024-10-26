import React from 'react';
import { Clock, CreditCard } from 'lucide-react';

const OrderSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Order</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <h3 className="font-medium text-gray-900">Chef's Special Pasta</h3>
            <p className="text-sm text-gray-500">Quantity: 2</p>
          </div>
          <span className="font-semibold text-gray-900">$25.98</span>
        </div>
        
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <h3 className="font-medium text-gray-900">Grilled Salmon Bowl</h3>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
          <span className="font-semibold text-gray-900">$15.99</span>
        </div>
        
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <h3 className="font-medium text-gray-900">Artisan Sandwich</h3>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
          <span className="font-semibold text-gray-900">$8.99</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$50.96</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>$4.08</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>$55.04</span>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Proceed to Payment</span>
        </button>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>Estimated delivery: 15-20 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;