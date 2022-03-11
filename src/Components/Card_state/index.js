import './styles.scss'

function Card (props) {
    const {children, background, className} = props
    return <div className={`card ${className}`}
    style={{
        background: background 
    }}
    >{children}</div>
}

export default Card