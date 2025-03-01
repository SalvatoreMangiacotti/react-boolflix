// GlobalContext

import GlobalContext from "../contexts/GlobalContext";

// useState

import { useState } from "react";

// Components

import Header from "../components/header/Header";

import Main from "../components/Main";


function DefaultLayout() {

    const [moviesData, setMoviesData] = useState([]);

    const [showsData, setShowsData] = useState([]);

    return (

        <GlobalContext.Provider

            value={

                { moviesData, setMoviesData, showsData, setShowsData }

            }

        >

            <Header />

            <Main />

        </GlobalContext.Provider>

    )

}

export default DefaultLayout;