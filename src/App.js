import React, {Component} from 'react'
import Title from './components/Title'
import Photos from './components/Photos'
import './main.css'
import {Posts} from './model/Posts'
import AddPhoto from './components/AddPhoto'
import {Route} from 'react-router-dom'

export default class App extends Component {

    // invoked immediately after a component is mounted
    // update state with initial objects fetched
    // Perfect place to fetch data. It gets called after render
    componentDidMount() {
        this.setState({
            posts: Posts,
            screen: 'photos', // photos, addPhoto
        })
        console.log('componentDidMount ...')
    }

    // called when the state of a component changes
    // Perfect place to update UI or make network calls 
    // based on previous state before update, and current state
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ...')
        console.log(prevProps)
        console.log(prevState.posts)
        console.log(this.state.posts)
    }
    
    // called before component is mounted
    constructor() {
        super()
        this.state = {
            posts: []
        }
        console.log('constructor ...')
    }

    render() {
        console.log('render ...')
        console.log(this.state.posts)
        return (
            <div>
                <Route path="/" exact render={() => (
                    <div>
                        <Title name={'Photowall'} />
                        <Photos 
                            photos={this.state.posts}
                            removePhoto={this.removePhoto}
                        />
                    </div>
                )} />

                <Route path="/AddPhoto" exact render={({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        console.log(addedPost)
                        this.addPhoto(addedPost)
                        history.push('/')
                    }} />
                )} />

            </div>
        )
    }

    // method remove object passed from state object 
    removePhoto = (photo) => {
        console.log("In removePhoto ... ", photo.description)
        // remove photo and update state
        let newPost = this.state.posts.filter(post => post !== photo)
        this.setState({
            posts: newPost
        })

    }

    addPhoto = (postSubmitted) => {
        console.log('In addPhoto ...')
        this.setState({
            posts: this.state.posts.concat([postSubmitted])
        })

    }

}