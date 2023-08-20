import React, { useState } from 'react';
import HeaderImage from '../../components/header/HeaderImage';
import DemoFooter from '../../components/footer/DemoFooter';
import TextField from "@mui/material/TextField";
import List from './List';

export default function TextPage() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <List input={inputText} />
        </div>
    );
}