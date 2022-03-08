import './styles.scss'

function Card (props) {
    const {children, background} = props
    return <div className="card"
    style={{
        background: background
    }}
    >{children}</div>
}

export default Card