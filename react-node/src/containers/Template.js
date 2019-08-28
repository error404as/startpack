import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../routes';


class Template extends Component {

    constructor(props) {
        super(props)
        this.state = { isLoading: true };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }
    
    render() {
        if(this.state.isLoading){
            return <p>Loading..</p>
        }

        return (
            <Router>
                <div className="b-content">
                    <Routes />
                </div>
            </Router>
        )
    }
}

Template.displayName = 'Template';

export default Template;
