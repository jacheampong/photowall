import React from 'react'
import PropTypes from 'prop-types'

export default function Photo (props) {

    const photo = props.photo
    return(<figure className="figure">
        <img className="photo" src={photo.imageLink} alt={photo.description} />
        <figcaption><p>{photo.description}</p></figcaption>
        <div className="button-container">
            <button onClick={() => {props.removePhoto(photo)}} className="button">Remove</button>
        </div>
        
    </figure>)
    
}

// Adding typechecking on the props for component
Photo.propTypes = {
    photo: PropTypes.object.isRequired,
    removePhoto: PropTypes.func.isRequired
}
