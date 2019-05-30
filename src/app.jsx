import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Header from './components/Header/';
import Main from './components/Main/';
import data from "./../db/dane";
moment.locale('en');
import { jsx, css, Global } from '@emotion/core';
import mainFont from './../fonts/OpenSans-Regular.ttf'

const App = () => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #5831fc;
                height: 100vh;
                padding-bottom: 5%;
            `}
            className="container">
            <Global styles={css`
                    @font-face {
                        font-family: OpenSans;
                        src: url(${mainFont});
                    }
                    * {
                        margin: 0;
                        padding: 0;
                        border: 0;
                        box-sizing: border-box;
                        font-family: OpenSans, serif;
                    }
            `}/>
            <Header/>
            <Main dataProps={data}/>
        </div>
    )
};

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});