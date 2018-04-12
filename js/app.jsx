import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Footer from './components/Footer/';
import Header from './components/Header/';
import Main from './components/Main/';
require('.././styles/style.scss');
moment.locale('pl');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
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