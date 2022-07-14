import { gql } from '@apollo/client';

// export const GET_COMPANY_RELATIONS = gql`
//     query applicantIndividualCompanyRelations($name: String!) {
//         applicantIndividualCompanyRelations {
//             data {
//                 id
//                 name
//             }
//         }
//     }
// `;

export const GET_COMPANY_POSITIONS = gql`
    query applicantIndividualCompanyPositions($name: String!) {
        applicantIndividualCompanyPositions(where: {name: $name}) {
            data {
                id
                name
            }
        }
    }
`;
