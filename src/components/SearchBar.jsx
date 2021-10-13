import React, { useState } from "react";
import "./SearchBar.css"

// recibe  la función como parámetro y la ejecuta cuando se hace un submit del form
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  return (
    <form className="cnt" onSubmit={(e) => {
      e.preventDefault();
      // reemplaza el valor fijo por el que ingresa el usuario
      onSearch(city);
      setCity('');
    }}>
      {/* Input tipo texto */}
      <input
        className="itxt"
        type="text"
        placeholder="City..."
        value={city}
        // detecta el cambio en el input y actualiza dicho estado
        onChange={e => setCity(e.target.value)}
      />
      {/* Input tipo botón */}
      <input className="ibtn" type="submit" value="Search" />

    </form>
  );
}
