import React from 'react';
import { NextPage } from 'next';

interface Props {
    str: string;
}

const YourPage: NextPage<Props> = () => {
  // Your page content goes here

  return (
    <div>
      <h1>Your Next.js Page</h1>
      {/* Add your components, text, etc. */}
    </div>
  );
};

export default YourPage;
