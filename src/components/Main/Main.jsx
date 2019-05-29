import React, { useState, useMemo } from 'react'
import moment from 'moment';
moment.locale('pl');

const Main = ({ dataProps }) => {
    const [data, setData] = useState(dataProps);
    const [field, setField] = useState(null);
    const [direction, setDirection] = useState(null);

    const sortedAsc = useMemo(() => {
        if (!field) return data;
        if (field === 'id' || field === 'note') {
            return data.slice().sort((a, b) => a[field] - b[field]);
        } else if (field === 'dateOfBirth') {
            return data.slice().sort((a, b) => {
                if (moment(a[field], 'DD.MM.YYYY HH:mm').format() < moment(b[field], 'DD.MM.YYYY HH:mm').format()) {
                    return -1;
                }
                if (moment(a[field], 'DD.MM.YYYY HH:mm').format() > moment(b[field], 'DD.MM.YYYY HH:mm').format()) {
                    return 1;
                }
                return 0;
            })
        } else {
            return data.slice().sort((a, b) => a[field].localeCompare(b[field]));
        }
    }, [data, field]);

    const sortedDesc = useMemo(() => {
        if (!field) return data;
        if (field === 'id' || field === 'note') {
            return data.slice().sort((a, b) => b[field] - a[field]);
        } else if (field === 'dateOfBirth') {
            return data.slice().sort((a, b) => {
                if (moment(b[field], 'DD.MM.YYYY HH:mm').format() < moment(a[field], 'DD.MM.YYYY HH:mm').format()) {
                    return -1;
                }
                if (moment(b[field], 'DD.MM.YYYY HH:mm').format() > moment(a[field], 'DD.MM.YYYY HH:mm').format()) {
                    return 1;
                }
                return 0;
            })
        } else {
            return data.slice().sort((a, b) => b[field].localeCompare(a[field]));
        }
    }, [data, field]);

    const sortedData = useMemo(() => {
        if(!direction) return data;
        if (direction) {
            return sortedAsc
        } else {
            return sortedDesc
        }
    }, [data, direction]);

    return (
        <main>
            <table>
                <thead>
                <tr>
                    <th className="number">iD
                        <div className="arrows">
                            <div onClick={() => {
                                setField('id');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('id');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                    <th className="firstname">First name
                        <div className="arrows">
                            <div onClick={() => {
                                setField('firstName');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('firstName');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                    <th className="lastname">Last name
                        <div className="arrows">
                            <div onClick={() => {
                                setField('lastName');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('lastName');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                    <th className="date">Birth date
                        <div className="arrows">
                            <div onClick={() => {
                                setField('dateOfBirth');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('dateOfBirth');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                    <th className="company">Company
                        <div className="arrows">
                            <div onClick={() => {
                                setField('company');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('company');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                    <th className="note">Note
                        <div className="arrows">
                            <div onClick={() => {
                                setField('note');
                                setDirection(true)
                            }} className="arrow-up"/>
                            <div onClick={() => {
                                setField('note');
                                setDirection(false)
                            }} className="arrow-down"/>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td className="number">{user.id}</td>
                            <td className="firstname">{user.firstName}</td>
                            <td className="lastname">{user.lastName}</td>
                            <td className="date">{moment(user.dateOfBirth, 'DD.MM.YYYY HH:mm').format('LL')}</td>
                            <td className="company">{user.company}</td>
                            <td className="note">{user.note}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </main>
    );
};

export default Main


