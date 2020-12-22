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
        console.log(post)
        return(<div className='single-photo'>
            <Photo photo={post} {...this.props} index={index} />
            <Comments addComment={this.props.addComment} comments={comments} id={id} />
        </div>)
    }
}