import { useState, useEffect } from 'react';

const MouseMovement = () => {
  const [tiro, setTiro] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {

      setTiro({ x: e.clientX, y: e.clientY });

    };

    window.addEventListener('mousemove', handleMouseMove);


    return () => {

      window.removeEventListener('mousemove', handleMouseMove);

    };
    
  }, []);

  return (
    <>
      <p>Mouse Moved To X: {tiro.x}</p>

      <p>Mouse Moved To Y: {tiro.y}</p>
    </>
  );
};

export default MouseMovement;
