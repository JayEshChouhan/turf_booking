
import React, { Component } from 'react';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import MyPagination from '../utils/pagination';
import { Checkbox, RangeSlider, SelectPicker } from 'rsuite';
import Icon from '../utils/icons';
import { faList, faSearch, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import TurfBox from '../components/turf/turf';


class Turfs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [115, 500],
            sortBy: [
                {
                    "label": "Name",
                    "value": "Name",
                    "role": "Master"
                },
                {
                    "label": "Price",
                    "value": "Price",
                    "role": "Master"
                },
                {
                    "label": "Ratings",
                    "value": "Ratings",
                    "role": "Master"
                }
            ]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    }
    render() {
        return (
            <div className='product_main_wrapper'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='product_filters'>
                                <Card>
                                    <Card.Header>Search Turf</Card.Header>
                                    <Card.Body>
                                        <div className='search_box'>
                                            <input type={"search"} placeholder="search..." name='turf_search' />
                                            <button><Icon icon={faSearch} /></button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>Price</Card.Header>
                                    <Card.Body>
                                        <RangeSlider
                                            className='rangeSlider'
                                            progress
                                            min={100}
                                            max={1000}
                                            style={{ marginTop: 10, marginBottom: 10 }}
                                            value={this.state.value}
                                            onChange={value => {
                                                this.setState({ value: value })
                                            }}
                                        />

                                        <p style={{ marginTop: 8, display: "inline-block" }}>Price:- ${this.state.value[0]} to ${this.state.value[1]}</p>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>Sports</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li><Checkbox> Cricket</Checkbox></li>
                                            <li><Checkbox> Table Tannis</Checkbox></li>
                                            <li><Checkbox> Football</Checkbox></li>
                                            <li><Checkbox> Volleyball</Checkbox></li>
                                            <li><Checkbox> Badminton</Checkbox></li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='filtered_products'>
                                <Tab.Container id="turf" defaultActiveKey="grid">
                                    <div className="menu_filter bg_class">
                                        <Row className='align-items-center m-0'>
                                            <Col md={5} xs={12}>
                                                <div className="select_sort">
                                                    <label>Sort by:</label>
                                                    <SelectPicker placeholder="Sort By" data={this.state.sortBy} searchable={false} style={{width:'100%',maxWidth: 160}}/>
                                                </div>
                                            </Col>
                                            <Col md={2} xs={4}>
                                                <Nav variant="pills" className="grid_tab" as={"ul"}>
                                                    <li><Nav.Link eventKey="grid"><Icon icon={faThLarge}/></Nav.Link></li>
                                                    <li><Nav.Link eventKey="list"><Icon icon={faList}/></Nav.Link></li>
                                                </Nav>
                                            </Col>
                                            <Col md={5} xs={8}>
                                                <div className="product_info">
                                                    <p>Showing 1-15 of 66 Total</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="grid">
                                            <Row className='row-gap'>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                                <Col lg={4}><TurfBox /></Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="list">
                                            <Row className='row-gap'>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                                <Col lg={12}><TurfBox list="turf_list_box"/></Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>

                                <MyPagination totalItems={450} itemsCount={10} className="center mt-5" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Turfs;