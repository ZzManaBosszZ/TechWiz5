import Layout from "../../layouts";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Reason from "../../layouts/Reason";
import TripPlan from "./TripPlan";
import ExpenseReview from "./ExpenseReview";
import Gallery from "./Gallery";

function TripDetail() {

    const { id } = useParams();

    const [TripDetail, setTripDetail] = useState({ user: {}, categories: [] });

    const loadData = useCallback(async () => {
        try {
            const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setTripDetail(tripDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const durationInMs = end - start; // Tính khoảng cách thời gian tính bằng milliseconds
        const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24)); // Chuyển đổi milliseconds sang ngày
        return durationInDays;
    };

    return (
        <Layout>
            <section className="main-banner inner-banner overlay back-image" style={{ backgroundImage: "url(/assets/images/tour-detail-banner.jpg)" }}>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 className="h1-title">{TripDetail.destination}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-tour-detail pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-side">
                                <div className="tour-detail-tabbing">
                                    <ul className="nav nav-tabs wow fadeup-animation" id="myTab" role="tablist" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="true"><i className="fas fa-info-circle"></i>Information</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tour-plan-tab" data-toggle="tab" href="#tour-plan" role="tab" aria-controls="tour-plan" aria-selected="false"><i className="fas fa-book-open"></i>Tour Plan</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="gallery-tab" data-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false"><i className="fas fa-camera-retro"></i>Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false"><i className="fas fa-credit-card"></i>Expense Trip</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content wow fadeup-animation" id="myTabContent" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div className="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                                            <div className="tab-box information-tab-box">
                                                <div className="row">
                                                    <div className="col-xl-9 col-lg-9">
                                                        <div className="tour-title">
                                                            <h2 className="h2-title">Information of Trip to {TripDetail.destination}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-3">
                                                        <div className="tour-price-wp">
                                                            <div className="tour-price">
                                                                <h3 className="h3-title">${TripDetail.budget}</h3>
                                                                <p>Budget</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tour-short-info-box">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-clock"></i>
                                                            <span className="text">{TripDetail.startDate && TripDetail.endDate ? `${calculateDuration(TripDetail.startDate, TripDetail.endDate)} days` : 'N/A'}</span>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-user-friends"></i>
                                                            <span className="text">{TripDetail.groupSize} People</span>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-map-marker-alt"></i>
                                                            <span className="text">{TripDetail.destination}</span>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-sun"></i>
                                                            <span className="text">
                                                                {TripDetail.categories.length > 0 ? (
                                                                    TripDetail.categories.map((cat, index) => (
                                                                        <span key={index}>{cat.name}{index < TripDetail.categories.length - 1 ? ', ' : ''}</span>
                                                                    ))
                                                                ) : 'No Categories'}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="row no-gutters tour-gallery-slider">
                                                    <div className="col-lg-4 p-0">
                                                        <div className="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image1.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image1.jpg)" }}></div>
                                                    </div>
                                                    <div className="col-lg-4 p-0">
                                                        <div className="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image2.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image2.jpg)" }}></div>
                                                    </div>
                                                    <div className="col-lg-4 p-0">
                                                        <div className="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image3.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image3.jpg)" }}></div>
                                                    </div>
                                                    <div className="col-lg-4 p-0">
                                                        <div className="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image4.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image4.jpg)" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TripPlan />

                                        {/* <div className="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab">
                                            <div className="tab-box location-tab-box">
                                                <h2 className="h2-title"><span>Tour Location</span></h2>
                                                <div className="tour-location mb-30">
                                                    
                                                </div>
                                            </div>
                                        </div> */}             
                                        <Gallery />                 
                                        <ExpenseReview />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-side">
                                <div className="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div className="line-title">
                                        <h4 className="h4-title">User Information</h4>
                                    </div>
                                    <div className="find-tour-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <label>Name</label>
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-user"></i></span>
                                                        <p className="form-input" style={{fontSize: '80%'}}>
                                                            {TripDetail.user.fullName ? TripDetail.user.fullName : 'No Email Available'}
                                                        </p>
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label>Email</label>
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-envelope"></i></span>
                                                        <p className="form-input" style={{fontSize: '80%'}}>
                                                            {TripDetail.user.email ? TripDetail.user.email : 'No Email Available'}
                                                        </p>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Reason />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default TripDetail;


