// GlobalContext

import { useContext } from "react"

import GlobalContext from "../../contexts/GlobalContext"

// Components

import MovieCard from "./MovieCard"



export default function Movies() {

    const { moviesData } = useContext(GlobalContext)


    return (

        <>

            {

                moviesData.map((movie) =>

                    <MovieCard

                        key={movie.id}

                        id={movie.id}

                        poster={movie.poster_path}

                        title={movie.title}

                        original_title={movie.original_title}

                        original_language={movie.original_language}

                        vote={movie.vote_average}

                        overview={movie.overview}

                    />

                )

            }

        </>

    )

}