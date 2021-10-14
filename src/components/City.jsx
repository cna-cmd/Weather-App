import React from 'react';
import './City.css';

export default function City({city}) {
  if(!city){
    return <div>City not found</div>
  }
  return (
    <div className="ciudad">
      <div className="container">
        <h4>{city.name}</h4>
        <div className="info">
          <div>Temperature: {city.temp} ºC</div>
          <div>Clime: {city.weather}</div>
          <div>Wind: {city.wind} km/h</div>
          <div>Amount of clouds: {city.clouds}</div>
          <div>Latitude: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  )
}