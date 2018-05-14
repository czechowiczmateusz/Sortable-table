import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Header from './components/Header/';
import Main from './components/Main/';
require('.././styles/style.scss');
moment.locale('en');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <Main></Main>
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});