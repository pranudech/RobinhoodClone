import React from 'react'
import LineGraph from './LineGraph';
import './Newsfeed.css';

export default function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,000.33</h1>
                        <p>+$861.56 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}
