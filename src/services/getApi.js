const useAPI = () => {
    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=b053893c60b6a8589b9ba5f4d8904596')
        return await response.json()
    }

    const getTrands = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=b053893c60b6a8589b9ba5f4d8904596')
        return await response.json()
    }

    return {
        getMovies,
        getTrands
    }
}

export default useAPI
