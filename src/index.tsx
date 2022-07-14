import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const getAuthToken = async () => {
  try {
    const fetchedTokenPromise = await fetch('http://152.228.215.94:81/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test.com',
        password: '1234567Qa',
      }),
    });
    const fetchedTokenJson = await fetchedTokenPromise.json();
    const { access_token } = fetchedTokenJson;
    localStorage.setItem('token', access_token);
    return access_token;
  } catch (error) {
    console.error(error);
  }
};

const httpLink = createHttpLink({
  uri: 'http://152.228.215.94:81/api',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token || getAuthToken()}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
