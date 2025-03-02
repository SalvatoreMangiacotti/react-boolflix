// GlobalContext

import { useContext } from "react"

import GlobalContext from "../../contexts/GlobalContext"

// Components

import ShowCard from "./ShowCard"



export default function Shows() {

    const { showsData } = useContext(GlobalContext)


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

            {showsData.length > 0 &&

                <>

                    <h2>Series</h2>

                    <div className="cards_container">

                        {

                            showsData.map((show) =>

                                <ShowCard

                                    key={show.id}

                                    id={show.id}

                                    poster={show.poster_path}

                                    name={show.name}

                                    original_name={show.original_name}

                                    original_language={show.original_language}

                                    vote={voteStars(show.vote_average)}

                                    overview={show.overview}

                                />

                            )

                        }

                    </div>

                </>

            }

        </>

    )

}