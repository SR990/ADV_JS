function DataDisplay({ data }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fetched Posts:</h2>
        <ul className="space-y-4">
          {data.map((item) => (
            <li key={item.id} className="p-4 border border-gray-200 rounded bg-gray-50">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DataDisplay;
  