

function Article (props) {
        /*
            Nombre Koder,
            Genereacion,
            Status: curso, egresado, recursado
        */
    return(
        <article>
            <h2>{props.koderName}</h2>
            <h5>{props.generation}</h5>
            <span>{props.status}</span>
        </article>
    )
}

export default Article