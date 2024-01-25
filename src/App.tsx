// TODO: Step:1: Fetch API from https://jsonplaceholder.typicode.com/users on page load
// TODO: Step:2: Show API response on UI

import { useState, useEffect } from 'react';
import { UserData } from './components/UserData';
import { APIStatus, APIResponse } from './types/APIResponse';

function App() {
  const [data, setData] = useState<Array<APIResponse>>();
  const [loading, setLoading] = useState<APIStatus>('idle');

  useEffect(() => {
    setLoading('loading');
    const getData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          setLoading('error');
          throw new Error('error');
        }
        const data = await response.json();
        setLoading('success');
        setData(data);
      } catch (error) {
        console.log(error);
        setLoading('error');
      }
    };
    getData();
  }, []);

  if (loading === 'loading') {
    return <h1>loading data</h1>;
  }

  if (loading === 'error') {
    return <h1>something went wrong</h1>;
  }

  return (
    <>
      {data &&
        data?.map((user: APIResponse) => (
          <UserData key={user.id} id={user.id} username={user.username} />
        ))}
    </>
  );
}

export default App;
