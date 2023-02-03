
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cast from '../../components/cast';
import { API_IMAGE, API_KEY, API_URL } from '../../config/api.keys';
import { Container } from './components';

export default function Details(){
    const [selectedMovies, setSelectedMovies] = useState<any>({});

    const{id} = useParams();
    // useState é um "Hook"
    const img_path = "https://image.tmdb.org/t/p/w500"
    useEffect(()=>{
        // consumir a api
        fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=pt-BR`)
        
        //  fetch buscando informação em .src/config/api.keys.tsx
            .then(response => response.json())
            .then(data => setSelectedMovies(data))
            // parametros "Arrow Functions"

    },[id])



    return (
        <Container>
            <div>
                <img className='backdrop' src={`${API_IMAGE}${selectedMovies.backdrop_path}`} alt='Texto qualquer'/>
                <div className="movie">
                    <img className="movie-poster" src={`${API_IMAGE}${selectedMovies.poster_path}`} alt="Texto qualquer"  />
                    <div className="details">
                        <h1>{selectedMovies.title}</h1>
                        <span>Sinopse: {selectedMovies.overview} </span>
                        <span className='release-date'>Data de liberaçao:{selectedMovies.release_date}</span>
                       
                        <Link to= "/"> <button>Voltar</button> </Link>

                    </div>

                </div>
            </div>
            <Cast></Cast>
        </Container>

    )


}