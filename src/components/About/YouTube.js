import React from 'react'
import PropTypes from "prop-types"

const YouTube = ({id}) => {
    return(
        <div className="video-container">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/RGFJr6RVst0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
           
        </div>
    )
}

YouTube.propTypes = {
    id: PropTypes.string.isRequired,
}

export default YouTube