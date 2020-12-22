import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Photos(props) {
    const photoList = props.posts
                    .sort((x, y) => { 
                        return y.id - x.id
                    })
                    .map((photo, index) => <Photo key={photo.id} photo={photo} index={index} {...props} />)
                
        return(
            <div>
                <Link className="addIcon" to="/AddPhoto" > </Link>
                <div className="photo-grid">
                    {photoList}
                </div>
            </div>
        )
}


// Adding typechecking on the props for component
Photos.propTypes = {
    posts: PropTypes.array.isRequired,
}