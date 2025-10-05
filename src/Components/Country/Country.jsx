import React, { useState } from 'react';
import './Country.css'



const Country = ({country, handleVisitedCountry, handlerVisitedFlag}) => {
    // console.log(country.area.area)
    const [visited, setVisited] = useState(false);

    const buttonHander = () => {
    setVisited(!visited)
    handleVisitedCountry(country);
}
    
    return (
        <div className={`Country ${visited && 'Visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'} </p>
            <button onClick={buttonHander}>
                {
                    visited ? 'Visited' : 'Not Visisted'
                }
            </button>
            <button onClick={ () => {handlerVisitedFlag(country.flags.flags.png)}}>Visited Flag</button>
        </div>
    );
};

export default Country;