import React, {Component} from 'react';
import axios from 'axios';

import Helpers from '../services/helpers';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        axios.get('/api/data').then((res)=>{
            this.setState({ data: res.data || [] })
        });
    }

    render() {
        return (
            <div>
                <h1>H1: {this.state.data.title}</h1>
                <p>p: {this.state.data.text}</p>
            </div>
        )
    }
}

export default Home;