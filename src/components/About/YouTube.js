import React from 'react'
import PropTypes from "prop-types"

const YouTube = ({id}) => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/RGFJr6RVst0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                         </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

YouTube.propTypes = {
    id: PropTypes.string.isRequired,
}

export default YouTube