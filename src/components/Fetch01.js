import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line react-hooks/exhaustive-deps

const Fetch01 = () => {
  const [isPending, setIsPending] = useState(false);
  const [quote, setQuote] = useState(' default ');
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // todo: fix error when unmounting. changing props after unmount.
  useEffect(() => {
    setIsMounted(true);
    return () => {
      cancelDelaySetIsPending();
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuote = async () => {
    console.log('getQuote triggered');
    if (isMounted) {
      delaySetIsPending();
      setQuote('...');
      setError('');

      axios
        .get('/api/test')
        .then((res) => {
          if (isMounted) {
            console.log('axios res:', res);
            setIsPending(false);
            cancelDelaySetIsPending();
            setQuote(res.data);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setIsPending(false);
            cancelDelaySetIsPending();
            setError(err.message);
          }
        });
    }
  };

  let delayLoadingMessage;

  function delaySetIsPending() {
    delayLoadingMessage = setTimeout(() => {
      if (isMounted) {
        setIsPending(true);
      }
    }, 500);
  }

  function cancelDelaySetIsPending() {
    clearTimeout(delayLoadingMessage);
  }

  const renderLoading = () => {
    return <div>...loading...</div>;
  };

  const renderError = () => {
    return <div>{error}</div>;
  };

  return (
    <div className="Fetch01">
      <button onClick={getQuote}>Get Quote</button>
      <div data-testid="quote">{quote}</div>
      <div data-testid="loading">{isPending ? renderLoading() : null}</div>
      {error ? renderError() : null}
    </div>
  );
};

export default Fetch01;
