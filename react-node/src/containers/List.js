import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
        };
    }

    render() {        
        return (
            <React.Fragment>
                <h1>The List - {this.props.match.params.id}</h1>
                <Link to={"/"}>Back Home</Link>
            </React.Fragment>
        )
    }
}

List.displayName = 'List';

export default List;
