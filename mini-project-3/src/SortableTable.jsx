import React, { useState } from 'react';



function SortableTable() {
    
    const[data , setData] = useState(
        [{ id: 1, name: "Alice", score: 95, category: "Math" },
    { id: 2, name: "Bob", score: 85, category: "Science" },
    { id: 3, name: "Charlie", score: 75, category: "English" },
    { id: 4, name: "David", score: 90, category: "Math" },]
);
    const[sortKey , setSortKey] = useState("name")
    const[sortDirection, setSortDirection] = useState("asc")

    const sortedData = [...data].sort((a, b) => {
        const first = a[sortKey];
        const second = b[sortKey];
      
        if (first === second) return 0;
      
        return sortDirection === "asc"
          ? first > second ? 1 : -1
          : first < second ? 1 : -1;
      });
      

      const handleSort = (clickedColumn) => {
       
        const isSameColumn = sortKey === clickedColumn;
      
        if (isSameColumn) {
          
          const newDirection = sortDirection === "asc" ? "desc" : "asc";
          setSortDirection(newDirection);
        } else {
          
          setSortKey(clickedColumn);
          setSortDirection("asc");
        }
      };

    const rowBody = sortedData.map((row) => <tr>
        <td>{row.name}</td>
        <td>{row.score}</td>
        <td>{row.category}</td>
    </tr>);

    
      
      
    

  

  
  
 return (
<div className="con bg-gradient-to-r from-red-600 via-yellow-500 to-pink-600 p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto mt-10">
  <h1 className="text-center text-4xl font-extrabold text-white mb-6">Fruit Fiesta: Sort Your Favorites</h1>
  <table className="min-w-full table-auto bg-white border border-yellow-400 rounded-3xl shadow-lg">
    <thead className="bg-gradient-to-r from-red-500 to-yellow-500 text-white text-2xl font-extrabold uppercase tracking-wider">
      <tr>
        <th className="px-8 py-4 cursor-pointer hover:bg-red-400 transition duration-200 ease-in-out hover:scale-105 transform" onClick={() => handleSort("name")}>Name</th>
        <th className="px-8 py-4 cursor-pointer hover:bg-red-400 transition duration-200 ease-in-out hover:scale-105 transform" onClick={() => handleSort("score")}>Score</th>
        <th className="px-8 py-4 cursor-pointer hover:bg-red-400 transition duration-200 ease-in-out hover:scale-105 transform" onClick={() => handleSort("category")}>Category</th>
      </tr>
    </thead>
    <tbody className="text-gray-800 text-xl font-medium text-center">
      {rowBody}
    </tbody>
  </table>
</div>



  
   
    
    
          )
    }

export default SortableTable
