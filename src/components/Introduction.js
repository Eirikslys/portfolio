import React, { useState } from 'react';
import './Introduction.css'
import { useEffect } from 'react';

const Introduction = ({english}) => {
  const [text, setText] = useState('I am a self-taught boot camp graduate from Oslo. I am looking for opportunities to expand my knowledge and get to the next level as a developer.')

  useEffect(() => {
    !english ?
      setText('Jeg er en selvlært utvikler fra Oslo. Jeg ser etter muligheter for å utvikle meg og komme til neste nivå som en utvikler.')
      :
      setText('I am a self-taught boot camp graduate from Oslo. I am looking for opportunities to expand my knowledge and get to the next level as a developer.')
  }, [english])
  
  return (
    <div className="introduction-container">
      <div className="introduction-heading-container">
      </div>
      <div className="introduction-text-container">
        <h2 className="introduction-text">
          {text}
        </h2>
      </div>
    </div>
  );
}
export default Introduction