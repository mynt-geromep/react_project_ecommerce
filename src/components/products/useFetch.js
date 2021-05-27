import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const abortCont = new AbortController(); //useEffect cleanup

        fetch(url, {signal : abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not Fetch the Data for that Resource")
                }
                return res.json()
            })
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
            .catch(err => {
                if (err.name === "AbortError") { 
                    console.log('Fetch Aborted')
                } else { // Network / Server Error
                    setLoading(false)
                    setError(err.message)
                }
            })

        return () => abortCont.abort();
    }, [url])

    return {product, loading, error}
}
 
export default useFetch;