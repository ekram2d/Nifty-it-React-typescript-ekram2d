// import { Rocket } from "../../Interface/interfaceAll";

import { Rocket } from "../__generated__/graphql";



// import { Rocket } from "../../Interface/interfaceAll";




function RocketCard({ rocket }: { rocket: Rocket }) {


      const { diameter } = rocket;
      const { engines } = rocket;

      const { first_stage } = rocket;


      return (
            <div className="bg-white border rounded-md p-4 shadow-md">
             
                  <h2 className="text-2xl font-bold mb-2">{rocket.company}</h2>
                  <div className="mb-4">
                        <span className="text-gray-600">Active: </span>
                        <span className={`font-semibold ${rocket.active ? 'text-green-500' : 'text-red-500'}`}>
                              {rocket.active ? 'Yes' : 'No'}
                        </span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Cost per Launch: </span>
                        <span className="font-semibold">${rocket.cost_per_launch}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Country: </span>
                        <span className="font-semibold">{rocket.country}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Description: </span>
                        <span className="font-semibold">{rocket.description}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Diameter: </span>
                        <span className="font-semibold">
                              {rocket?.diameter?.feet} feet / {diameter?.meters} meters
                        </span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Engines: </span>
                        <span className="font-semibold">{engines?.layout}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">First Flight: </span>
                        <span className="font-semibold">{rocket.first_flight}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">First Stage Burn Time: </span>
                        <span className="font-semibold">{first_stage?.burn_time_sec} seconds</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">First Stage Engines: </span>
                        <span className="font-semibold">{first_stage?.engines}</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">First Stage Fuel Amount: </span>
                        <span className="font-semibold">{first_stage?.fuel_amount_tons} tons</span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Mass: </span>
                        <span className="font-semibold">
                              {rocket?.mass?.kg} kg / {rocket?.mass?.lb} lb
                        </span>
                  </div>
                  <div className="mb-4">
                        <span className="text-gray-600">Success Rate: </span>
                        <span className="font-semibold">{rocket.success_rate_pct}%</span>
                  </div>
            </div>
      );
}

export default RocketCard;
