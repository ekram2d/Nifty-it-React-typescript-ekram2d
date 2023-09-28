import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../allQuery/GetCustomers';

// Define the customer interface
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  img: string;
}

function Customer() {
  // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { customers } = data;

  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-20">
        GraphQL data fetch from my own Apollo Server
      </h1>
      <h1 className="text-2xl text-center font-bold mt-20">
        Customer Details 
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {customers?.map((customer: Customer) => (
          <div
            key={customer.id}
            className="bg-white border rounded-md p-4 shadow-md"
          >
            <img src={customer.img} alt={customer.name} className="w-full h-400 mx-auto" />
            <h2 className="text-lg font-semibold">{customer.name}</h2>
            <p className="text-sm text-gray-500">{customer.email}</p>
            <p className="text-sm text-gray-500">{customer.phone}</p>
            <p className="text-sm text-gray-500">{customer.address}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Customer;
