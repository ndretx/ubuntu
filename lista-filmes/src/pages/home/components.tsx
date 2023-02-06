import styled from "styled-components";


export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;

    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
   

`
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    

    img{
        width: 120px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        margin-top: 1rem;
        
        
    }
    span{
        font-weight: w400;
        font-size: 120%;
        text-align: center;
       
        

    }
    a{
        transition: all 0.3s;

    }
    
    
    a:hover{
        transform: scale(1.1);
    


    }
`