import { useQuery } from '@apollo/client';
import RocketCard from './RocketCard';
import { GET_Rockets } from '../allQuery/GetRocketsData';
import { Rocket } from '../../../__generated__/graphql';

function RocketList() {
  const { loading, error, data } = useQuery(GET_Rockets);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { rockets } = data!;

  return (
    <div>
      <h1 className='text-2xl font-bold text-center m-9 uppercase underline'>Rockets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rockets?.map((rocket) => (
          <RocketCard key={rocket?.id} rocket={rocket as Rocket} />
        ))}
      </div>
    </div>
  );
}

export default RocketList;
