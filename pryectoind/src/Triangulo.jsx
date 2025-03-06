import React, { useState } from 'react';

const Triangulo = () => {
  // Estados para la base, altura y resultado
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  // Función para calcular el área del triángulo
  const calcularArea = () => {
    if (base && altura) {
      const area = (parseFloat(base) * parseFloat(altura)) / 2;
      setResultado(area);
    } else {
      setResultado(null); // En caso de que los valores no sean válidos
    }
  };

  return (
    <div>
      <h1>Calculadora de Área de un Triángulo</h1>
      <div>
        <label>Base:</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          placeholder="Ingresa la base"
        />
      </div>
      <div>
        <label>Altura:</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ingresa la altura"
        />
      </div>
      <button onClick={calcularArea}>Calcular Área</button>

      {resultado !== null && (
        <div>
          <h3>El área del triángulo es: {resultado}</h3>
        </div>
      )}
    </div>
  );
};

export default Triangulo;
