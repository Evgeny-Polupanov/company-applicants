import { gql } from '@apollo/client';

export const GET_COMPANY_RELATIONS = gql`
    query applicantIndividualCompanyRelations {
        applicantIndividualCompanyRelations(where: {column: NAME, operator: LIKE, value: ""}) {
            data {
                id
                name
            }
        }
    }
`;

export const GET_COMPANY_POSITIONS = gql`
    query applicantIndividualCompanyPositions {
        applicantIndividualCompanyPositions(where: {column: NAME, operator: LIKE, value: "Chief"}) {
            data {
                id
                name
            }
        }
    }
`;
