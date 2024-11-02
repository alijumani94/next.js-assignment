"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

export default function DelayedContentPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
     <Navbar/>
      {isLoading ? (
        <h2 className='mt-24 pb-20 text-center'>Loading...</h2>
      ) : (
        <div className="flex items-center flex-col pt-24 font-bold h-full w-screen">
          <h1 className='mb-20'>Welcome to the loading page!</h1>
        </div>
      )}
    </div>
  );
}
