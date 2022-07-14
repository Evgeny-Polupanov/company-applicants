import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMPANY_POSITIONS } from './graphql/queries';
import { ListEntity } from './types';

const App = () => {
  const { loading, error, data } = useQuery(GET_COMPANY_POSITIONS, { variables: { name: "employee" }, fetchPolicy: 'no-cache' });

  if (loading || error) {
    return null;
  }

  return (
    <ul>
      {data.applicantIndividualCompanyPositions.data.map((relation: ListEntity) => (
        <li key={relation.id}>{relation.name}</li>
      ))}
    </ul>
  );
};

export default App;
