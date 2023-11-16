import React, { useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=895284fb2d2c50a520ea537456963d9c&units=metric`



  const searchLocation = (event) => {
    // if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        
      })
      // setLocation('')
    // }
  }
  // searchLocation();
  //  async function getloc(){
  //   let url2='https://ipinfo.io/json?token=1bb41baec727e2'
  //   let response= await fetch(url2)
  //   let data2= await response.json()
  //   setLocation(data2.city)
  // }
  // getloc();
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          <button className='btn' onClick={searchLocation} type="submit"><i className="fa fa-search"></i></button>
      </div>
      <div className='error'>{data? "": "No data"}</div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          {/* toFixed converts a int to string */}
          <div className='temp'>
            <h3>{data.main ? <h1>{(data.main.temp).toFixed()}°C</h1> : null}</h3>
            <div className='minmax'>
              {data.main ? <span>Minimum: <p className='bold'>{ data.main.temp_min}°C</p> </span>: null}
              {data.main ? <span>Maximum:<p className='bold'> { data.main.temp_max}°C</p></span>: null}
            </div>
          </div>
          
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;