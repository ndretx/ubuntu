import { Container, Movie, MovieList } from "./components";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/api.keys";

export default function Home(){
    const [movies, setMovies] = useState<any[]>([])
    const img_path = "https://image.tmdb.org/t/p/w500"
    useEffect(()=>{
        // consumir a api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
        // fetch(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`) fetch buscando informação em .src/config/api.keys.tsx
            .then(response => response.json())
            .then(data => setMovies(data.results))

    },[])
   
  
    return(
        <Container>
            <h1>Movies</h1>
                <MovieList>
                    {
                        movies.map(movie =>{
                            return(
                                <Movie>
                                    <a href="#"><img src={`${img_path}${movie.poster_path}`} alt={movie.title}/> </a>
                                    {/* <a href="#"><img src={`${API_IMAGE)}${movie.poster_path}`} alt={movie.title}/> </a> */}
                                    <span>{movie.title}</span>
                                </Movie>

                            )
                        })
                    }
                   
                </MovieList>
        </Container>
    )   
}