import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div>

                <h1>
                    Content
                    {this.props.match.params.id ? `: ${this.props.match.params.id}` : ''}
                </h1>
                
            </div>
        )
    }
}

export default Content;