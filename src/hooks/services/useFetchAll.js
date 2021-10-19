import { useState, useEffect } from "react";

export default function useFetchAll(urls){
    const[isActive, setIsActive]= useState(true);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      //if (isActive){
      const promises = urls.map((url) =>
        fetch('https://fakestoreapi.com/' + url).then((response) => {
          if (response.ok) return response.json();
          throw response;
        })
      );
  
      Promise.all(promises)
        .then((json) => {
          setData(json)
          setIsActive(false)
        }
          )
        .catch((e) => {
          console.error(e);
          setError(e);
        })
        .finally(() => setLoading(false));
  //  }
  }, []);
  
      return { 
        data,
        loading, 
        error 
    };
}