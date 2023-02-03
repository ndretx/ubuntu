import { Container, Movie, MovieList } from "./components";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/api.keys";
import { Link } from "react-router-dom";
import { CastItem } from "../../components/cast/style";

export default function Home(){
    const [movies, setMovies] = useState<any[]>([])
    // useState é um "Hook"
    const img_path = "https://image.tmdb.org/t/p/w500"
    useEffect(()=>{
        // consumir a api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
        // fetch(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`) fetch buscando informação em .src/config/api.keys.tsx
            .then(response => response.json())
            .then(data => setMovies(data.results))
            // parametros "Arrow Functions"

    },[])
   
  
    return(
        <Container>
            <h1>Movies</h1>
                <MovieList>
                    {
                        movies.map(movie =>{
                            return(
                                <Movie>
                                    <Link to={`/details/${movie.id}`} ><img src={`${img_path}${movie.poster_path}`} alt={movie.title}/> </Link>
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