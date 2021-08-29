import React from "react";
import './StatCard.css';

function StatCard({name, tier, solved, classes}) {
    return (
        <div className="card">
            <p className="cardName">{name}</p>
            <p className="cardTier">{tier}</p>
            <p className="cardSolved">{solved}</p>
            <p className="cardClasses">{classes}</p>
        </div>
    )
}

export default StatCard;
