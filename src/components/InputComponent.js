import React from 'react';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import  logo from '../logo/google_logo.png';
import './InputComponent.css';

const InputComponent = ({input , setInput , findWeather}) => {

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleClick = (event) => {
          event.preventDefault();
          findWeather();
    }

    return (
        <div className="inputBox">
            <div className="inputBox_field">
                <h1>Google Weather App</h1>
                <p>Powered By <a href="https://www.facebook.com/anjhehheue" target="new">Diamond Bell</a></p>
                <img src={logo} alt="logo" />
                <form> 
                    <Input placeholder="Enter you city name" onChange={handleChange} value={input} />
                    <br />
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Search</Button>
                </form>
            </div>
        </div>
    )
}

export default InputComponent
