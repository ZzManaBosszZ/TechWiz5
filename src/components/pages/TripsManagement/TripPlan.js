import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function TripPlan() {

    const { id } = useParams();

    const [trip, setTrip] = useState({ expenses: [], categories: [] });

    const loadData = useCallback(async () => {
        try {
            const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setTrip(tripDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);



    return (
        <>
            <div className="tab-pane fade" id="tour-plan" role="tabpanel" aria-labelledby="tour-plan-tab">
                <div className="tab-box tour-plan-tab-box">
                    {/* modal */}
                    <div class="rb-comment-form">
                        <button
                            className={`sec-btn ${trip.categories.length === 0 ? 'center-btn' : 'top-right-btn'}`}
                            onClick={handleOpenModal}
                        >
                            <span>Create Expense</span>
                        </button>
                        {showModal && (
                            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Create Expense</h5>
                                            <button type="button" className="close" onClick={handleCloseModal}>
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <span className="form-control-span">
                                                            <input type="text" placeholder="Your Name" className="form-input" />
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <span className="form-control-span">
                                                            <input type="email" placeholder="Your Email *" required className="form-input" />
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <span className="form-control-span">
                                                            <input type="text" placeholder="Website" className="form-input" />
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="sec-btn "><span>Submit</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showModal && <div className="modal-backdrop fade show"></div>}
                    </div>


                    <div class="tour-timeline-box">
                        <div class="tt-box-number">1</div>
                        <div class="tt-box-content">
                            <h3 class="h3-title">Day 1: <span></span></h3>

                            <div class="tour-timetable-schedule mt-40 mb-40">
                                <ul>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Destination</h4>
                                        </div>
                                        <div class="tts-description">
                                            <a href="#">Greece</a>
                                        </div>
                                        <button class="edit-btn">Edit</button>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Departure</h4>
                                        </div>
                                        <div class="tts-description">
                                            Lorem Ipsum
                                        </div>
                                        <button class="edit-btn">Edit</button>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Departure Time</h4>
                                        </div>
                                        <div class="tts-description">
                                            9:15 AM To 9:30 AM.
                                        </div>
                                        <button class="edit-btn">Edit</button>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Return Time</h4>
                                        </div>
                                        <div class="tts-description">
                                            Approximately 10:30 PM.
                                        </div>
                                        <button class="edit-btn">Edit</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TripPlan;