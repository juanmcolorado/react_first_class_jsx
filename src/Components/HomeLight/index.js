function HomeLight ( props ) {
    const { estaPrendido } = props
    return (
        <div className="home-light-bulb" style={{
            backgroundColor: estaPrendido ? 'yellow' : 'darkgray'
          }}></div> 
    )
}

export default HomeLight