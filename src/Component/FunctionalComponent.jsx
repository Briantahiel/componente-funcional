import React, { useState, useEffect } from 'react'

const FunctionalComponent = () => {
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("Martín");
    const [apellidos, setApellidos] = useState("San José");
  
  useEffect(() => {
    const timerID = setInterval(() => {
        tick();
    }, 1000)
  
    return () => {
      clearInterval(timerID)
    };
  }, []);

  function tick(){
    setFecha(new Date());
    setEdad((edad) => edad + 1);
  }
  
  return (
    <div>
        <h2>Hora Actual: {fecha.toLocaleString()}</h2>
        <h3>{nombre} {apellidos}</h3>
        <h1>Edad: {edad}</h1>
    </div>
  );
}

export default FunctionalComponent
