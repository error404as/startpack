import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lists: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        axios.get('/api/lists').then((res)=>{
            console.log(res.data)
            this.setState({
                lists: res.data || [],
                isLoading: false
            });
        });
    }

    render() {
        if(this.state.isLoading) {
            return <Loader />
        }

        return (
            <ul>
                {this.state.lists.map((el, ind) => (
                    <li key={ind}><Link to={"/list/"+el}>List {el}</Link></li>
                ))}
                <li><Link to={"/404/"}>Page 404</Link></li>
            </ul>
        )
    }
}

Home.displayName = 'Home';

export default Home;
