import React, {Component} from 'react'
import Title from './components/Title'
import Photos from './components/Photos'
import './main.css'
import {Posts} from './model/Posts'
import AddPhoto from './components/AddPhoto'
import {Link, Route} from 'react-router-dom'
import {removePost} from './redux/actions'

export default class Main extends Component {

    // called before component is mounted
    constructor() {
        super()

        console.log('constructor ...')
    }

    render() {
        console.log('render ...')
        console.log(this.props)
        return (
            <div>
                <h1> 
                    <Link to="/"> Photwall </Link> 
                </h1>
                <Route path="/" exact render={() => (
                    <div>
                        {/* <Title name={'Photowall'} /> */}
                        <Photos {...this.props} />
                    </div>
                )} />

                <Route path="/AddPhoto" exact render={({history}) => (
                    <AddPhoto {...this.props} />
                )} />

            </div>
        )
    }

}