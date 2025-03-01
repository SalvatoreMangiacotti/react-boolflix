export default function ShowCard(props) {

    const { id, poster, name, original_name, original_language, vote, overview } = props;

    return (

        <div className="card" key={id}>

            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />

            <h2>{name}</h2>

            <h3>{original_name}</h3>

            <span className={`fi fi-${original_language}`} alt={`Language country flag : ${original_language}`}></span>

            <span>{vote}</span>

            <p>{overview}</p>

        </div>

    )

}