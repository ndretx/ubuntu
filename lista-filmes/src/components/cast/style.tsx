export const nada="";
import { useEffect, useState } from "react";
import styled from "styled-components";





export const CastList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
   

`
export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    

    img{
        width: 100px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        margin-top: 1rem;
        
        
    }
    span{
        font-weight: w400;
        font-size: 100%;
        text-align: center;
        

    }
 
    
`