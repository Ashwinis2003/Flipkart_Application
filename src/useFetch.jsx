import { useState, useEffect } from 'react';


function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchdata = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();

            setData(result)
            setLoading(false)
        } catch (err) {
            setError(err.message);
        }
        
    }

    useEffect(() => {

        fetchdata()

    }, [])

    return {
        data, loading, error
    };
}

export default useFetch;