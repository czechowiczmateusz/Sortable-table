import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Header from './components/Header/';
import Main from './components/Main/';
import data from "./../db/dane";
moment.locale('en');
import * as styles from './../styles/style.scss'

const App = () => {
    return (
        <div className="container">
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