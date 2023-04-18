import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [uno, setUno] = useState(false);
  const [dos, setDos] = useState(false);

  useEffect(() => {
    // Se ejecuta despues de montarse el componente y en cada cambio de estado
    console.log("Sin dependencias");
  });

  useEffect(() => {
    // Se ejecuta sólo despues de montarse el componente
    console.log("Array de dependencias vacías");
  }, []);

  useEffect(() => {
    // Se ejecuta despues de montarse el componente y en cada cambio de estado de dependencias
    console.log("Con dependencias");
  }, [uno]);

 /* useEffect(() => {
    // Función de limpieza
    document.addEventListener('click', alert());
    return () => document.removeEventListener('click', alert());
  });*/

  return (
    <>
      <button onClick={() => setUno(prev => !prev)}>Cambiar estado "uno"</button>
      <button onClick={() => setDos(prev => !prev)}>Cambiar estado "dos"</button>
    </>
  );
}

export default App;
