
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_IMAGE, API_KEY, API_URL } from "../../config/api.keys";
import { CastItem, CastList } from "./style";




export default function Cast(){
const[cast, setCast]=useState<any[]>([])
const{id}= useParams();

useEffect(() =>{
fetch(`${API_URL}/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
.then(response => response.json())
.then(data => setCast(data.cast))
},[])


    return(
        <div>
            <h1>Cast</h1>
                <CastList>
                    {
                           cast.map(person =>{
                            return(
                                <CastItem>
                                    <img src={`${API_IMAGE}${person.profile_path}`} alt={person.name}/>
                                    <span>{person.name}</span>
                                </CastItem>

                            )
                        })
                    }
                   
                </CastList>

        </div>
    );
}



