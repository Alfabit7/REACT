import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './temperatureConverter.css'
import { useState } from 'react';

function TemperatureConverter() {
    const [labelCelsius, setLabelCelsius] = useState('temperature Celsius');
    const [labelFahrenheit, setlabelFahrenheit] = useState(' temperature Fahrenheit');

    const [valueCelsius, setValueCelsius] = useState('');
    const [valueFahrenheit, setValueFahrenheit] = useState('');


    const convertToFahrenheit = (e) => {
        setValueCelsius(e.target.value)
        const temperature = (e.target.value * 9 / 5 + 32).toFixed(2);
        setValueFahrenheit(temperature)
        if (e.target.value == '') {
            setlabelFahrenheit('temperature Fahrenheit');
            setValueFahrenheit('');
        }
    }

    const convertToCelsius = (e) => {
        setValueFahrenheit(e.target.value);
        const temperature = ((e.target.value - 32) / 1.8).toFixed(2);
        setValueCelsius(temperature);
        if (e.target.value == '') {
            setLabelCelsius('temperature Celsius');
            setValueCelsius('');
        }
    }

    const resetInput = () => {
        setValueCelsius('');
        setLabelCelsius('temperature Celsius');
        setlabelFahrenheit('temperature Fahrenheit');
        setValueFahrenheit('');

    }

    return (
        <div className='container'>
            <h1>Converter temperature</h1>
            <div className='temperature'>
                <TextField value={valueCelsius} id="outlined-basic" label={labelCelsius} variant="outlined" onChange={convertToFahrenheit} />
                <TextField value={valueFahrenheit} id="outlined-basic" label={labelFahrenheit} variant="outlined" onInput={convertToCelsius} />
                <Button variant="contained" onClick={resetInput}>Reset input</Button>
            </div>
        </div>
    );
}

export default TemperatureConverter;