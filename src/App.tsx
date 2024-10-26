import React from 'react';
import { ChefHat, ShoppingCart, Clock, TrendingUp } from 'lucide-react';
import MenuCard from './components/MenuCard';
import OrderSummary from './components/OrderSummary';

function App() {
  const todaysSpecials = [
    {
      id: 1,
      name: "Chef's Special Pasta",
      price: 12.99,
      description: "Fresh homemade pasta with signature sauce",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800",
      category: "Mains"
    },
    {
      id: 2,
      name: "Grilled Salmon Bowl",
      price: 15.99,
      description: "Wild-caught salmon with quinoa and vegetables",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      category: "Healthy"
    },
    {
      id: 3,
      name: "Artisan Sandwich",
      price: 8.99,
      description: "Sourdough bread with premium ingredients",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
      category: "Lunch"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">Campus Canteen</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                <Clock className="h-5 w-5" />
                <span>Order History</span>
              </button>
              <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart (3)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Orders</p>
                <p className="text-2xl font-bold text-gray-900">147</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$2,847</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Specials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {todaysSpecials.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;