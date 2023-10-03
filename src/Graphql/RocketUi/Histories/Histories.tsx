import { useQuery } from "@apollo/client";
import { Get_Histores } from "../../allQuery/GetRocketsData";

export default function Histories() {
  const { loading, error, data } = useQuery(Get_Histores);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const histories = data?.histories;

  return (
    <div>
      <h1 className="text-center font-bold text-lime-500 m-2 text-2xl uppercase">
        Historical Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {histories?.map((history) => (
          <div
            key={history?.id}
            className="bg-white border rounded-md p-4 shadow-md"
          >
            <h2 className="text-lg font-semibold">{history?.title}</h2>
            <p>Details: {history?.details}</p>
            <p>Event Date: {history?.event_date_utc}</p>
            <p>Event Date (Unix): {history?.event_date_unix}</p>
            <p>Id: {history?.id}</p>
            {history?.links?.article && ( // Conditional check for href
              <p>
                Links:{" "}
                <a className="text-blue-600" href={history?.links?.article}>
                  Article
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
