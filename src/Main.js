import React, {Component} from 'react'
import Photos from './components/Photos'
import './main.css'
import AddPhoto from './components/AddPhoto'
import {Link, Route} from 'react-router-dom'
import Single from './components/Single'

export default class Main extends Component {

    state = {
        loading: true
    }
    
    componentDidMount() {
        this.props.loadPostFromDB()
            .then(() => {
                this.setState({
                    loading: false
                })
            })
        this.props.startLoadingComments()
    }

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

                <Route path="/single/:id" render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params} />
                )} />

            </div>
        )
    }

}