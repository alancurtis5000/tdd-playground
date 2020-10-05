import React, { useState } from 'react';
import axios from 'axios';

const Fetch01 = () => {
  const [isPending, setIsPending] = useState(true);
  const [quote, setQuote] = useState(' default ');

  const getQuote = () => {
    console.log('getQuote triggered');
    axios.get('/api/test').then((res) => {
      console.log('res: ', res);
    });
  };

  return (
    <div className="Fetch01">
      {quote}
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
};

export default Fetch01;
