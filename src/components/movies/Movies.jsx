// GlobalContext

import { useContext } from "react"

import GlobalContext from "../../contexts/GlobalContext"

// Components

import MovieCard from "./MovieCard"



export default function Movies() {

    const { moviesData } = useContext(GlobalContext)


    function voteStars(vote_average) {

        const newVoteValue = Math.floor(vote_average / 2);

        let starsArray = [];

        for (let i = 0; i < 5; i++) {

            starsArray.push(starsArray < newVoteValue ? <i className="fa-solid fa-star" key={i}></i> : <i className="fa-regular fa-star" key={i}></i>);

        }

        return starsArray;

    }


    return (

        <>

            <h2>Movies</h2>


            <div className="movies_cards">

                {

                    moviesData.map((movie) =>

                        <MovieCard

                            key={movie.id}

                            id={movie.id}

                            poster={movie.poster_path}

                            title={movie.title}

                            original_title={movie.original_title}

                            original_language={movie.original_language}

                            vote={voteStars(movie.vote_average)}

                            overview={movie.overview}

                        />

                    )

                }

            </div>

        </>

    )

}