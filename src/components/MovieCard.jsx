export default function MovieCard(props) {

    const { id, title, original_title, original_language, vote, overview } = props;

    return (

        <li key={id}>

            <h2>{title}</h2>

            <h3>{original_title}</h3>

            <span className={`fi fi-${original_language}`} alt={`Flag Country ${original_language}`}></span>

            <span>{vote}</span>

            <p>{overview}</p>

        </li>

    )

}