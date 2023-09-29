
import { gql } from '@apollo/client';

export const GET_Rockets = gql`
query{
  rockets{
    active
    boosters
     company
    cost_per_launch
    country
    description
    diameter{
      feet
      meters
    }
    engines{
      engine_loss_max
      layout
      
    }
    first_flight
    first_stage{
      burn_time_sec
      engines
      fuel_amount_tons
    }
    id
    mass{
      kg
      lb
    }
    success_rate_pct
    
  }
  

}

`;
// query getAllDatas{
//       quotes{
//         name
//         by
//       }
//         customers{
//           id
//           name
//           email
//           phone
//           address
//           img
//           quotes{
//           name
//             by
            
      
//           }
          
//         }
//        great
//       }