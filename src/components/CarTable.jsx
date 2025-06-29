import React from 'react';

function CarTable({ cars }) {
  return (
    <div className="overflow-x-auto w-full max-w-4xl bg-white rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tl-lg">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Year
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Seats
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price (€)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tr-lg">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cars.map((car, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {car.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {car.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {car.seats}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {car.cost.toLocaleString('es-ES')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {car.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cars.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-lg">
          No cars found.
        </div>
      )}
    </div>
  );
}

export default CarTable;
