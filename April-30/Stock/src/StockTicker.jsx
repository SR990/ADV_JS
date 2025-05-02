import React, { useState, useEffect } from 'react';

function StockTicker() {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  // Initial mock stock data
  const initialStockData = [
    { symbol: 'AAPL', price: 100 },
    { symbol: 'GOOGL', price: 1500 },
    { symbol: 'AMZN', price: 3000 },
  ];

  
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
     
      const updatedStock = initialStockData.map(item => ({
        ...item,
        price: (item.price * (1 + (Math.random() - 0.5) * 0.02)).toFixed(2), 
      }));

      setStock(updatedStock); 
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Loading Error");
    }
  };

  useEffect(() => {
    fetchData(); 

  
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Live Stock Updates</h1>

        {loading && (
          <p className="text-center text-xl text-blue-600">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        <ul className="space-y-4">
          {stock.map((item, index) => (
            <li key={index} className="flex justify-between text-lg font-medium text-gray-800 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
              <span className="text-xl text-green-500">{item.symbol}: </span>
              <marquee className="text-xl text-yellow-500">${item.price}</marquee>
              
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StockTicker;
