import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountry = (country) => {
        // console.log("visitedCountryhandler clicked", country);
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }
    const [visitedFlag, setVisitedFlag] = useState([]);
    const handlerVisitedFlag = (flag) => {
        console.log("flag need to added", flag);
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag);
    }

    return (
        <div>
           <p> countries length: {countries.length}</p>
           <p>Visited Countrys: {visitedCountry.length} </p>
           <p>Visited Flag:{visitedFlag.length} </p>
           <ul>
            {
                visitedCountry.map(country => <li> {country.name.common} </li>)
            }
           </ul>
           <div className='visited-flag'>
             {
            visitedFlag.map(flag => <img src={flag} alt="" /> )
           }
           </div>
          
           <div className='Countries'>
            {
            countries.map(country => <Country country={country} 
            handleVisitedCountry={handleVisitedCountry}
            handlerVisitedFlag={handlerVisitedFlag}
            
            ></Country>)

           }
           </div>
        </div>
    );
};

export default Countries;