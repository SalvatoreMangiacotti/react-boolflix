export default function MovieCard(props) {

    const { id, poster, title, original_title, original_language, vote, overview } = props;

    return (

        <div className="card" key={id}>

            {poster ? (<img src={`https://image.tmdb.org/t/p/w342/${poster}`} />) :

                (<p>Image not Found</p>)

            }

            <div className="card_content">

                <p>

                    <strong>Titolo:</strong>

                    {title}

                </p>

                <p>

                    <strong>Titolo originiale:</strong>

                    {original_title}

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