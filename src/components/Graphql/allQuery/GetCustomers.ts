
import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
query getAllDatas{
      quotes{
        name
        by
      }
        customers{
          id
          name
          email
          phone
          address
          img
          quotes{
          name
            by
            
      
          }
          
        }
       great
      }
`;
