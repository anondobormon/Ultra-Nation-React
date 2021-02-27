import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    const { name, flag, capital } = props.country;
    return (
        <div className="country">
            <div className= 'details'>
                <h4>This is {name}</h4>
                <h3>Capital: {capital}</h3>
            </div>



            <img src={flag} alt="" />
        </div>
    );
};

export default Country;