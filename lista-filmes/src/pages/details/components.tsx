import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0;
   
    h1{
        margin: 3rem 0;
        
    }

    .movie-poster {
        width: 500px;
        border-radius: 1rem;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;


    }
    .details {
        display: flex;
        flex-direction: column;
        align-items: flex start;
        margin-left: 4rem;
        max-width: 50%;
    }
    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%
        trasition: 0.3s;
    }
     button:hover{
        backhground: #5846c2;
        
     }

    span{
        line-heigh: 130%;
        margin-botton: 1rem;
        font-size: 110%;
    }

    .release-date{
        opacity:0.5;
    }
    .backdrop{
        object-fit:cover;
        z-index: -1;
        position: absolute;
        top: 0px;
        left: 0px;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        opacity: 0.6;
        width:150%
    }



`


