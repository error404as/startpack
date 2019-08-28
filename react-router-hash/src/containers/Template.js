import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Routes from '../routes';

class Template extends Component {
    render() {
        return (

            <HashRouter>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/page"}>Page</Link></li>
                    <li><Link to={"/content"}>Content</Link></li>
                    <li><Link to={"/content/wer"}>Content: wer</Link></li>
                </ul>
                <Routes />
            </HashRouter>

        )
    }
}
export default Template;