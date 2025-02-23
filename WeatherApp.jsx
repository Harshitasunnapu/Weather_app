import React, { useState } from 'react'

const WeatherApp = () => {
    const [city,setCity]=useState("");
    const [result,setResult]=useState("");

    const handleCity=(e)=>{
        setCity(e.target.value);
    }
    const submitHandler=e=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            res=>res.json()).then(data=>{
                const kelvin=data.main.temp;
                const celcius=kelvin-273.15;
                setResult(Math.round(celcius))
            })
    }

  return (
    <div>
        <h1>Weather App</h1><br/>
        <form onSubmit={submitHandler}>
            <input type='text' name='city' value={city} onChange={handleCity}/><br/><br/>
            <input type='submit' value="Temperature "/><br/><br/>
            <h1>Temperature of {city} is {result}   &#8451;</h1>
        </form>
    </div>
  )
}

export default WeatherApp
