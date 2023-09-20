import {render} from 'react-dom';
import React from 'react'
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvider";


//document.body.innerHTML = `<div style="background: red">HELLO WORLD</div>`;
render(
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
