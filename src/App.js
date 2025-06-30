import React, { useState, useEffect } from 'react';
import carsData from './data/cars.json';
import CarTable from './components/CarTable';
import FilterInput from './components/FilterInput';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [displayedCars, setDisplayedCars] = useState(carsData);
  const [isLoading, setIsLoading] = useState(false);
  const [filterTimeout, setFilterTimeout] = useState(null);

  useEffect(() => {
    if (filterTimeout) {
      clearTimeout(filterTimeout);
    }

    if (filter === '') {
      setDisplayedCars(carsData);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      const filtered = carsData.filter((car) =>
        car.name.toLowerCase().includes(filter.toLowerCase())
      );
      setDisplayedCars(filtered);
      setIsLoading(false);
    }, 500);

    setFilterTimeout(timer);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [filter]); 

  const handleFilterStart = () => {
    if (filter !== '') {
      setIsLoading(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 font-inter">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        <span className="text-red-600">Cars</span> <span className="text-gray-900">Shop</span>
      </h1>

      <FilterInput
        filter={filter}
        setFilter={setFilter}
        onFilterChange={handleFilterStart}
      />
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md mt-6">
          <div className="spinner"></div>
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      ) : (
        <CarTable cars={displayedCars} />
      )}
    </div>
  );
}

export default App;
