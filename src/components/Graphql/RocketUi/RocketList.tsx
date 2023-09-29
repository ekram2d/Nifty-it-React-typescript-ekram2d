import { useQuery } from '@apollo/client';
import RocketCard from './RocketCard';
import { GET_Rockets } from '../allQuery/GetRocketsData';
import { Rocket } from '../../Interface/interfaceAll';

// Import your corrected GraphQL query





function RocketList() {
  // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_Rockets);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { rockets } = data;

  return (
    <div>
      <h1 className='text-2xl font-bold text-center m-9 uppercase underline'>Rockets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rockets.map((rocket: Rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
}

export default RocketList;
