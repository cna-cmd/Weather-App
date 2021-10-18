import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './City.css';

export default function City({ city }) {
  let history = useHistory();
  if (!city) {
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
          <div>Clouds: {city.clouds}</div>
          <div>Latitude: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
          <Link to="/">
             <div className="cards">
                <button className="btn"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  ✔
                </button>
             </div>
          </Link>
        </div>
      </div>
    </div>
  )
}