import React from 'react'

const productsData = [
  { id: 1, name: 'Home Decor Range', popularity: 45, sales: 45, color: 'bg-blue-500' },
  { id: 2, name: 'Disney Princess Pink Bag 18', popularity: 29, sales: 29, color: 'bg-green-500' },
  { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 18, color: 'bg-purple-500' },
  { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 25, color: 'bg-orange-500' },
]

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Top Products</h2>
      
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200 h-full">
          <thead>
            <tr>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popularity</th>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productsData.map((product) => (
              <tr key={product.id}>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id < 10 ? `0${product.id}` : product.id}</td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${product.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${product.popularity}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.color.replace('bg-', 'bg-opacity-20 text-').replace('-500', '-600')}`}>
                    {product.sales}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopProducts
