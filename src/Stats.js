import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stats.css';

const TOKEN = "bvbog0748v6rqg57djag";
const BASE_URL = 'https://finnhub.io/api/v1/quote';

export default function Stats() {

    const [stocksData, setStocksData] = useState([]);
    const getStocksData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error('Error', error.message)
            });
    }

    useEffect(() => {
        let stockData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        // getMyStocks();
        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStocksData(stock)
                    .then((res) => {
                        stockData.push({
                            name: stock,
                            ...res.data
                        });
                    })
            )
        });

        Promise.all(promises).then(() => {
            console.log(stockData);
            setStocksData(stockData);
        })
    }, []);

    return (
        <div className="stats">
            <div className="stats_container">

                <div className="stats_header">
                    <p>Stocks</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">

                    </div>
                </div>

                <div className="stats_header">
                    <p>List</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">

                    </div>
                </div>

            </div>
        </div>
    )
}
