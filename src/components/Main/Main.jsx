import React from 'react';
import moment from "moment";
import data from "./../../../db/dane.json"
moment.locale('pl');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currentPage: 1,
            usersPerPage: 5
        };
    }

    handlePages = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    };

    handleNext = () => {
        this.state.currentPage === 2 ? this.setState({currentPage: 1}) : this.setState({currentPage: this.state.currentPage + 1})
    };

    handleBack = () => {
        this.state.currentPage === 1 ? this.setState({currentPage: 2}) : this.setState({currentPage: this.state.currentPage - 1})
    };

    handleSortIdAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(a.id < b.id) { return -1; }
            if(a.id > b.id) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortIdDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(a.id > b.id) { return -1; }
            if(a.id < b.id) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    handleSortFirstNameAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(a.firstName < b.firstName) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortFirstNameDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(a.firstName > b.firstName) { return -1; }
            if(a.firstName < b.firstName) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    handleSortLastNameAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(a.lastName < b.lastName) { return -1; }
            if(a.lastName > b.lastName) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortLastNameDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(a.lastName > b.lastName) { return -1; }
            if(a.lastName < b.lastName) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    handleSortBirthDateAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(moment(a.dateOfBirth, 'DD.MM.YYYY HH:mm').format() < moment(b.dateOfBirth, 'DD.MM.YYYY HH:mm').format()) { return -1; }
            if(moment(a.dateOfBirth, 'DD.MM.YYYY HH:mm').format() > moment(b.dateOfBirth, 'DD.MM.YYYY HH:mm').format()) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortBirthDateDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(moment(a.dateOfBirth, 'DD.MM.YYYY HH:mm').format() > moment(b.dateOfBirth, 'DD.MM.YYYY HH:mm').format()) { return -1; }
            if(moment(a.dateOfBirth, 'DD.MM.YYYY HH:mm').format() < moment(b.dateOfBirth, 'DD.MM.YYYY HH:mm').format()) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    handleSortCompanyAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(a.company < b.company) { return -1; }
            if(a.company > b.company) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortCompanyDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(a.company > b.company) { return -1; }
            if(a.company < b.company) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    handleSortNoteAsc = () => {
        let sortedAsc = this.state.data.sort(function(a, b) {
            if(a.note < b.note) { return -1; }
            if(a.note > b.note) { return 1; }
            return 0
        });
        this.setState({
            data: sortedAsc
        })
    };

    handleSortNoteDesc = () => {
        let sortedDesc = this.state.data.sort(function(a, b) {
            if(a.note > b.note) { return -1; }
            if(a.note < b.note) { return 1; }
            return 0
        });
        this.setState({
            data: sortedDesc
        })
    };

    render() {
        const left = '<';
        const right = '>';
        const { data, currentPage, usersPerPage } = this.state;
        const lastPage = currentPage * usersPerPage;
        const firstPage = lastPage - usersPerPage;
        const currentUsers = data.slice(firstPage, lastPage);
        const renderUsers = currentUsers.map((user) => {
            return <tr key={user.id}>
                <td className="number">{user.id}</td>
                <td className="firstname">{user.firstName}</td>
                <td className="lastname">{user.lastName}</td>
                <td className="date">{moment(user.dateOfBirth, 'DD.MM.YYYY HH:mm').format('LL')}</td>
                <td className="company">{user.company}</td>
                <td className="note">{user.note}</td>
            </tr>
        });

        const numbers = [];
        for (let i = 1; i <= Math.ceil(data.length / usersPerPage); i++) {
            numbers.push(i);
        }

        const renderPagination = numbers.map(number => {
            return (
                <li className={number === this.state.currentPage ? "controls controls-active" : "controls"} key={number} id={number} onClick={this.handlePages}>
                    {number}
                </li>
            );
        });

        return (
            <main>
                <table>
                    <thead>
                    <tr>
                        <th className="number">iD <div className="arrows"><div onClick={this.handleSortIdAsc} className="arrow-up"></div><div onClick={this.handleSortIdDesc} className="arrow-down"></div></div></th>
                        <th className="firstname">First name <div className="arrows"><div onClick={this.handleSortFirstNameAsc} className="arrow-up"></div><div onClick={this.handleSortFirstNameDesc} className="arrow-down"></div></div></th>
                        <th className="lastname">Last name <div className="arrows"><div onClick={this.handleSortLastNameAsc} className="arrow-up"></div><div onClick={this.handleSortLastNameDesc} className="arrow-down"></div></div></th>
                        <th className="date">Birth date <div className="arrows"><div onClick={this.handleSortBirthDateAsc} className="arrow-up"></div><div onClick={this.handleSortBirthDateDesc} className="arrow-down"></div></div></th>
                        <th className="company">Company <div className="arrows"><div onClick={this.handleSortCompanyAsc} className="arrow-up"></div><div onClick={this.handleSortCompanyDesc} className="arrow-down"></div></div></th>
                        <th className="note">Note <div className="arrows"><div onClick={this.handleSortNoteAsc} className="arrow-up"></div><div onClick={this.handleSortNoteDesc} className="arrow-down"></div></div></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderUsers}
                    </tbody>
                </table>
                <ul className="pagination">
                    <li className="lt" onClick={this.handleBack}>{left} back</li>
                    {renderPagination}
                    <li className="rt" onClick={this.handleNext}>next {right}</li>
                </ul>
            </main>
        );
    }
}

export default Main


