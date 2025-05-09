import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const queryFetch = () => fetch('http://localhost:3001/superheroes').then(res => res.json());

function RQSuperHeroesPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: queryFetch
     
  });

  if (isPending) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error.message}</h2>;
  console.log("Data:", data);


  return (
    <>
      <h1>RQ Super Heroes Page</h1>

      {data.map((hero) => (
        <div key={hero.id}>
          <h2>{hero.name}</h2>
          <p>{hero.alterEgo}</p>
        </div>
      ))}
    </>
  );
}

export default RQSuperHeroesPage;
