import { gql } from "../__generated__";





export const GET_Rockets = gql(`
query Rockets{
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

`);


export const Get_Histores =  gql(`
query Histories{
  histories{
    details
    event_date_unix
    event_date_utc
    flight{
      details
      id
      is_tentative
      launch_date_local
      launch_date_utc
       launch_success
      
    }
    id
    links{
      article
      reddit
       wikipedia
    }
   title
    
  }
  
  }



`);