import React, { useState, useEffect } from 'react';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App_final() {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.coinlore.net/api/tickers/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        return response.json();
        })
        .then((data) => {
            setCryptocurrencies(data.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
        <div id="appFinalRoot">
            <Heading level="1">Cryptocurrency Prices</Heading>
            <Button variant="bordered" onClick="Update">Update</Button>
            <Input placeholder="Search"></Input>

            {cryptocurrencies.map((crypto) => (
            <Accordion
                key={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.price_usd}
                percentChange24h={crypto.percent_change_24h}
            />
      ))}
        </div>
    )
}

export default App_final;
