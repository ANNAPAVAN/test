import React, { useState } from 'react';
import axios from 'axios';

const Lab6 = () => {

  const [cityName, setCityName] = useState('');
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');
  const apiKey = '53e9863170d1b0e0bf7a4634a9f6f29d'; 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        )
        console.log(response.data.name)
        setPressure(response.data.main.pressure)
        setHumidity(response.data.main.humidity)
    }catch(err){
       
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <label>City Name</label>
            <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
            <button type="submit">Submit</button>
      </form>
      <p>Pressure: {pressure}</p>
      <p>Humidity: {humidity}</p>  
    </div>
  );
};

export default Lab6;