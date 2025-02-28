// GlobalContext

import { useContext } from "react"

import GlobalContext from "../contexts/GlobalContext"

// Components

import MovieCard from "./MovieCard"



export default function Movies() {

    const { moviesData } = useContext(GlobalContext)


    return (

        <ul>

            {

                moviesData.map((movie) =>

                    <MovieCard

                        key={movie.key}

                        title={movie.title}

                        original_title={movie.original_title}

                        vote={movie.vote_average}

                        overview={movie.overview}

                    />

                )

            }

        </ul>

    )

}