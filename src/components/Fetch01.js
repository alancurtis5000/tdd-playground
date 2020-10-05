import React, { useState } from 'react';
import axios from 'axios';

const Fetch01 = () => {
  const [isPending, setIsPending] = useState(false);
  const [quote, setQuote] = useState(' default ');
  const [error, setError] = useState('');

  const getQuote = () => {
    console.log('getQuote triggered');
    setIsPending(true);
    setQuote('...');
    setError('');
    axios
      .get('/api/test')
      .then((res) => {
        console.log('res: ', res);
        setIsPending(false);
        setQuote(res.data);
      })
      .catch((err) => {
        console.log('Error:', err);
        console.log('more', err.message);
        setIsPending(false);
        setError(err.message);
      });
  };

  const renderLoading = () => {
    return <div>...loading...</div>;
  };

  const renderError = () => {
    return <div>{error}</div>;
  };

  return (
    <div className="Fetch01">
      <button onClick={getQuote}>Get Quote</button>
      {quote}
      {isPending ? renderLoading() : null}
      {error ? renderError() : null}
    </div>
  );
};

export default Fetch01;
