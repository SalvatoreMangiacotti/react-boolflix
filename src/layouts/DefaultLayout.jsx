// GlobalContext

import GlobalContext from "../contexts/GlobalContext";

// useState

import { useState } from "react";

// Components

import Header from "../components/Header";

import Main from "../components/Main";



function DefaultLayout() {

    const [moviesData, setMoviesData] = useState([]);

    return (

        <GlobalContext.Provider

            value={

                { moviesData, setMoviesData }

            }

        >

            <Header />

            <Main />

        </GlobalContext.Provider>

    )

}

export default DefaultLayout;