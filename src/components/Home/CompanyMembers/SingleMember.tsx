import React from 'react';
import { members } from './CompanyMembers';

const SingleMember = ({ id, name, position, email, imageUrl }: members) => {
      return (

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img src={imageUrl} alt={name} className="w-full h-64 hover:scale-95" />
                  <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base">{position}</p>
                        <p className="text-gray-700 text-base">{email}</p>
                  </div>
            </div>


      );
};

export default SingleMember;