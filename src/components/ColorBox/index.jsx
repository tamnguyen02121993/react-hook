import React, { useState } from 'react';
import './ColorBox.scss';

const colors = ['deeppink', 'green', 'yellow', 'black', 'blue']
function randomColor() {
    const randomIndex = Math.trunc(Math.random() * 5);
    return colors[randomIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('color-box') || 'deeppink';
    })

    function handleOnClick() {
        const newColor = randomColor();

        setColor(newColor);
        localStorage.setItem('color-box', newColor)
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={handleOnClick}>
        </div>
    );
}

export default ColorBox;