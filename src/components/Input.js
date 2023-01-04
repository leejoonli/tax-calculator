import React from 'react';
import { useState } from 'react';

const Input = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.match(/^[0-9]+$/) != null) {
            let temp = Number(input);
            if(temp <= 9325) {
                let bracket = temp *.01;
                props.setTaxOwed(bracket);
            } else if(temp <= 22107) {
                let bracket;
                temp -= 9325;
                bracket = (temp * .02) + 93.25;
                props.setTaxOwed(bracket);
            } else if(temp <= 34892) {
                let bracket;
                temp -= 22107;
                bracket = (temp * .04) + 348.89;
                props.setTaxOwed(bracket);
            } else if(temp <= 48435) {
                let bracket;
                temp -= 34892;
                bracket = (temp * .06) + 860.29;
                props.setTaxOwed(bracket);
            } else if(temp <= 61214) {
                let bracket;
                temp -= 48435;
                bracket = (temp * .08) + 1672.87;
                props.setTaxOwed(bracket);
            } else if(temp <= 312686) {
                let bracket;
                temp -= 61214;
                bracket = (temp * .093) + 2695.19;
                props.setTaxOwed(bracket);
            } else if(temp <= 375221) {
                let bracket;
                temp -= 312686;
                bracket = (temp * .103) + 26082.09;
                props.setTaxOwed(bracket);
            } else if(temp <= 625369) {
                let bracket;
                temp -= 375221;
                bracket = (temp * .113) + 32523.2;
                props.setTaxOwed(bracket);
            } else if(temp > 625370) {
                let bracket;
                temp -= 625369;
                bracket = (temp * .123) + 60789.92;
                props.setTaxOwed(bracket);
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="income">Income: </label>
                <input type="text" id="income" onChange={handleChange} value={input}/>
                <button type='submit'>Calculate</button>
            </form>
        </div>
    );
};

export default Input;