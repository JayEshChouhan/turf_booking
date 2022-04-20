import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import DatePicker from 'rsuite/DatePicker';
import 'rsuite/dist/rsuite.min.css'


export default function UserProfile() {
    return (
        <>
            <div className="profile-page">
                <div className='container'>
                    <h2>My Account</h2>
                    <div className='row '>
                        <div className='col-sm-3'>
                            <div className="account-details">
                                <div className='user-category'>
                                    <button className='category-btn'>Personal Details</button>
                                    <br />
                                    <button className='category-btn'>Your Bookings</button>
                                    <br />
                                    <button className='category-btn'>Settings </button>
                                    <br />
                                    <label className='logout' >Logout</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='myprofile'>
                                <h5>My Profile</h5>
                            </div>
                            <div className="user-profile">
                                <div className="user-details">
                                    <div className="row">
                                        <div className="personalDetails">
                                            <h4>Personal Details</h4>
                                        </div>
                                        <div className="profile-pic">
                                            <ImageUploader />
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}