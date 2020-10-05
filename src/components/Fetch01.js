import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch01 = () => {
  const [isPending, setIsPending] = useState(false);
  const [quote, setQuote] = useState(' default ');
  const [error, setError] = useState('');
  const [getQuote, setGetQuote] = useState(false);

  useEffect(() => {
    let mounted = true;
    let delayLoadingMessage;

    function delaySetIsPending() {
      delayLoadingMessage = setTimeout(() => {
        if (mounted) {
          setIsPending(true);
        }
      }, 1000);
    }

    function cancelDelaySetIsPending() {
      clearTimeout(delayLoadingMessage);
    }

    if (getQuote) {
      delaySetIsPending();
      const loadData = async () => {
        try {
          const response = await axios.get('/api/test');
          if (mounted) {
            console.log('res:', response.data);
            setQuote(response.data);
            setGetQuote(false);
            setIsPending(false);
            cancelDelaySetIsPending();
          }
        } catch (err) {
          console.log(err.message);
          setError(err.message);
          setGetQuote(false);
          setIsPending(false);
          cancelDelaySetIsPending();
        }
      };
      loadData();
    }

    return () => {
      mounted = false;
    };
  }, [getQuote]);

  const renderLoading = () => {
    return <div>...loading...</div>;
  };

  const renderError = () => {
    return <div>{error}</div>;
  };

  const handleGet = () => {
    setGetQuote(true);
  };

  return (
    <div className="Fetch01">
      <button onClick={handleGet}>Get Quote</button>
      <div data-testid="quote">{quote}</div>
      <div data-testid="loading">{isPending ? renderLoading() : null}</div>
      {error ? renderError() : null}
    </div>
  );
};

export default Fetch01;
