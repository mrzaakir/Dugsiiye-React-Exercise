import {useState, useEffect} from "react";

const Salam = () => {

    const [magac, setMagac] = useState(''); 

    const [salam, setSalam] = useState('hello');

    useEffect (()=>{

       if(!magac){
        document.title = 'Salam! ';

       }else{
        document.title = `${salam} ${magac}`;
       }
      
    }, [magac,salam]);

    return(
        
        <>
            <h1>Type To Change The Title..!</h1>

            <h2>Enter Your Name:</h2>
            <input type="text" value={magac} onChange={(e)=> setMagac(e.target.value)} />

            <h2>Choose Greating:</h2>
            <input type="text" value={salam} onChange={(e)=> setSalam(e.target.value)} />
            
        </>
    );
};

export default Salam;