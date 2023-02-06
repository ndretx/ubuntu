import { Container, Movie, MovieList } from "./components";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config/api.keys";
import { Link } from "react-router-dom";
import { CastItem } from "../../components/cast/style";

export default function Home(){
    const [movies, setMovies] = useState<any[]>([])
    // useState é um "Hook"
    const img_path = "https://image.tmdb.org/t/p/w500"
    useEffect(()=>{
        // consumir a api
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        // fetch(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`) fetch buscando informação em .src/config/api.keys.tsx
            .then(response => response.json())
            .then(data => setMovies(data.results))
            // parametros "Arrow Functions"

    },[])
   
  
    return(
        <Container>
            <h1>Pokedex</h1>
                <MovieList>
                    {
                        movies.map(pokemon =>{
                            const pokeId = pokemon.url.split('/')
                            return(
                                <Movie>
                                   <Link to={`/details/${pokeId[6]}`}>
                                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId[6]}.svg`} alt={pokemon.name}/>
                                     
                                    <span>{pokemon.name}</span>
                                    </Link>
                                </Movie>

                            )
                        })
                    }
                   
                </MovieList>
                
        </Container>
    )   
}