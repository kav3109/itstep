import React from 'react';

export default class ClasComp extends React.Component {

    state = {clicked: false};

    render () {

        const handleQuote = () => {
            this.setState({clicked: true})
        };

        return (
            <div className="funcComp">
                {!this.state.clicked && (
                    <button onClick={handleQuote}>Quote</button>
                )}
                {this.state.clicked && (
                    <div>
                        <h1>{this.props.author}</h1>
                        <p style={{fontStyle: "italic"}}>"Be or not to be"</p>
                    </div>
                )}
            </div>
        )
    }
}