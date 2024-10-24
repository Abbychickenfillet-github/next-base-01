import { useState, useEffect } from 'react';

export default function FetchDataPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false); // 用來確認是否在客戶端

  useEffect(() => {
    // 設置為客戶端
    setIsClient(true);

    if (isClient) {
      fetch('./testdata')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError('Failed to fetch data');
        });
    }
  }, [isClient]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data === null) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
