import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Photo (props) {
    const photo = props.photo
    return(<figure className="figure">
            <Link to={`/single/${photo.id}`} > 
                <img className="photo" src={photo.imageLink} alt={photo.description} /> 
            </Link>
            <figcaption><p>{photo.description}</p></figcaption>
            <div className="button-container">
                <button onClick={() => {
                    props.startRemovePost(props.index, photo.id)
                    props.history.push('/')
                }} className="button"> Remove </button>
                <Link className="button" to={`/single/${photo.id}`} > 
                    <div className="comment-count">
                        <div className="speech-bubble"> </div>
                        {props.comments[photo.id] ? props.comments[photo.id].length : 0}
                    </div>
                </Link>
            </div>
        
    </figure>)
    
}

// Adding typechecking on the props for component
// Photo.propTypes = {
//     photo: PropTypes.object.isRequired,
// }
