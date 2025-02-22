'use client';
import { useEffect, useState } from 'react';

import api from './api/axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/v1/hello');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Message from Rails API: {message}</h1>
    </main>
  );
}
