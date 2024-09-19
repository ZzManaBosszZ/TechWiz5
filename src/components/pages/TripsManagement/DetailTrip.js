import Layout from "../../layouts";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Reason from "../../layouts/Reason";
import TripPlan from "./TripPlan";
import ExpenseReview from "./ExpenseReview";

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
            <section class="main-banner inner-banner overlay back-image" style={{ backgroundImage: "url(/assets/images/tour-detail-banner.jpg)" }}>
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 class="h1-title">{TripDetail.destination}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main-tour-detail pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-side">
                                <div class="tour-detail-tabbing">
                                    <ul class="nav nav-tabs wow fadeup-animation" id="myTab" role="tablist" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="true"><i class="fas fa-info-circle"></i>Information</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tour-plan-tab" data-toggle="tab" href="#tour-plan" role="tab" aria-controls="tour-plan" aria-selected="false"><i class="fas fa-book-open"></i>Tour Plan</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="location-tab" data-toggle="tab" href="#location" role="tab" aria-controls="location" aria-selected="false"><i class="fas fa-map-marker-alt"></i>Location</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="gallery-tab" data-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false"><i class="fas fa-camera-retro"></i>Gallery</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false"><i class="fas fa-credit-card"></i>Expense Trip</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content wow fadeup-animation" id="myTabContent" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                                            <div class="tab-box information-tab-box">
                                                <div class="row">
                                                    <div class="col-xl-9 col-lg-9">
                                                        <div class="tour-title">
                                                            <h2 class="h2-title">Information of Trip to {TripDetail.destination}</h2>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3 col-lg-3">
                                                        <div class="tour-price-wp">
                                                            <div class="tour-price">
                                                                <h3 class="h3-title">${TripDetail.budget}</h3>
                                                                <p>Budget</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tour-short-info-box">
                                                    <ul>
                                                        <li>
                                                            <i class="fas fa-clock"></i>
                                                            <span class="text">{TripDetail.startDate && TripDetail.endDate ? `${calculateDuration(TripDetail.startDate, TripDetail.endDate)} days` : 'N/A'}</span>
                                                        </li>
                                                        <li>
                                                            <i class="fas fa-user-friends"></i>
                                                            <span class="text">{TripDetail.groupSize} People</span>
                                                        </li>
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i>
                                                            <span class="text">{TripDetail.destination}</span>
                                                        </li>
                                                        <li>
                                                            <i class="fas fa-sun"></i>
                                                            <span class="text">
                                                                {TripDetail.categories.length > 0 ? (
                                                                    TripDetail.categories.map((cat, index) => (
                                                                        <span key={index}>{cat.name}{index < TripDetail.categories.length - 1 ? ', ' : ''}</span>
                                                                    ))
                                                                ) : 'No Categories'}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div class="row no-gutters tour-gallery-slider">
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image1.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image1.jpg)" }}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image2.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image2.jpg)" }}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image3.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image3.jpg)" }}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image4.jpg" style={{ backgroundImage: "url(/assets/images/tour-gallery-slide-image4.jpg)" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TripPlan/>

                                        <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab">
                                            <div class="tab-box location-tab-box">
                                                <h2 class="h2-title"><span>Tour Location</span></h2>
                                                <div class="tour-location mb-30">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280118.507895455!2d73.72914987943841!3d20.771144269653607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1608024603420!5m2!1sen!2sin" width="100" height="450" style={{ border: "none !important;" }} allowfullscreen aria-hidden="false" tabindex="0"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                                            <div class="tab-box gallery-tab-box">
                                                <h2 class="h2-title">Make Your <span>Own Memories</span></h2>
                                                <div class="memories-gallery">
                                                    <div class="row">
                                                        <div class="col-lg-7">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image1.jpg" style={{ backgroundImage: "url(/assets/images/memories-gallery-image1.jpg)" }}></div>
                                                        </div>
                                                        <div class="col-lg-5">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image2.jpg" style={{ backgroundImage: "url(/assets/images/memories-gallery-image2.jpg)" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ExpenseReview/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-side">
                                <div class="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="line-title">
                                        <h4 class="h4-title">User Information</h4>
                                    </div>
                                    <div className="find-tour-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <label>Name</label>
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-user"></i></span>
                                                        <p className="form-input">
                                                            {TripDetail.user.email ? TripDetail.user.email.split('@')[0] : 'No Name Available'}
                                                        </p>
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label>Email</label>
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-user"></i></span>
                                                        <p className="form-input">
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