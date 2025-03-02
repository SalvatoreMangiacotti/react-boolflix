export default function ShowCard(props) {

    const { id, poster, name, original_name, original_language, vote, overview } = props;


    return (

        <div className="card" key={id}>

            {poster ? (<img src={`https://image.tmdb.org/t/p/w342/${poster}`} />) :

                (<p>Image not Found</p>)
            }

            <div className="card_content">

                <p>

                    <strong>Titolo:</strong>

                    {name}

                </p>

                <p>

                    <strong>Titolo originale:</strong>

                    {original_name}

                </p>

                <span className={`fi fi-${original_language}`} alt={`Language country flag : ${original_language}`}></span>

                <p>

                    <strong>Voto:</strong>

                    {vote}

                </p>

                <p className="overview">

                    <strong>Overview:</strong>

                    {overview}

                </p>

            </div>

        </div>

    )

}