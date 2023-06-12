import PropTypes from 'prop-types'
//rafc shortcut
export const FirstApp = ( {title, subtitle, name} ) => {
 
    return (
        <>
            <h1> {title} </h1>       
            <p> { subtitle } </p>
            <p> { name } </p>
        </>
    )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    // title: "no hay titulo",
    subtitle: "No hay subtitulo",
    name: "Piero Jacinto"
}