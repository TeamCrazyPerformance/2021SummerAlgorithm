import React from "react";
import './StatCard.css';

function StatCard({name, id, tier, solved, classes}) {
    return (
        <div className={backgroundTier(tier)}>
            <p className="cardName">{name} <span className="cardId">{id}</span></p>
            <p className="cardTier">{tier}</p>
            <p className="cardSolved">Solved {solved}</p>
            <p className="cardClasses">Class {classes}</p>
        </div>
    )
}

function backgroundTier(tier) {
    let bgClass = "card bg-";
    if(tier.indexOf("Platinum") !== -1) bgClass += "platinum";
    else if(tier.indexOf("Gold") !== -1) bgClass += "gold";
    else if(tier.indexOf("Silver") !== -1) bgClass += "silver";
    else if(tier.indexOf("Bronze") !== -1) bgClass += "bronze";

    return bgClass;
}

export default StatCard;
