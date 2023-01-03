import React from 'react';
import { useState, useEffect } from 'react';

const Input = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.text.push(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={input}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Input;