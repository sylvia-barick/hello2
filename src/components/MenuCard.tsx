import React from 'react';
import { Plus } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-lg font-bold text-orange-500">${item.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;