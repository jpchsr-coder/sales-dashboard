import React from 'react'

const productsData = [
  { id: 1, name: 'Home Decor Range', popularity: 45 },
  { id: 2, name: 'Disney Princess Pink Bag 18', popularity: 29 },
  { id: 3, name: 'Bathroom Essentials', popularity: 18 },
  { id: 4, name: 'Apple Smartwatches', popularity: 25 },
]

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Top Products</h2>
      
      <div className="space-y-4">
        {productsData.map((product) => (
          <div key={product.id} className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-semibold text-sm">
              {product.id}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-800">{product.name}</span>
                <span className="text-sm font-semibold text-gray-600">{product.popularity}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${product.popularity}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
