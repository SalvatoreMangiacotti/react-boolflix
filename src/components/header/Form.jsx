// GlobalContext

import { useContext } from "react"

import GlobalContext from "../../contexts/GlobalContext"


// Axios

import axios from "axios";


// Hooks

import { useState } from "react";



export default function Form() {

    const { setMoviesData, setShowsData } = useContext(GlobalContext)

    const [userInput, setUserInput] = useState('');


    function getMoviesData() {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bd977f1c6ed262905b909c98b3187466&query=${userInput}`)

            .then(function (response) {

                const data = response.data.results;

                const filteredMovies = data.filter((movie) => movie.title.toLowerCase().includes(userInput.toLowerCase()));

                setMoviesData(filteredMovies);

            })
            .catch(function (error) {

                console.log(error);

            })

    }


    function getShowsData() {

        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=bd977f1c6ed262905b909c98b3187466&query=${userInput}`)

            .then(function (response) {

                const data = response.data.results;

                const filteredShows = data.filter((show) => show.name.toLowerCase().includes(userInput.toLowerCase()));

                setShowsData(filteredShows);

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

        getMoviesData();

        getShowsData();

    }


    return (


        <form

            onSubmit={handleFormSubmit}

            className="search_form"

        >

            <input

                type="text"

                placeholder="search"

                aria-label="search"

                name="search"

                onChange={handleUserInput}

            />

            <button> Search </button>

        </form>

    )

}