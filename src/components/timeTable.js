import { axios } from 'axios';
import React, { Component } from 'react';
import DataTable from '../utils/dataTable';

class TimeTable extends Component {
    constructor(props) {
        super(props);

    }

    async componentWillMount() {
       
    }

    async componentDidMount() {
        await axios.get('https://hudle.in/pages/Box-Cricket-Grounds-Mumbai').then(response => console.log(response));
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <section className="mainTimeTable">
                <div className="heading text-center">
                    <h2>TURF</h2>
                    <h4>EVENTS & TIMETABLE</h4>
                </div>
                <div className='time_table'>
                    <DataTable/>
                </div>
            </section>
        );
    }
}


export default TimeTable;