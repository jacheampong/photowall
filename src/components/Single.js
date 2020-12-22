import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.find((post) => post.id === id)
        if (this.props.loading === true) {
            return <div className="loader"> ... loading </div>
        } else if (post) {
            return(
                <div className='single-photo'>
                    <Photo photo={post} {...this.props} index={index} id={id} />
                    <Comments 
                        startAddingComment={this.props.startAddingComment} 
                        addComment={this.props.addComment} 
                        comments={comments} 
                        id={id} 
                    />
                </div>
            )
        } else {
            return <div> <h1>No Post found!</h1></div>
        }
        
    }
}