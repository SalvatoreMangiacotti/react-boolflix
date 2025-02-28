// GlobalContext

import { useContext } from "react"

import GlobalContext from "../contexts/GlobalContext"



export default function Movies() {

    const { moviesData } = useContext(GlobalContext)


    return (

        <ul>

            {

                moviesData.map((movie) =>

                    <li key={movie.id}>

                        <h2>{movie.title}</h2>

                    </li>

                )

            }

        </ul>

    )

}