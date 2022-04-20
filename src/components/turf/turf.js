import Icon from "../../utils/icons";
import { faArrowRight, faLocationDot, faPercentage, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";


export default function TurfBox(props){
    return(
        <>
            <div className={`turf_box ${props.list?props.list:''}`}>
                <div className="turfImage">
                    <img src="https://media.hudle.in/venues/9405b0b4-7896-48a6-98ba-dff2fdde6fb9/photo/bfc7baad869229b4ed12cd4974bb931d6114d630" className="img-fluid" alt="card2-img" />
                    <a href="javascript:;" className="share-icon">
                        <Icon icon={faShareAlt} />
                    </a>
                </div>
                <div className="turfDetails">
                    <div className="cardOffer">
                        <div className="offerBox">
                            <div className="icon">
                                <Icon icon={faPercentage} />
                            </div>
                            <div className="text">
                                5% OFF
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="title-head text-truncate">
                            Battlefield by Reyes | Kandivali
                        </h2>
                        <div className="info-content">
                            <div className="info-content-address">
                                <Icon icon={faLocationDot} className="icon" />
                                <p className="text">
                                    Mumbai
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rating-section">
                        <div className="info-left">
                            <p className="rating" style={{ color: 'rgb(103, 105, 109)', marginBottom: 0 }}>
                                Ratings
                            </p>
                            <div className="rating-text-style">
                                <ReactStars
                                    count={5}
                                    onChange={(newRating)=>{
                                        console.log(newRating);
                                    }}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="info-right">
                            <span className="info-text" style={{ color: 'rgb(71, 76, 81)' }}>
                                ₹750
                            </span>
                            <span className="card2-title" style={{ color: 'rgb(103, 105, 109)' }}>
                                onwards
                            </span>
                        </div>
                    </div>
                    <div className="gameIcons">
                        <div className="gameIcons-left-items">
                            <a className="gameIcons-item">
                                <img className="img-fluid" src="https://media.hudle.in/sports/24/photo" alt="sport-icon"/>
                            </a>
                            <a className="gameIcons-item">
                                <img className="img-fluid" src="https://media.hudle.in/sports/8/photo" alt="sport-icon"/>
                            </a>
                        </div>
                        <a className="arrow-box">
                            <Icon icon={faArrowRight}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}