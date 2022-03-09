function Light (props) {
    const { status } = props
    const lightConfiguration = {
        alto:{
            colorClass:'bg-red'
        },
        siga:{
            colorClass:'bg-green'
        },
        precaucion:{
            colorClass:'bg-peru'
        }
    }
    return (
        <div className={`light ${lightConfiguration[status].colorClass}`}></div>
    )
}

export default Light