import React, {useState, useEffect} from 'react';
import ImageLoad from './Animacao';
import Home from './Home';
  
  
export default function App () {
  
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  return isLoading ?
  
    
    <ImageLoad isLoading={isLoading}/> :
    <div className="App">
      {<Home isLoading={isLoading}/>}
    </div>
}