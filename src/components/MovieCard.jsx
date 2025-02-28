export default function MovieCard(props) {

    const { id, title, original_title, vote, overview } = props;

    return (

        <li key={id}>

            <h2>{title}</h2>

            <h3>{original_title}</h3>

            <span>{vote}</span>

            <p>{overview}</p>

        </li>

    )

}