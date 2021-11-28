import { useState, useEffect } from "react";
import { Movie } from '../types/Movie'

const Filmes = () =>{

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        carregarMovies();
    }, [])

    // const carregarMovies = () => {
    //     fetch('https://api.b7web.com.br/cinema/')
    //         .then((response)=>{
    //             return response.json();
    //         })
    //         .then((json)=>{
    //             setMovies(json);
    //         })
    //     }

    const carregarMovies = async () => {
        setLoading(true);    
        let response = await fetch('https://api.b7web.com.br/cinema/');
        let json = await response.json();
        setLoading(false);
        setMovies(json);
    }

    return(
        <div>
             
             Filmes {movies.length}
            {loading && 
                <h1>Carregando...</h1>
            }

            <div className="grid grid-cols-6 gap-3">
                {movies.map((item, index)=>(
                    <div key={index}>
                        <img src={item.avatar} className="w-32 block"/>
                        {item.titulo}
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Filmes;