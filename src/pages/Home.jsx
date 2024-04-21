import { useEffect, useState } from 'react'
import {GetTrendings} from '../components/services/themoviebd-api'
export const Home = () => {
    const [trendings, setTrendings] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchTrendings = async () => {
            try {
                setIsLoading(true)
                const moviesFetch = await GetTrendings()
                // console.log(moviesFetch.results)
                setTrendings(moviesFetch.results)
            } catch (error) {
                setError(error)
            }finally {
                setIsLoading(false)
            }  
        }
         fetchTrendings().then(data=>console.log(data))
     
    }, [])
    
    console.log(trendings)
    return (
        <>
        <h1>Trending today</h1>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        </>
    )
}