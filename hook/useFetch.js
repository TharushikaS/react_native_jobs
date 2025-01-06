import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
        params: { ...query},
        headers: {
          'x-rapidapi-key': '467bd91a57mshd2dc0a717d507dep1a711ejsnaaa9a5e9c1bd' ,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };


    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }
      
      
    useEffect(() => {
        fetchData();
    }, []);
            
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error , refetch };
}

export default useFetch;