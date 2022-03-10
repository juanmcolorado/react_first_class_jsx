function Card (props) {
    return (
        <div className="card" 
        style={{
            backgroundColor: props.color
        }}
        >
            <img src="" alt="" />
            <h2>{props.title}</h2>
            <span>{props.text}</span>
            <button>Learn More</button>
        </div>
    )
}


export default Card