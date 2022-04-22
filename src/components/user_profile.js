import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import DatePicker from 'rsuite/DatePicker';
import 'rsuite/dist/rsuite.min.css'
import { Link } from "react-router-dom";
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TabContainer from 'react-bootstrap/TabContainer'
import TurfBox from './turf/turf';


export default function UserProfile() {
    return (
        <>
            <div className="profile-page">
                <Container >
                    <h3>My Account</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="personaldetails">
                        <Row>
                            <Col sm={3}>
                                <div className="account-details">
                                    <div className="profile-pic text-center">
                                        <ImageUploader className="m-auto" />
                                        <h4>Jayesh Chouhan</h4>
                                    </div>
                                    <div className='user-category'>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link className="details-opt" eventKey="personaldetails">Personal Details</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="mybookigns">My Bookings </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link><label className='logout user-category' >Logout</label>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="personaldetails">
                                        <PersonalDetails />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="mybookigns">
                                        <MyBookings />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>

            </div>
        </>
    )
}

export function PersonalDetails() {
    return (
        <>

            <div className='myprofile'>
                <h5>My Profile</h5>
            </div>
            <div className="user-profile">
                <div className="user-details">
                    <div className="row">
                        <div className="personalDetails">
                            <h4>Personal Details</h4>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="field">
                                    <input type="text" id="First Name" name="First Name" required />
                                    <label htmlFor="First Name">First name</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <input type="text" id="Last Name" name="Last Name" required />
                                    <label htmlFor="Last Name">Last name</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <input type="tel" id="Phone" name="Phone" required />
                                    <label htmlFor="Phone">Phone Number</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <DatePicker block className="dob" format='dd/MM/yyyy' placeholder="Date Of Birth" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <input type="email" id="Email" name="Email" required />
                                    <label htmlFor="Email">Email</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <input type="text" id="ocupation" name="ocupation" required />
                                    <label htmlFor="ocupation">Ocupation</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="savebtn">
                                    <button type="submit" className="main_btn send-btn">
                                        <span className="btn-text">Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export function MyBookings() {
    return (
        <>


            <div className='myprofile'>
                <h5>Bookings</h5>
            </div>
            <div>
                <div className='row row-gap'>
                    <div className='col-lg-12'>
                        <TurfBox list={'turf_list_box'} bookinglist={'bookingsList'}/>  
                        <TurfBox list={'turf_list_box'} bookinglist={'bookingsList'}/>  
                        <TurfBox list={'turf_list_box'} bookinglist={'bookingsList'}/>  
                        <TurfBox list={'turf_list_box'} bookinglist={'bookingsList'}/>  
                        <TurfBox list={'turf_list_box'} bookinglist={'bookingsList'}/>  
                    </div>
                </div>
            </div>

        </>
    )
}