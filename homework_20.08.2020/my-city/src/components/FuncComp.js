import React, {useState} from 'react';

export default function FuncComp() {

    const [color, setColor] = useState('black');
    const [background, setBackground] = useState('white');

    let myStyle = {
        color: color,
        background: background
    };

    const handleStyle = (event) => {
        let val = event.target.value;
        if(val === 'dark') {setColor('white'); setBackground('black'); return;}
        if(val === 'light') {setColor('black'); setBackground('white'); return;}
        if(val === 'grey') {setColor('black'); setBackground('grey'); return;}
    };

    return (
        <div className="funcComp">
            <button onClick={handleStyle} value='dark'>Dark</button>
            <button onClick={handleStyle} value='light'>Light</button>
            <button onClick={handleStyle} value='grey'>Grey</button>
            <br />
            <textarea style={myStyle} name="text" id="text" cols="30" rows="5" defaultValue="function component"></textarea>
        </div>
    )
}