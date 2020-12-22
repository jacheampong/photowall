import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Photo (props) {
    const photo = props.photo
    return(<figure className="figure">
            <Link to={'single'} > 
                <img className="photo" src={photo.imageLink} alt={photo.description} /> 
            </Link>
            <figcaption><p>{photo.description}</p></figcaption>
            <div className="button-container">
                <button onClick={() => {
                    props.removePost(props.index)
                }} className="button"> Remove </button>
            </div>
        
    </figure>)
    
}

// Adding typechecking on the props for component
Photo.propTypes = {
    photo: PropTypes.object.isRequired,
}
