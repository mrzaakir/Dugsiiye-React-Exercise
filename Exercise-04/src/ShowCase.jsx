import {useState} from "react";


const ShowCase = ()=>{
   
    const [isButtonOn, setIsButtonOn] = useState(false);

    const toggleButton = () => {

        setIsButtonOn(!isButtonOn);
    };


    return(
        <>
        
           {isButtonOn ? <p>The button is currently ON.</p> : <p>The button is currently OFF.</p>}
           <button onClick={toggleButton}>{isButtonOn ? 'Turn OFF' : 'Turn ON'}</button>

        </>
    )
}

export default ShowCase; 