import React from 'react';

export default class ClasComp extends React.Component {

    state = {font: 'black', back: 'white'};

    render () {

        let myStyle = {
            color: this.state.font,
            background: this.state.back
        };

        const handleStyle = (event) => {
            let val = event.target.value;
            if(val === 'dark') {this.setState({font:'white', back:'black'}); return;}
            if(val === 'light') {this.setState({font:'black', back:'white'}); return;}
            if(val === 'grey') {this.setState({font:'black', back:'grey'});}
        };

        return (
            <div className="funcComp">
                <button onClick={handleStyle} value='dark'>Dark</button>
                <button onClick={handleStyle} value='light'>Light</button>
                <button onClick={handleStyle} value='grey'>Grey</button>
                <br />
                <textarea style={myStyle} name="text" id="text" cols="30" rows="5" defaultValue={this.props.text}>
                </textarea>
            </div>
        )
    }
}