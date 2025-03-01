// Components

import Movies from "./movies/Movies"

import Shows from "./Shows/Shows"

import '../../src/App.css'

export default function Main() {

    return (

        <main>

            <div className="main_container">

                <Movies />

                <Shows />

            </div>

        </main>

    )
}