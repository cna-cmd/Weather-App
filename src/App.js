import React, { useState } from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import './App.css';

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = process.env.API_KEY_WEATHER;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        //significa que estas intentando agregar un elemento que ya existe
        const cityExists = cities.filter(city => city.id === ciudad.id);
        if(cityExists.length > 0){
           alert ("La ciudad ya existe");
        }else {
            setCities(oldCities => [...oldCities, ciudad]);
        }     
      }else {
        alert("Ciudad no encontrada");
      }
    });
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  return (
    <div className="App">
      {/* quien debe ejecutar la función onSearch no es el Nav sino el SearchBar */}
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/> 
    </div>
  );
}
