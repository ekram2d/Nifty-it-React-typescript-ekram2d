import React from 'react';
import { Projects } from './CompanyProjects';

const SingleProject = ({ project }: { project: Projects }) => {
  const { id, name, description, startDate, endDate, status, imageUrl } = project;

  return (
    <div className="w-[80%] border rounded-lg overflow-hidden shadow-md p-2 mb-8 mt-8 text-center transition transform hover:scale-105 hover:shadow-lg">
      <img src={imageUrl} alt={name} className="w-full mx-auto mb-4" />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-xs mb-2">
          Start Date: {startDate.toDateString()} - End Date: {endDate ? endDate.toDateString() : 'Ongoing'}
        </p>
        <p className="text-xs mb-2">Status: {status}</p>
      </div>
    </div>
  );
};

export default SingleProject;
