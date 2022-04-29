import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import DatePicker from 'rsuite/DatePicker';
import 'rsuite/dist/rsuite.min.css'
import profileImg from '../images/user/profile.png'
import Icon from '../utils/icons';
import TurfBox from './turf/turf';


export default function UserProfile() {
    const [images, setImages] = useState([{data_url: profileImg}]);
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <div className="profile-page">
                <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="personaldetails">
                        <div className='row '>
                            <div className='col-sm-3'>
                                <div className="account-details">
                                    <div className='userProfile'>
                                        <div className="profile-pic">
                                        <ImageUploading
                                            value={images}
                                            onChange={onChange}
                                            dataURLKey="data_url"
                                            acceptType={['jpg', 'gif', 'png']}
                                        >
                                            {
                                                ({
                                                    imageList,
                                                    onImageUpdate,
                                                    onImageRemove,
                                                }) => (
                                                    <div className="uploader__container">
                                                        <img 
                                                            src={imageList[0]['data_url']} 
                                                            alt="" 
                                                            width="100" 
                                                            height="100"
                                                        />
                                                        <div className="imguplode_btn-wrapper">
                                                            <button className='updateBtn' onClick={() => onImageUpdate(0)}><Icon icon={faCamera}/></button>
                                                            {profileImg==imageList[0]['data_url']?'':<button className='removeBtn' onClick={() =>  setImages([{data_url: profileImg}])}><Icon icon={faXmark}/></button>}
                                                            
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </ImageUploading>
                                        </div>
                                        <div className='profile-name'>
                                            <h4>Jayesh Chouhan</h4>
                                        </div>
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
                                                <Nav.Link eventKey="settings">Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <div className='logout'>Logout</div>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="personaldetails">
                                        <div className="user-profile">
                                            <div className="user-details">
                                                <div className="row">
                                                    <div className="personalDetails">
                                                        <h4>Personal Details</h4>
                                                    </div>
                                                    
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="field">
                                                                <input type="text" placeholder='First Name' id="First Name" name="First Name" required />
                                                                <label htmlFor="First Name">First name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="field">
                                                                <input type="text" placeholder='Last Name' id="Last Name" name="Last Name" required />
                                                                <label htmlFor="Last Name">Last name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="field">
                                                                <input type="tel" placeholder='Phone Number' id="Phone" name="Phone" required />
                                                                <label htmlFor="Phone">Phone Number</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className='field'>
                                                                <DatePicker block format='dd/MM/yyyy' id='dob' placeholder="Date Of Birth" />
                                                                <label htmlFor="dob">Date of Birth</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="field">
                                                                <input type="email" placeholder='Enter Email' id="Email" name="Email" required />
                                                                <label htmlFor="Email">Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="field">
                                                                <input type="text" placeholder='Ocupation' id="ocupation" name="ocupation" required />
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="mybookigns">
                                    <div className="user-profile">
                                            <div className="user-details">
                                                <div className="row">
                                                    <div className="personalDetails">
                                                        <h4>Bookings</h4>
                                                    </div>
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
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="settings">
                                        {/* <MyBookings /> */}
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </Container>
            </div>
        </>
    )
}