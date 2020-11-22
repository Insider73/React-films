import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import useAPI from "../../services/getApi"
import Loader from "../../components/Loader/Loader"
import MovieCard from '../../components/MovieCard/MovieCard'
import './MainPage.scss'

const MainPage = () => {
    const getData = useAPI()
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const loadTrands = async () => {
            const trands = await getData.getTrands()
            console.log(trands)
            setLoading(false)
            if (trands.results) {
                setMovie(trands.results)
            } else {
                setHasError(true)
            }
        }
        loadTrands()
    }, [])

    if (hasError) {
        return <Redirect to='/error' />
    }

    return (
        <div className='main-page'>
            {loading ? <Loader /> : (
                <ul className='main-page_list'>
                    {movie.map(movie => (
                        <li className='main-page_item' key={movie.id}>
                            <MovieCard movie={movie} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MainPage