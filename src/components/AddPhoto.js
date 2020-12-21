import React, {Component} from 'react'

export default class AddPhoto extends Component {

    render() {
        return(
            <div>
                <h1>Add New Photo</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button> POST </button>
                    </form>
                </div>
                
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.link.value)
        console.log(event.target.description.value)
        const imageLink = event.target.elements.link.value
        const description = event.target.description.value

        // changing id to new
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
        }

        if(imageLink && description) {
            this.props.onAddPhoto(post)
        }

    }
}