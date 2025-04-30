import { useState, useEffect } from 'react';

function withDataFetching(WrappedComponent, url) {
  return function NewComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setData(json);
        } catch (err) {
          setError("Error fetching data");
        }
      }
      fetchData();
    }, []);

    if (error) return <p className="text-red-500 font-medium">{error}</p>;
    if (!data) return <p className="text-gray-600 italic">Loading...</p>;

    return <WrappedComponent data={data} />;
  };
}

export default withDataFetching;
