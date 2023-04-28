import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env';
// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '7e49911ec3mshf5d35e03a23353cp1e35a6jsna502d5825576',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query }
      };

      const FetchData = async()=>{
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
          setError(error)
            alert('There is an error',error);
            console.log(error);
        }finally{
            setIsLoading(false)
        }
      }

      useEffect(()=>{
        FetchData();
      },[]);
      
      const refetch = ()=>{
        setIsLoading(true);
        FetchData();
      }
      return {data, isLoading,error,refetch}
}

export default useFetch;



