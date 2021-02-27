import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      // console.log(data);
    })
  }, [])
  return (
    <div className='App'>
      <h3>Country Loaded: {countries.length}</h3>
      <ul>
        {
          countries.map(country => <Country country = {country}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
