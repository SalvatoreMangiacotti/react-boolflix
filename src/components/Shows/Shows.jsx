// GlobalContext

import { useContext } from "react"

import GlobalContext from "../../contexts/GlobalContext"

// Components

import ShowCard from "./ShowCard"



export default function Shows() {

    const { showsData } = useContext(GlobalContext)


    return (

        <ul>

            {

                showsData.map((show) =>

                    <ShowCard

                        key={show.id}

                        id={show.id}

                        name={show.name}

                        original_name={show.original_name}

                        original_language={show.original_language}

                        vote={show.vote_average}

                        overview={show.overview}

                    />

                )

            }

        </ul>

    )

}