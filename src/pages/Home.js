import Banner from "../components/home/Banner";
import Navbar from "../components/home/Navbar";
import { useState, useEffect } from "react";

function Home(){
    const [names, setNames] = useState(['kite'])
    
    useEffect(()=>{
        setNames(prevItems => [...prevItems, 'john'])

    }, [])
    return(
        <div>
            {console.log(names)}
 <Banner/>

     </div>
       
    );
}
export default Home;