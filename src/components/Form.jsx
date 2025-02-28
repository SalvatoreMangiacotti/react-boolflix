// GlobalContext

import { useContext } from "react"

import GlobalContext from "../contexts/GlobalContext"


// Axios

import axios from "axios";


// Hooks

import { useState } from "react";



export default function Form() {

    const { moviesData, setMoviesData } = useContext(GlobalContext)

    const [userInput, setUserInput] = useState('');


    function getData() {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bd977f1c6ed262905b909c98b3187466&query=${userInput}`)

            .then(function (response) {

                const data = response.data.results;

                setMoviesData(data);

                console.log(response);

            })
            .catch(function (error) {

                console.log(error);

            })

    }


    function handleUserInput(event) {

        const input = event.target.value;

        setUserInput(input);

    }


    function handleFormSubmit(event) {

        event.preventDefault();

        getData();

        const filterMovies = moviesData.filter((movie) => movie.title.includes(userInput));

        console.log(filterMovies);

    }


    return (


        <form

            onSubmit={handleFormSubmit}

            className="search_movies"

        >

            <input

                type="text"

                placeholder="search"

                aria-label="search movies"

                name="search"

                onChange={handleUserInput}

            />

            <button

            // onClick={}

            > Search </button>

        </form>

    )

}